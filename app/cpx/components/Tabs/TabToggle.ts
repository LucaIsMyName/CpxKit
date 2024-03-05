import { CpxElement } from "../../element";

export class CpxTabToggle extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button class="tab-toggle">
        ${this.initialContent}
    </button>
        `;
  }
}
customElements.define(`tab-toggle`, CpxTabToggle);
