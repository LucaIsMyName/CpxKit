import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
/**
 * @class CpxAccordionGroup
 * @extends CpxElement
 * @description
 * This is the base class for all custom elements in the app. It extends the native HTMLElement class and adds a few extra features.
 * @property {string} ID - A random number that is generated when the element is created. This is used to identify the element in the DOM.
 * @property {string} initialContent - The initial content of the element. This is used to store the content of the element before it is rendered.
 * @property {any} storage - A reference to the Storage class. This is used to store data in the browser's local storage.
 * @property {any} state - A reference to the State class. This is used to store the state of the component.
 */
export class CpxAccordionGroup extends CpxElement {
  classNames: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("accordion-group:class") || "";
  }

  connectedCallback() {
    this.render();
    this.animateAccordionContent();
  }

  animateAccordionContent() {
    /**
     * If any <summary> is clicked, expland the correspong details element and close ALL other that are open  inside the same <accorion-group> element, leave all other <accordion-group> element untouched
     */
    this.addEventListener("click", (e: any) => {
      if (e.target.tagName === "SUMMARY") {
        const accordionGroup = e.target.closest("accordion-group");
        const details = e.target.closest("details");
        const allDetails = accordionGroup.querySelectorAll("details");
        allDetails.forEach((detail: any) => {
          if (detail !== details) {
            detail.removeAttribute("open");
          }
        });
        this.render()
      }
    });
  }

  render() {
    this.innerHTML = `
    <section accordion-group:id="${Id.Generate.hex(12)}" class="display:block ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`accordion-group`, CpxAccordionGroup);
