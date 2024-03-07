/**
 * Icons
 * @description: This file contains all the icons used in the application.
 * @example
 * import { Icon } from "./utils/icons";
 * const icon = Icon.home;
 * @returns {string} - The SVG string of the home icon.
 */

export interface IconInterface {
  [key: string | number]: string | SVGAElement | HTMLElement | Element | Node | Text | null | undefined | void | boolean | number | Function | Object | Symbol | unknown | any;
}

type Icon = {
  [key: string]: any;
};
import home from "bundle-text:../../assets/icons/home.svg";
import informationCircle from "bundle-text:../../assets/icons/information-circle.svg";
import envelope from "bundle-text:../../assets/icons/envelope.svg";
import userCircle from "bundle-text:../../assets/icons/user-circle.svg";
import user from "bundle-text:../../assets/icons/user.svg";
import academicCap from "bundle-text:../../assets/icons/academic-cap.svg";
import bookOpen from "bundle-text:../../assets/icons/book-open.svg";
import briefcase from "bundle-text:../../assets/icons/briefcase.svg";
import chartBar from "bundle-text:../../assets/icons/chart-bar.svg";
import clipboard from "bundle-text:../../assets/icons/clipboard.svg";
import codeBracket from "bundle-text:../../assets/icons/code-bracket.svg";
import cog from "bundle-text:../../assets/icons/cog.svg";
import circleStack from "bundle-text:../../assets/icons/circle-stack.svg";
import cube from "bundle-text:../../assets/icons/cube.svg";
import banknotes from "bundle-text:../../assets/icons/banknotes.svg";
import currencyDollar from "bundle-text:../../assets/icons/currency-dollar.svg";
import currencyEuro from "bundle-text:../../assets/icons/currency-euro.svg";
import currencyPound from "bundle-text:../../assets/icons/currency-pound.svg";
import currencyRupee from "bundle-text:../../assets/icons/currency-rupee.svg";
import currencyYen from "bundle-text:../../assets/icons/currency-yen.svg";
import computerDesktop from "bundle-text:../../assets/icons/computer-desktop.svg";
import documentText from "bundle-text:../../assets/icons/document-text.svg";
import exclamationCircle from "bundle-text:../../assets/icons/exclamation-circle.svg";
import exclamationTrriangle from "bundle-text:../../assets/icons/exclamation-triangle.svg";
import shieldExclamation from "bundle-text:../../assets/icons/shield-exclamation.svg";
import arrowDownTray from "bundle-text:../../assets/icons/arrow-down-tray.svg";
import eye from "bundle-text:../../assets/icons/eye.svg";
import arrowDown from "bundle-text:../../assets/icons/arrow-down.svg";
import arrowLeft from "bundle-text:../../assets/icons/arrow-left.svg";
import arrowRight from "bundle-text:../../assets/icons/arrow-right.svg";
import arrowUp from "bundle-text:../../assets/icons/arrow-up.svg";
import arrowDownRight from "bundle-text:../../assets/icons/arrow-down-right.svg";
import arrowDownLeft from "bundle-text:../../assets/icons/arrow-down-left.svg";
import arrowUpRight from "bundle-text:../../assets/icons/arrow-up-right.svg";
import arrowUpLeft from "bundle-text:../../assets/icons/arrow-up-left.svg";
import arrowLongDown from "bundle-text:../../assets/icons/arrow-long-down.svg";
import arrowLongLeft from "bundle-text:../../assets/icons/arrow-long-left.svg";
import arrowLongRight from "bundle-text:../../assets/icons/arrow-long-right.svg";
import arrowLongUp from "bundle-text:../../assets/icons/arrow-long-up.svg";
import arrowUTurnLeft from "bundle-text:../../assets/icons/arrow-uturn-left.svg";
import arrowUTurnRight from "bundle-text:../../assets/icons/arrow-uturn-right.svg";
import arrowUTurnUp from "bundle-text:../../assets/icons/arrow-uturn-up.svg";
import arrowUTurnDown from "bundle-text:../../assets/icons/arrow-uturn-down.svg";
import chevronDown from "bundle-text:../../assets/icons/chevron-down.svg";
import chevronLeft from "bundle-text:../../assets/icons/chevron-left.svg";
import chevronRight from "bundle-text:../../assets/icons/chevron-right.svg";
import chevronUp from "bundle-text:../../assets/icons/chevron-up.svg";
import chevronDoubleDown from "bundle-text:../../assets/icons/chevron-double-down.svg";
import chevronDoubleLeft from "bundle-text:../../assets/icons/chevron-double-left.svg";
import chevronDoubleRight from "bundle-text:../../assets/icons/chevron-double-right.svg";
import chevronDoubleUp from "bundle-text:../../assets/icons/chevron-double-up.svg";
import cloudArrowDown from "bundle-text:../../assets/icons/cloud-arrow-down.svg";
import cloudArrowUp from "bundle-text:../../assets/icons/cloud-arrow-up.svg";
import folder from "bundle-text:../../assets/icons/folder.svg";
import folderOpen from "bundle-text:../../assets/icons/folder-open.svg";
import folderPlus from "bundle-text:../../assets/icons/folder-plus.svg";
import folderMinus from "bundle-text:../../assets/icons/folder-minus.svg";
import folderArrowDown from "bundle-text:../../assets/icons/folder-arrow-down.svg";
import adjustmentsHorizontal from "bundle-text:../../assets/icons/adjustments-horizontal.svg";
import adjustmentsVertical from "bundle-text:../../assets/icons/adjustments-vertical.svg";
import archiveBox from "bundle-text:../../assets/icons/archive-box.svg";
import archiveBoxXMark from "bundle-text:../../assets/icons/archive-box-x-mark.svg";
import archiveBoxArrowDown from "bundle-text:../../assets/icons/archive-box-arrow-down.svg";
import bars2 from "bundle-text:../../assets/icons/bars-2.svg";
import bars3 from "bundle-text:../../assets/icons/bars-3.svg";
import bars4 from "bundle-text:../../assets/icons/bars-4.svg";
import bars3BottomLeft from "bundle-text:../../assets/icons/bars-3-bottom-left.svg";
import bars3BottomRight from "bundle-text:../../assets/icons/bars-3-bottom-right.svg";
import bars3CenterLeft from "bundle-text:../../assets/icons/bars-3-center-left.svg";
import barsArrowUp from "bundle-text:../../assets/icons/bars-arrow-up.svg";
import barsArrowDown from "bundle-text:../../assets/icons/bars-arrow-down.svg";
import bell from "bundle-text:../../assets/icons/bell.svg";
import bellAlert from "bundle-text:../../assets/icons/bell-alert.svg";
import bellSnooze from "bundle-text:../../assets/icons/bell-snooze.svg";
import bellSlash from "bundle-text:../../assets/icons/bell-slash.svg";
import bolt from "bundle-text:../../assets/icons/bolt.svg";
import boltSlash from "bundle-text:../../assets/icons/bolt-slash.svg";
import bookmark from "bundle-text:../../assets/icons/bookmark.svg";
import bookmarkSquare from "bundle-text:../../assets/icons/bookmark-square.svg";
import buildingLibrary from "bundle-text:../../assets/icons/building-library.svg";
import buildingOffice from "bundle-text:../../assets/icons/building-office.svg";
import buildingOffice2 from "bundle-text:../../assets/icons/building-office-2.svg";
import buildingStorefront from "bundle-text:../../assets/icons/building-storefront.svg";
import camera from "bundle-text:../../assets/icons/camera.svg";
import calendar from "bundle-text:../../assets/icons/calendar.svg";
import clock from "bundle-text:../../assets/icons/clock.svg";
import creditCard from "bundle-text:../../assets/icons/credit-card.svg";
import shoppingCart from "bundle-text:../../assets/icons/shopping-cart.svg";
import chartBarSquare from "bundle-text:../../assets/icons/chart-bar-square.svg";
import chartPie from "bundle-text:../../assets/icons/chart-pie.svg";
import chatBubbleBottomCenterText from "bundle-text:../../assets/icons/chat-bubble-bottom-center-text.svg";
import chatBubbleBottomCenter from "bundle-text:../../assets/icons/chat-bubble-bottom-center.svg";
import chatBubbleLeftEllipsis from "bundle-text:../../assets/icons/chat-bubble-left-ellipsis.svg";
import chatBubbleOvalLeft from "bundle-text:../../assets/icons/chat-bubble-oval-left.svg";
import chatBubbleOvalLeftEllipsis from "bundle-text:../../assets/icons/chat-bubble-oval-left-ellipsis.svg";
import faceSmile from "bundle-text:../../assets/icons/face-smile.svg";
import faceFrown from "bundle-text:../../assets/icons/face-frown.svg";
import fire from "bundle-text:../../assets/icons/fire.svg";
import film from "bundle-text:../../assets/icons/film.svg";
import flag from "bundle-text:../../assets/icons/flag.svg";
import globeAlt from "bundle-text:../../assets/icons/globe-alt.svg";
import globeAmericas from "bundle-text:../../assets/icons/globe-americas.svg";
import globeEuropeAfrica from "bundle-text:../../assets/icons/globe-europe-africa.svg";
import globeAsiaAustralia from "bundle-text:../../assets/icons/globe-asia-australia.svg";
import handRaised from "bundle-text:../../assets/icons/hand-raised.svg";
import handThumbDown from "bundle-text:../../assets/icons/hand-thumb-down.svg";
import handThumbUp from "bundle-text:../../assets/icons/hand-thumb-up.svg";
import hashtag from "bundle-text:../../assets/icons/hashtag.svg";
import heart from "bundle-text:../../assets/icons/heart.svg";
import identification from "bundle-text:../../assets/icons/identification.svg";
import inbox from "bundle-text:../../assets/icons/inbox.svg";
import inboxArrowDown from "bundle-text:../../assets/icons/inbox-arrow-down.svg";
import inboxStack from "bundle-text:../../assets/icons/inbox-stack.svg";
import key from "bundle-text:../../assets/icons/key.svg";
import language from "bundle-text:../../assets/icons/language.svg";
import lightBulb from "bundle-text:../../assets/icons/light-bulb.svg";
import link from "bundle-text:../../assets/icons/link.svg";
import listBullet from "bundle-text:../../assets/icons/list-bullet.svg";
import lockClosed from "bundle-text:../../assets/icons/lock-closed.svg";
import lockOpen from "bundle-text:../../assets/icons/lock-open.svg";
import magnifyingGlassMinus from "bundle-text:../../assets/icons/magnifying-glass-minus.svg";
import magnifyingGlassPlus from "bundle-text:../../assets/icons/magnifying-glass-plus.svg";
import magnifyingGlass from "bundle-text:../../assets/icons/magnifying-glass.svg";
import mapPin from "bundle-text:../../assets/icons/map-pin.svg";
import map from "bundle-text:../../assets/icons/map.svg";
import megaphone from "bundle-text:../../assets/icons/megaphone.svg";
import microphone from "bundle-text:../../assets/icons/microphone.svg";
import moon from "bundle-text:../../assets/icons/moon.svg";
import newspaper from "bundle-text:../../assets/icons/newspaper.svg";
import noSymbol from "bundle-text:../../assets/icons/no-symbol.svg";
import paperAirplane from "bundle-text:../../assets/icons/paper-airplane.svg";
import paperClip from "bundle-text:../../assets/icons/paper-clip.svg";
import pencil from "bundle-text:../../assets/icons/pencil.svg";
import pencilSquare from "bundle-text:../../assets/icons/pencil-square.svg";
import phone from "bundle-text:../../assets/icons/phone.svg";
import phoneArrowDownLeft from "bundle-text:../../assets/icons/phone-arrow-down-left.svg";
import phoneArrowUpRight from "bundle-text:../../assets/icons/phone-arrow-up-right.svg";
import plus from "bundle-text:../../assets/icons/plus.svg";
import plusCircle from "bundle-text:../../assets/icons/plus-circle.svg";
import minus from "bundle-text:../../assets/icons/minus.svg";
import minusCircle from "bundle-text:../../assets/icons/minus-circle.svg";
import queueList from "bundle-text:../../assets/icons/queue-list.svg";
import viewColumns from "bundle-text:../../assets/icons/view-columns.svg";
import questionMarkCircle from "bundle-text:../../assets/icons/question-mark-circle.svg";
import rocketLaunch from "bundle-text:../../assets/icons/rocket-launch.svg";
import scale from "bundle-text:../../assets/icons/scale.svg";
import funnel from "bundle-text:../../assets/icons/funnel.svg";
import xMark from "bundle-text:../../assets/icons/x-mark.svg";
import share from "bundle-text:../../assets/icons/share.svg";
import speakerWave from "bundle-text:../../assets/icons/speaker-wave.svg";
import play from "bundle-text:../../assets/icons/play.svg";
import forward from "bundle-text:../../assets/icons/forward.svg";
import backward from "bundle-text:../../assets/icons/backward.svg";
import arrowPath from "bundle-text:../../assets/icons/arrow-path.svg";



