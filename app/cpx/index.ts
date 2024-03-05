import { CpxElement as Element } from "./element";
import { define } from "./utils/element";
import { Config } from "./config";

// PlugIns & Utilities
import { Storage } from "./utils/storage";
import { State } from "./utils/state";
import { Http } from "./utils/http";
import { Sanitize } from "./utils/sanitize";
import { Time } from "./utils/time";
import { Json } from "./utils/json";
import { Icon } from "./utils/icons";

// Components
import { AccordionGroup, AccordionItem, AccordionTitle } from "./components/Accordion/index";
import { TextParagraph, TextLink } from "./components/Text/index";
import { TabContainer, TabHeader, TabContent, TabToggle } from "./components/Tabs/index";

export interface CpxInterface {
  Element: typeof Element;
  Components: {
    AccordionGroup: typeof Element;
    AccordionItem: typeof Element;
    AccordionTitle: typeof Element;
    TextParagraph: typeof Element;
    TextLink: typeof Element;
    TabContainer: typeof Element;
    TabHeader: typeof Element;
    TabContent: typeof Element;
    TabToggle: typeof Element;
  };
  define: Function;
  Config: typeof Config;
  // PlugIns & Utilities
  State: typeof State;
  Storage: typeof Storage;
  Http: typeof Http;
  Sanitize: typeof Sanitize;
  Time: typeof Time;
  Json: typeof Json;
  Icon: typeof Icon;
}
/**
 * @class Cpx
 * @description
 * This is the main class for the Cpx library. 
 * It contains all the core functionality of the library.
 */
const Components = {
  AccordionGroup,
  AccordionItem,
  AccordionTitle,
  TextParagraph,
  TextLink,
  TabContainer,
  TabHeader,
  TabContent,
  TabToggle,

};
export const Cpx: CpxInterface = {
  Element,
  Components,
  define,
  Config,
  // PlugIns & Utilities
  State,
  Storage,
  Http,
  Sanitize,
  Time,
  Json,
  Icon,
};
