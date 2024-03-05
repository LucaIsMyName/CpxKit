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
};
