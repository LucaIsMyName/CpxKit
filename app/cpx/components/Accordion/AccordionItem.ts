import { CpxElement } from "../../element";

export class CpxAccordionItem extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="accordion-item">
        ${this.initialContent}
    </div>
        `;
  }
}
customElements.define(`accordion-item`, CpxAccordionItem);
