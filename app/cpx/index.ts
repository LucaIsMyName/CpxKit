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
import { Id } from "./utils/id";

// Cpx Utility Components
import { AccordionGroup, AccordionItem } from "./components/Accordion/index";
import { AudioPlayer, AudioCurrent, AudioPlaylist, AudioControls, AudioControl, runAudio } from "./components/Audio/index";
import { DropDown } from "./components/DropDown";
import { PictureElement } from "./components/Picture";
import { TextParagraph, TextLink } from "./components/Text/index";
import { TabContainer, TabHeader, TabContent, TabToggle } from "./components/Tabs/index";

export interface CpxInterface {
  Element: typeof Element;
  Components: {
    AccordionGroup: typeof Element;
    AccordionItem: typeof Element;
    AudioPlayer: typeof Element;
    AudioCurrent: typeof Element;
    AudioPlaylist: typeof Element;
    AudioControls: typeof Element;
    AudioControl: typeof Element;
    DropDown: typeof Element;
    PictureElement: typeof Element;
    // AccordionTitle: typeof Element;
    TextParagraph: typeof Element;
    TextLink: typeof Element;
    TabContainer: typeof Element;
    TabHeader: typeof Element;
    TabContent: typeof Element;
    TabToggle: typeof Element;
  };
  Functions: {
    runAudio: Function;
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
  Id: typeof Id;
}
/**
 * @class Cpx
 * @description
 * This is the main class for the Cpx library.
 * It contains all the core functionality of the library.
 */
const Components = {
  // Accordion
  AccordionGroup,
  AccordionItem,
  // Audio
  AudioPlayer,
  AudioCurrent,
  AudioPlaylist,
  AudioControls,
  AudioControl,
  // DropDown
  DropDown,
  // Picture
  PictureElement,
  // Text
  TextParagraph,
  TextLink,
  // Tab
  TabContainer,
  TabHeader,
  TabContent,
  TabToggle,
};

const Functions = {
  runAudio,
};
export const Cpx: CpxInterface = {
  Element,
  Components,
  Functions,
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
  Id,
};
