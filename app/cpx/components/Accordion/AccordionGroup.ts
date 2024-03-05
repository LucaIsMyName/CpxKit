import { CpxElement } from "../../element";

export class CpxAccordionGroup extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="accordion-group">
        ${this.initialContent}
    </div>
        `;
  }
}
customElements.define(`accordion-group`, CpxAccordionGroup);
