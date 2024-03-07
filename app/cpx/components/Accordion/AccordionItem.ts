import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
import { Cpx } from "../../index";

export class CpxAccordionItem extends CpxElement {
  classNames: string;
  title: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("accordion-item:class") || "";
    this.title = this.getAttribute("accordion-item:title") || "Accordion Item Title";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <details class="accordion-item" accordion-item:id="${Id.Generate.hex(6)}" class="accordion-item ${this.classNames}">
        <summary class="accordion-item__title">
            <div class="accordion-item__text">${this.title}</div>
            <div class="accordion-item__icon">
              ${this.querySelector("details")?.hasAttribute("open") === true ? `${Cpx.Icon.chevronUp}` : ``}
              ${this.querySelector("details")?.hasAttribute("open") === false ? `${Cpx.Icon.chevronDown}` : ``}
            </div>
        </summary>
        <div class="accordion-item__content">
          ${this.initialContent}
        </div>
    </details>
        `;
  }
}
customElements.define(`accordion-item`, CpxAccordionItem);
