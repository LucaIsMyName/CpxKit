/**
 * @class Element
 * @extends HTMLElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 *
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 */
import { State } from "./utils/state";
import { Storage } from "./utils/storage";

// Define the interface
interface CpxElementType extends HTMLElement {
  addEventListeners(elements?: string, event?: string, storage?: string): void;
  render(): void;
}

export class CpxElement extends HTMLElement implements CpxElementType {
  ID: string;
  initialContent: string;
  storage: Object;
  state: any;

  constructor() {
    super();
    this.ID =
      this.getAttribute("component:id") ||
      `${this.setAttribute(
        "component:id",
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padStart(6, "0")
          .toString()
      )}`;
    this.initialContent = this.innerHTML;
    this.storage = Storage;
    this.state = State;
  }

  addEventListeners(elements = "[data-set-state-key]", event = "click", storeIn = "local") {
    const allDataSetKeyButtons = this.querySelectorAll(elements);
    allDataSetKeyButtons.forEach((button) => {
      button.addEventListener(event, (e: EventListenerOrEventListenerObject | any) => {
        const key = e.target.dataset.setStateKey;
        console.log(key);
        const value = e.target.dataset.setStateValue;
        this.state.set(key, value);
        console.log(value);
        if (storeIn === "local") {
          Storage.Local.set(key, value);
        } else if (storeIn === "session") {
          Storage.Session.set(key, value);
        }
      });
    });
  }

  connectedCallback() {
    this.setAttribute("id", this.ID);
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = this.initialContent;
  }
}
