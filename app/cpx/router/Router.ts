/**
 * Simple router implementation in vanilla JavaScript.
 * @class
 */

interface RouterInterface {
  routes: Object;
  init(): void;
  handleRoute(): void;
  findRoute(slug: string): Object | null;
  findNestedRoute(routes: Object[], slug: string): Object | null;
  renderContent(route: Object): void;
}
export class Router {
  routes: Object;
  /**
   * Creates an instance of Router.
   * @constructor
   * @param {Object} routes - Object containing the routes configuration.
   */
  constructor(
    routes: any = {
      Modal: {
        routes: [
          {
            title: "Modal Title",
            slug: "modalslug",
            function: false,
            routes: false,
          },
        ],
      },
      Page: {
        routes: [
          {
            title: "Home",
            slug: "home",
            function: false,
            routes: false,
          },
          {
            title: "About",
            slug: "about",
            function: false,
            routes: false,
          },
        ],
      },
    }
  ) {
    this.routes = routes;
  }

  /**
   * Initializes the router.
   */
  init() {
    // Add event listener to handle route changes
    window.addEventListener("hashchange", this.handleRoute.bind(this));
    // Initial route handling
    this.handleRoute();
    console.log("Router initialized");
  }

  /**
   * Handles route changes.
   */
  handleRoute() {
    const hash = window.location.hash.substring(1);
    const route = this.findRoute(hash);
    if (route) {
      this.renderContent(route);
    } else {
      // Handle not found route
      console.error("Route not found:", hash);
    }
  }

  /**
   * Finds the route matching the given slug.
   * @param {string} slug - The route slug.
   * @returns {Object|null} The route object if found, null otherwise.
   */
  findRoute(slug) {
    for (const category of Object.values(this.routes)) {
      for (const route of category.routes) {
        if (route.slug === slug) {
          return route;
        }
        if (route.routes) {
          const nestedRoute = this.findNestedRoute(route.routes, slug);
          if (nestedRoute) {
            return nestedRoute;
          }
        }
      }
    }
    return null;
  }

  /**
   * Finds a nested route within a route category.
   * @param {Object[]} routes - The array of routes.
   * @param {string} slug - The route slug.
   * @returns {Object|null} The route object if found, null otherwise.
   */
  findNestedRoute(routes, slug) {
    for (const route of routes) {
      if (route.slug === slug) {
        return route;
      }
    }
    return null;
  }

  /**
   * Renders the content of the route.
   * @param {Object} route - The route object.
   */
  renderContent(route) {
    if (route.content) {
      document.getElementById("app-container").innerHTML = route.content;
    } else if (route.function) {
      // Call the specified function
      route.function();
    } else {
      console.error("Invalid route configuration:", route);
    }
  }
}
