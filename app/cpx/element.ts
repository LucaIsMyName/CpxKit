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

interface CpxElementType {
  addClickHandler: Function;
  setInitialState: Function;
  reRender: Function;
  render: Function;
  storage: any; //?!
  state: any; // ?!
}
/**
 * @class CpxElement
 * @extends HTMLElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 * @property {any} storage - A reference to the Storage class. This is used to store data in the browser's local storage.
 * @property {any} state - A reference to the State class. This is used to store the state of the component.
 * @method {Function} reRender - A method that re-renders the component.
 * @method {Function} setInitialState - A method that sets the initial state of the component.
 * @method {Function} addClickHandler - A method that adds event listeners to the component.
 * @method {Function} render - A method that renders the component.
 * @method {Function} connectedCallback - A method that is called when the component is connected to the DOM.
 * @method {Function} render - A method that renders the component.
 * @method {Function} addClickHandler - A method that adds event listeners to the component.
 * @method {Function} connectedCallback - A method that is called when the component is connected to the DOM.
 */
export class CpxElement extends HTMLElement implements CpxElementType {
  ID: string;
  initialContent: string;
  storage: any;
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

  reRender() {
    this.render();
  }

  /**
   * setInitialState
   * @description
   * This method sets the initial state of the component.
   * It is called when the component is connected to the DOM.
   * @param page
   * @param modalisactive
   * @param modalcontent
   */
  setInitialState(page: String = "home", modalisactive: String = "false", modalcontent: String = "profile") {
    if (!this.state.has("page")) {
      document.addEventListener("DOMContentLoaded", () => {
        this.state.delete("page");
        this.state.set("page", page);
      });
    }
    if (!this.state.has("modalisactive")) {
      document.addEventListener("DOMContentLoaded", () => {
        this.state.set("modalisactive", modalisactive);
      });
    }
    if (!this.state.has("modalcontent")) {
      document.addEventListener("DOMContentLoaded", () => {
        this.state.set("modalcontent", modalcontent);
      });
    }
  }

  /**
   * addEventListeners
   * @description
   * This method adds event listeners to the component.
   * It is called when the element with the correct attribute is clicked
   * @param elements
   */
  addClickHandler(elements: any = "*"): void {
    // Get all elements within the component
    const allElements = this.querySelectorAll(elements);

    // Loop through each element
    allElements.forEach((element: any) => {
      // Get all attributes of the current element
      const attributes = Array.from(element.attributes);

      // Loop through each attribute
      attributes.forEach((attribute: any) => {
        const { name, value } = attribute;

        // Check if the attribute starts with 'click:'
        if (name.startsWith("click:")) {
          console.log("Attribute:", name, value);
          // Extract the action, target (state or storage), and setter from the attribute name
          const matchResult = name.match(/^click:(state|storage):set\s*\(([^,]+),([^)]+)\)/);
          if (matchResult && matchResult.length === 4) {
            const [, target, key, valueString] = matchResult;
            console.log("Parts:", target, key, valueString);
            if (target === "state" || target === "storage") {
              console.log("Processing:", target, key, valueString);

              // Add event listener
              element.addEventListener("click", () => {
                if (target === "state") {
                  console.log("State Key:", key);
                  this.state.set(key.trim(), valueString.trim());
                } else if (target === "storage") {
                  console.log("Storage Key:", key);
                  this.storage.set(key.trim(), valueString.trim());
                }
                const root = document.querySelectorAll("app-root");
                root.forEach((root: any) => {
                  root.reRender();
                });
              });
            }
          }
        }
      });
    });
  }

  connectedCallback() {
    this.setAttribute("id", this.ID);
    this.render();
    this.addClickHandler();
  }

  render() {
    this.innerHTML = this.initialContent;
  }
}
