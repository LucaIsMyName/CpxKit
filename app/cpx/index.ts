import { CpxElement as Element } from "./element";
import { Config } from "./config";
// PlugIns & Utilities

import {
  //
  Storage,
} from "./utils/storage";
import {
  //
  State,
} from "./utils/state";
import {
  //
  Http,
} from "./utils/http";
import {
  //
  Sanitize,
} from "./utils/sanitize";
import {
  //
  Time,
} from "./utils/time";
import {
  //
  Json,
} from "./utils/json";
import {
  //
  Icon,
} from "./utils/icons";
import {
  //
  Id,
} from "./utils/id";
import {
  //
  String,
} from "./utils/string";
import {
  //
  Copy as copyAPI,
} from "./utils/copy";
import {
  //
  audioAPI,
} from "./utils/audio";
import {
  //
  videoAPI,
} from "./utils/video";
import {
  //
  Object,
} from "./utils/object";
import {
  //
  Tooltip as tooltipAPI,
} from "./utils/tooltip";

// Cpx Utility Components
import {
  //
  AccordionGroup,
  AccordionItem,
} from "./components/Accordion/index";
import {
  //
  AudioPlayer,
  AudioCurrent,
  AudioPlaylist,
  AudioControls,
  AudioControl,
} from "./components/Audio/index";
import {
  //
  AvatarElement,
  AvatarList,
} from "./components/Avatar";
import {
  //
  BadgeElement,
} from "./components/Badge";
import {
  //
  ChartElement,
} from "./components/Chart";
import {
  //
  CodeBlock,
} from "./components/Code";
import {
  //
  DropDownContainer,
  DropDownItem,
  DropDownTrigger,
} from "./components/DropDown";
import {
  //
  IconElement,
} from "./components/Icon";
import {
  //
  SliderContainer,
  SliderItem,
  runSlider as sliderAPI,
} from "./components/Slider";
import {
  //
  ParseMarkdown,
} from "./components/Parse";
import {
  //
  ProgressBar,
} from "./components/Progress";
import {
  //
  PictureElement,
} from "./components/Picture";
import {
  //
  RenderContainer,
} from "./components/Render";
import {
  //
  SuspenseAll,
} from "./components/Suspense";
import {
  //
  SkeletonElement,
} from "./components/Skeleton";
import {
  //
  TabContainer,
  TabHeader,
  TabContent,
  TabToggle,
} from "./components/Tab/index";
import {
  //
  ToolTip,
} from "./components/ToolTip";
import {
  //
  VideoPlayer,
  VideoControls,
  VideoControl,
  VideoPlaylist,
  VideoPlaylistItem,
} from "./components/Video";

export interface CpxInterface {
  Element: typeof Element;
  Components: {
    AccordionGroup: typeof HTMLElement;
    AccordionItem: typeof HTMLElement;
    AudioPlayer: typeof HTMLElement;
    AudioCurrent: typeof HTMLElement;
    AudioPlaylist: typeof HTMLElement;
    AudioControls: typeof HTMLElement;
    AudioControl: typeof HTMLElement;
    AvatarElement: typeof HTMLElement;
    AvatarList: typeof HTMLElement;
    BadgeElement: typeof HTMLElement;
    ChartElement: typeof HTMLElement;
    CodeBlock: typeof HTMLElement;
    DropDownContainer: typeof HTMLElement;
    DropDownItem: typeof HTMLElement;
    DropDownTrigger: typeof HTMLElement;
    IconElement: typeof HTMLElement;
    SliderContainer: typeof HTMLElement;
    SliderItem: typeof HTMLElement;
    ParseMarkdown: typeof HTMLElement;
    PictureElement: typeof HTMLElement;
    ProgressBar: typeof HTMLElement;
    RenderContainer: typeof HTMLElement;
    SuspenseAll: typeof HTMLElement;
    SkeletonElement: typeof HTMLElement;
    TabContainer: typeof HTMLElement;
    TabHeader: typeof HTMLElement;
    TabContent: typeof HTMLElement;
    TabToggle: typeof HTMLElement;
    ToolTip: typeof HTMLElement;
    VideoPlayer: typeof HTMLElement;
    VideoControls: typeof HTMLElement;
    VideoControl: typeof HTMLElement;
    VideoPlaylist: typeof HTMLElement;
    VideoPlaylistItem: typeof HTMLElement;
  };
  Functions: {
    audioAPI: Function;
    videoAPI: Function;
    sliderAPI: Function;
    copyAPI: Object;
    tooltipAPI: Function;
  };
  // define: Function;
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
  String: typeof String;
  Object: typeof Object;
  // Tooltip: typeof Tooltip;
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
  // Avatar
  AvatarElement,
  AvatarList,
  // Badge
  BadgeElement,
  // DropDown
  DropDownContainer,
  DropDownItem,
  DropDownTrigger,
  // Icon
  IconElement,
  // Code
  CodeBlock,
  // Chart
  ChartElement,
  //Slider
  SliderContainer,
  SliderItem,
  // Parse
  ParseMarkdown,
  // Picture
  PictureElement,
  // Progress
  ProgressBar,
  // Render
  RenderContainer,
  // Suspense
  SuspenseAll,
  // Skeleton
  SkeletonElement,
  // Tab
  TabContainer,
  TabHeader,
  TabContent,
  TabToggle,
  // Tooltip
  ToolTip,
  // Video
  VideoPlayer,
  VideoControls,
  VideoControl,
  VideoPlaylist,
  VideoPlaylistItem,
};

const Functions = {
  audioAPI,
  videoAPI,
  sliderAPI,
  copyAPI,
  tooltipAPI,
};

export const Cpx: CpxInterface = {
  // Base Element
  Element,
  // Utility Components
  Components,
  // API to use in UI and FrontEnd
  Functions,
  // Config
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
  String,
  Object,
};