export const Icon: IconInterface = {
  arrowPath,
  forward,
  backward,
  play,
  speakerWave,
  home,
  share,
  xMark,
  eye,
  informationCircle,
  envelope,
  userCircle,
  user,
  academicCap,
  bookOpen,
  briefcase,
  chartBar,
  clipboard,
  codeBracket,
  cog,
  circleStack,
  cube,
  banknotes,
  currencyDollar,
  currencyEuro,
  currencyPound,
  currencyRupee,
  currencyYen,
  computerDesktop,
  documentText,
  exclamationCircle,
  exclamationTrriangle,
  shieldExclamation,
  arrowDownTray,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDownRight,
  arrowDownLeft,
  arrowUpRight,
  arrowUpLeft,
  arrowLongDown,
  arrowLongLeft,
  arrowLongRight,
  arrowLongUp,
  arrowUTurnLeft,
  arrowUTurnRight,
  arrowUTurnUp,
  arrowUTurnDown,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  chevronDoubleDown,
  chevronDoubleLeft,
  chevronDoubleRight,
  chevronDoubleUp,
  cloudArrowDown,
  cloudArrowUp,
  folder,
  folderOpen,
  folderPlus,
  folderMinus,
  folderArrowDown,
  adjustmentsHorizontal,
  adjustmentsVertical,
  archiveBox,
  archiveBoxXMark,
  archiveBoxArrowDown,
  bars2,
  bars3,
  bars4,
  bars3BottomLeft,
  bars3BottomRight,
  bars3CenterLeft,
  barsArrowUp,
  barsArrowDown,
  bell,
  bellAlert,
  bellSnooze,
  bellSlash,
  bolt,
  boltSlash,
  bookmark,
  bookmarkSquare,
  buildingLibrary,
  buildingOffice,
  buildingOffice2,
  buildingStorefront,
  camera,
  chartBarSquare,
  chartPie,
  chatBubbleBottomCenterText,
  chatBubbleBottomCenter,
  chatBubbleLeftEllipsis,
  chatBubbleOvalLeft,
  chatBubbleOvalLeftEllipsis,
  clock,
  creditCard,
  calendar,
  faceSmile,
  faceFrown,
  fire,
  film,
  flag,
  globeAlt,
  globeAmericas,
  globeEuropeAfrica,
  globeAsiaAustralia,
  handRaised,
  handThumbDown,
  handThumbUp,
  hashtag,
  heart,
  identification,
  inbox,
  inboxArrowDown,
  inboxStack,
  key,
  language,
  lightBulb,
  link,
  listBullet,
  lockClosed,
  lockOpen,
  magnifyingGlassMinus,
  magnifyingGlassPlus,
  magnifyingGlass,
  mapPin,
  map,
  megaphone,
  microphone,
  moon,
  newspaper,
  noSymbol,
  paperAirplane,
  paperClip,
  pencil,
  pencilSquare,
  phone,
  phoneArrowDownLeft,
  phoneArrowUpRight,
  plus,
  plusCircle,
  minus,
  minusCircle,
  queueList,
  viewColumns,
  questionMarkCircle,
  shoppingCart,
  rocketLaunch,
  scale,
  funnel,
};
