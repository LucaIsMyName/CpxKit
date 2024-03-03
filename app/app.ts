import { Config } from "./config";

import { Cpx } from "./cpx";

import { DB } from "../db/db";

import { ComponentRoot } from "./components/Root/Root";
import { ComponentHeader } from "./components/Header/Header";
import { ComponentFooter } from "./components/Footer/Footer";
import { ComponentModal } from "./components/Modal/Modal";
import { ComponentNav } from "./components/Nav/Nav";
import { ComponentText } from "./components/Text/Text";
import { ComponentImage } from "./components/Image/Image";
import { ComponentFetch } from "./components/Fetch/Fetch";

import { PageHome } from "./pages/home";
import { PageAbout } from "./pages/about";
import { PagePost } from "./pages/post";

export {
  Config,
  DB,
  // Functions and Utilities
  // Base Element
  Cpx,
  // Components
  ComponentRoot,
  ComponentHeader,
  ComponentFooter,
  ComponentModal,
  ComponentNav,
  ComponentText,
  ComponentImage,
  ComponentFetch,
  // Pages
  PageHome,
  PageAbout,
  PagePost,
};
