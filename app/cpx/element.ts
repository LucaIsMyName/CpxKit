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
  // addEventListeners(elements?: string, event?: string, storage?: string): void;
  render(): void;
}

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

  // Other class properties and constructor remain unchanged...

  addEventListeners(elements: any = "*"): void {
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
    this.addEventListeners();
  }

  render() {
    this.innerHTML = this.initialContent;
  }
}
