import { CpxElement } from "../../element";
import { Id } from "../../utils/id";

export class CpxTabToggle extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="tab-toggle" toggle:id="${Id.Generate.int(4)}" >
        ${this.initialContent}
    </button>
        `;
  }
}
customElements.define(`tab-toggle`, CpxTabToggle);
