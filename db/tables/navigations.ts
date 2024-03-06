import { routes as ROUTES } from "./routes";

interface NavigationInterface {
  main: Object;
legal: Object;
}

export const navigations: NavigationInterface = {
  main: [ROUTES.home, ROUTES.about],
  legal: [ROUTES.imprint, ROUTES.privacy],
};
