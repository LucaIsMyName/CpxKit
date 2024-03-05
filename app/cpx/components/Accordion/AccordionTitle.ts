import { CpxElement } from "../../element";

export class CpxAccordionTitle extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="accordion-title">
        ${this.initialContent}
    </div>
        `;
  }
}
customElements.define(`accordion-title`, CpxAccordionTitle);
