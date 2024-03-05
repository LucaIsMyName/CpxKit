import { Cpx } from "../../app/app";

interface Route {
  page: string | null;
  title: string;
  description: string;
  icon: any;
  isModal: boolean;
  isAction: boolean;
}

export const routes: { [key: string]: Route } = {
  HOME: {
    page: "home",
    title: "Home",
    description: "Home Page",
    icon: Cpx.Icon.home,
    isModal: false,
    isAction: false,
  },
  ABOUT: {
    page: "about",
    title: "About",
    description: "About Page",
    icon: Cpx.Icon.informationCircle,
    isModal: true,
    isAction: false,
  },
  CONTACT: {
    page: "contact",

    title: "Contact",
    description: "Contact Page",
    icon: Cpx.Icon.envelope,
    isModal: true,
    isAction: false,
  },
  LOGIN: {
    page: "login",

    title: "Login",
    description: "Login Page",
    icon: Cpx.Icon.userCircle,
    isModal: false,
    isAction: false,
  },
  REGISTER: {
    page: "register",

    title: "Register",
    description: "Register Page",
    icon: Cpx.Icon.userCircle,
    isModal: false,
    isAction: false,
  },
  SIGN_IN: {
    page: "sign-in",

    title: "Sign In",
    description: "Sign In Page",
    icon: Cpx.Icon.userCircle,
    isModal: false,
    isAction: false,
  },
  PROFILE: {
    page: "profile",

    title: "Profile",
    description: "Profile Page",
    icon: Cpx.Icon.userCircle,
    isModal: false,
    isAction: false,
  },
  SETTINGS: {
    page: "settings",

    title: "Settings",
    description: "Settings Page",
    icon: Cpx.Icon.cog,
    isModal: true,
    isAction: false,
  },
  IMPRINT: {
    page: "imprint",

    title: "Imprint",
    description: "Imprint Page",
    icon: Cpx.Icon.scale,
    isModal: false,
    isAction: false,
  },
  PRIVACY: {
    page: "privacy",

    title: "Privacy",
    description: "Privacy Page",
    icon: Cpx.Icon.scale,
    isModal: true,
    isAction: false,
  },
  TERMS: {
    page: "terms",

    title: "Terms",
    description: "Terms Page",
    icon: Cpx.Icon.scale,
    isModal: true,
    isAction: false,
  },
  FAQ: {
    page: "faq",

    title: "FAQ",
    description: "FAQ Page",
    icon: Cpx.Icon.questionMarkCircle,
    isModal: true,
    isAction: false,
  },
  DEVELOPER: {
    page: "developer",

    title: "Developer",
    description: "Developer Page",
    icon: Cpx.Icon.codeBracket,
    isModal: false,
    isAction: false,
  },
  ADD_SEARCHBOT: {
    page: "add-searchbot",

    title: "Add Searchbot",
    description: "Add Searchbot Page",
    icon: Cpx.Icon.eye,
    isModal: true,
    isAction: false,
  },
  ADD_ITEM: {
    page: "add-item",

    title: "Add Item",
    description: "Add Item Page",
    icon: Cpx.Icon.plusCircle,
    isModal: true,
    isAction: false,
  },
  FILTER: {
    page: "filter",

    title: "Filter",
    description: "Filter Page",
    icon: Cpx.Icon.funnel,
    isModal: true,
    isAction: false,
  },
  ITEM_OVERVIEW: {
    page: "item-overview",

    title: "Item Overview",
    description: "Item Overview Page",
    icon: Cpx.Icon.viewColumns,
    isModal: false,
    isAction: false,
  },
  ITEM: {
    page: "item",

    title: "Item",
    description: "Item Page",
    icon: Cpx.Icon.rocketLaunch,
    isModal: false,
    isAction: false,
  },
  CART: {
    page: "cart",

    title: "Cart",
    description: "Cart Page",
    icon: Cpx.Icon.shoppingCart,
    isModal: true,
    isAction: false,
  },
  GET_STARTED: {
    page: "get-started",

    title: "Get Started",
    description: "Get Started Page",
    icon: Cpx.Icon.rocketLaunch,
    isModal: false,
    isAction: false,
  },
  DOCS: {
    page: "docs",

    title: "Docs",
    description: "Docs Page",
    icon: Cpx.Icon.bookOpen,
    isModal: false,
    isAction: false,
  },
  // ACTIONS
  LIKE: {
    page: null,

    title: "Like",
    description: "Like this Item",
    icon: Cpx.Icon.heart,
    isModal: false,
    isAction: true,
  },
  SHARE: {
    page: null,

    title: "Share",
    description: "Share this Item",
    icon: Cpx.Icon.share,
    isModal: false,
    isAction: true,
  },
  ADD_TO_CART: {
    page: null,

    title: "Add to Cart",
    description: "Add this Item to your Cart",
    icon: Cpx.Icon.shoppingCart,
    isModal: false,
    isAction: true,
  },
};
