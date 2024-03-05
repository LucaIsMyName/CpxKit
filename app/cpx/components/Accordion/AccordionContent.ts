import { CpxElement } from "../../element";

export class CpxAccordionContent extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="accordion-content">
        ${this.initialContent}
    </div>
        `;
  }
}
customElements.define(`accordion-content`, CpxAccordionContent);
