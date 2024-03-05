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
    <details class="accordion-item">
        ${this.initialContent}
    </details>
        `;
  }
}
customElements.define(`accordion-item`, CpxAccordionItem);
