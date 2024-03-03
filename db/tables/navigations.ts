import { routes as ROUTES } from "./routes";

interface Navigation {
  main: Object;
  login: Object;
  cta: Object;
  user: Object;
  legal: Object;
  support: Object;
  customer: Object;
  business: Object;
  guest: Object;
  cart: Object;
  item: Object;
  productCardActions: Object;
}

export const navigations: Navigation = {
  main: [ROUTES.HOME, ROUTES.ABOUT, ROUTES.CONTACT, ROUTES.FAQ],
  login: [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.SIGN_IN],
  cta: [ROUTES.GET_STARTED, ROUTES.DOCS],
  user: [ROUTES.PROFILE, ROUTES.SETTINGS],
  legal: [ROUTES.IMPRINT, ROUTES.PRIVACY, ROUTES.TERMS],
  support: [ROUTES.FAQ, ROUTES.DEVELOPER],
  customer: [ROUTES.ITEM_OVERVIEW, ROUTES.ADD_SEARCHBOT, ROUTES.CART],
  business: [ROUTES.ADD_ITEM, ROUTES.DEVELOPER, ROUTES.DOCS],
  guest: [ROUTES.LOGIN, ROUTES.REGISTER],
  cart: [ROUTES.CART],
  item: [ROUTES.FILTER, ROUTES.ITEM_OVERVIEW, ROUTES.ITEM],
  productCardActions: [ROUTES.LIKE, ROUTES.SHARE, ROUTES.ADD_TO_CART],
};
