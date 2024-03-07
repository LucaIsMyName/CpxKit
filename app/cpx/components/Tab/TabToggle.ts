import { CpxElement } from "../../element";
import { Id } from "../../utils/id";

export class CpxTabToggle extends CpxElement {
  tabToggleId: any;
  classNames: string;
  constructor() {
    super();
    this.tabToggleId = this.getAttribute("toggle:id") || Id.Generate.int(4);
    this.classNames = this.getAttribute("toggle:class") || "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button
      class="tab-toggle ${this.classNames}"
      tab-toggle:id="${this.tabToggleId}">
        ${this.initialContent}
    </button>
        `;
  }
}
customElements.define(`tab-toggle`, CpxTabToggle);
