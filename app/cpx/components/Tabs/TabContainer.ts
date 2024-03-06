import { CpxElement } from "../../element";
import { Id } from "../../utils/id";

export class CpxTabContainer extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section tab-container:id="${Id.Generate.hex(12)}" class="tab-container">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-container`, CpxTabContainer);
