import { Config } from "./config";
import { Cpx } from "./cpx";
import { DB } from "../db/db";
// Components
import { ComponentRoot } from "./components/Root/Root";
import { ComponentNav } from "./components/Nav/Nav";
// Pages
import { PageHome } from "./pages/home";
import { PageAbout } from "./pages/about";

export {
  // Export App & Cpx Global Objects
  Config,
  DB,
  Cpx,
  // Export Components
  ComponentRoot,
  ComponentNav,
  // Export Pages
  PageHome,
  PageAbout,
};
