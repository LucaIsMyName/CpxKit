/**
 * @class Element
 * @extends HTMLElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 *
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 */
import { State } from "./utils/state.js";
import { Storage } from "./utils/storage.js";

export class Element extends HTMLElement {
  ID: any;
  initialContent: string;
  storage: any;
  state: any;

  constructor() {
    super();
    this.ID = this.id || `${this.setAttribute("id", Math.floor(Math.random() * 9999).toString())}`;
    this.initialContent = this.innerHTML;
    this.storage = Storage;
    this.state = State;
  }
  
  addEventListeners(elements: string = "[data-set-state-key]", event: string = "click", storage: string = "local") {
    const allDataSetKeyButtons = this.querySelectorAll(elements);
    allDataSetKeyButtons.forEach((button) => {
      button.addEventListener(event, (e: any) => {
        State.set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
        switch (storage) {
          case "local":
            Storage.Local.set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
            break;
          case "session":
            Storage.Session.set(e.target.dataset.setStateKey, e.target.dataset.setStateValue);
            break;
          default:
            return;
        }
        this.render();
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
