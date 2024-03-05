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
    <summary class="accordion-title">
        ${this.initialContent}
    </summary>
        `;
  }
}
customElements.define(`accordion-title`, CpxAccordionTitle);
