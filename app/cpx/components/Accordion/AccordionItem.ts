import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
import { Icon } from "../../utils/icons";

export class CpxAccordionItem extends CpxElement {
  classNames: string;
  title: string;
  titleType: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("accordion-item:class") || "";
    this.title = this.getAttribute("accordion-item:title") || "Accordion Item Title";
    this.titleType = this.getAttribute("accordion-item:title:type") || "h3";
  }


  render() {
    this.innerHTML = `
    <details accordion-item:id="${Id.Generate.hex(6)}" class="${this.classNames} mb:4 border-b-width:1 border-color:gray-400 py:2 mt:4">
        <summary class="cursor:pointer display:flex items:center  ">
            <div class="">${this.title}</div>
            <div class="w:6 h:6">
              ${this.querySelector("details")?.hasAttribute("open") === true ? `${Icon.chevronUp}` : ``}
              ${this.querySelector("details")?.hasAttribute("open") === false ? `${Icon.chevronDown}` : ``}
            </div>
        </summary>
        <div class="py:4">
          <text-element>${this.initialContent}</text-element>
        </div>
    </details>
        `;
  }
}
customElements.define(`accordion-item`, CpxAccordionItem);
