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

// Cpx Utility Components
import { AccordionGroup, AccordionItem } from "./components/Accordion/index";
import { AudioPlayer, AudioCurrent, AudioPlaylist, AudioControls, AudioControl, runAudio as audioAPI } from "./components/Audio/index";
import { DropDown } from "./components/DropDown";
import { SliderContainer, SliderItem, runSlider as sliderAPI } from "./components/Slider";
import { PictureElement } from "./components/Picture";
import { SuspenseAll } from "./components/Suspense";
import { TextElement } from "./components/Text/index";
import { TabContainer, TabHeader, TabContent, TabToggle } from "./components/Tab/index";
import { VideoPlayer, VideoControls, VideoControl, VideoPlaylist, VideoPlaylistItem, runVideo as videoAPI } from "./components/Video";

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
    SliderContainer: typeof Element;
    SliderItem: typeof Element;
    PictureElement: typeof Element;
    SuspenseAll: typeof Element;
    TextElement: typeof Element;
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
  //Slider
  SliderContainer,
  SliderItem,
  // Picture
  PictureElement,
  // Suspense
  SuspenseAll,
  // Text
  TextElement,
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
  String,
};
