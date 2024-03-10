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
import { String } from "./utils/string";
import { Copy as copyAPI } from "./utils/copy";
import { audioAPI } from "./utils/audio";
import { videoAPI } from "./utils/video";
import { Object } from "./utils/object";

// Cpx Utility Components
import { AccordionGroup, AccordionItem } from "./components/Accordion/index";
import { AudioPlayer, AudioCurrent, AudioPlaylist, AudioControls, AudioControl } from "./components/Audio/index";
import { AvatarElement, AvatarList } from "./components/Avatar";
import { BadgeElement } from "./components/Badge";
import { CodeBlock } from "./components/Code";
import { DropDownContainer, DropDownItem, DropDownTrigger } from "./components/DropDown";
import { IconElement } from "./components/Icon";
import { SliderContainer, SliderItem, runSlider as sliderAPI } from "./components/Slider";
import { ParseMarkdown } from "./components/Parse";
import { PictureElement } from "./components/Picture";
import { SuspenseAll } from "./components/Suspense";
import { SkeletonElement } from "./components/Skeleton";
import { TabContainer, TabHeader, TabContent, TabToggle } from "./components/Tab/index";
import { VideoPlayer, VideoControls, VideoControl, VideoPlaylist, VideoPlaylistItem } from "./components/Video";

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
    AvatarElement: typeof Element;
    AvatarList: typeof Element;
    BadgeElement: typeof Element;
    DropDownContainer: typeof Element;
    DropDownItem: typeof Element;
    DropDownTrigger: typeof Element;
    IconElement: typeof Element;
    CodeBlock: typeof Element;
    SliderContainer: typeof Element;
    SliderItem: typeof Element;
    ParseMarkdown: typeof Element;
    PictureElement: typeof Element;
    SuspenseAll: typeof Element;
    SkeletonElement: typeof Element;
    TabContainer: typeof Element;
    TabHeader: typeof Element;
    TabContent: typeof Element;
    TabToggle: typeof Element;
    VideoPlayer: typeof Element;
    VideoControls: typeof Element;
    VideoControl: typeof Element;
    VideoPlaylist: typeof Element;
    VideoPlaylistItem: typeof Element;
  };
  Functions: {
    audioAPI: Function;
    videoAPI: Function;
    sliderAPI: Function;
    copyAPI: Object;
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
  String: typeof String;
  Object: typeof Object;
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
  //Slider
  SliderContainer,
  SliderItem,
  // Parse
  ParseMarkdown,
  // Picture
  PictureElement,
  // Suspense
  SuspenseAll,
  // Skeleton
  SkeletonElement,
  // Tab
  TabContainer,
  TabHeader,
  TabContent,
  TabToggle,
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
};

export const Cpx: CpxInterface = {
  // Base Element
  Element,
  // Utility Components
  Components,
  // API to use in UI and FrontEnd
  Functions,
  // Define Custom Elements
  define,
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
