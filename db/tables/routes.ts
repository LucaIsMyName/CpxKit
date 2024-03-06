import { Cpx } from "../../app/app";

type RouteType = "page" | "modal" | "action";

export interface RouteInterface {
  type: RouteType;
  page: string;
  title: string;
  description: string;
  icon: any;
}

export const routes: { [key: string]: RouteInterface } = {
  home: {
    type: "page", // "page", "modal", "action"
    page: "home",
    title: "Home",
    description: "Home Page",
    icon: Cpx.Icon.home,
  },
  about: {
    type: "page", // "page", "modal", "action"
    page: "about",
    title: "About",
    description: "About Page",
    icon: Cpx.Icon.informationCircle,
  },
  contact: {
    type: "page", // "page", "modal", "action"
    page: "contact",
    title: "Contact",
    description: "Contact Page",
    icon: Cpx.Icon.envelope,
  },
  imprint: {
    page: "imprint",
    type: "page", // "page", "modal", "action"
    title: "Imprint",
    description: "Imprint Page",
    icon: Cpx.Icon.scale,
  },
  privacy: {
    type: "page", // "page", "modal", "action"
    page: "privacy",
    title: "Privacy",
    description: "Privacy Page",
    icon: Cpx.Icon.scale,
  },
};
