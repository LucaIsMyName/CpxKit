import { Router } from "./cpx/router";

export const AppRoutes = {
  Modal: {
    routes: [
      {
        title: "Imprint",
        slug: "imprint",
        content: `<app-page-legal></app-page-legal>`,
        function: false,
        routes: false,
      },
      {
        title: "Privacy",
        slug: "privacy",
        content: `<app-page-privacy></app-page-privacy>`,
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
        content: `<app-page-home></app-page-home>`,
        function: false,
        routes: false,
      },
      {
        title: "About",
        slug: "about",
        content: `<app-page-about></app-page-about>`,
        function: false,
        routes: [
          {
            title: "Team",
            slug: "team",
            content: `<app-page-team></app-page-team>`,
            function: false,
            routes: false,
          },
          {
            title: "History",
            slug: "history",
            content: `<app-page-history></app-page-history>`,
            function: false,
            routes: false,
          },
        ],
      },
    ],
  },
  Action: {
    routes: [
      {
        title: "Add",
        slug: "add",
        content: false,
        function: toString(),
      },

      {
        title: "Delete",
        slug: "delete",
        content: false,
        function: toString(),
      },
    ],
  },
};

// Route Object is split in 3 Parts
// 1. Modals: Content that overlays the current page
// 2. Pages: Content inside the main COntainer of the App
// 3. Actions: Routes that dont trigger any change in the DOM regarding changing Pages or Modals but runs a give function when activated
// Instantiate the router with the defined routes
const router = new Router(AppRoutes);
// Initialize the router
router.init();