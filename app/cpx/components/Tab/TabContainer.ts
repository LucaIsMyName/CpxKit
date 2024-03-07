import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
/**
 * @class CpxTabContainer
 * @description
 * TabContainer Component
 * @example
 * <tab-container tab-container:id="tab-container-id">
 */
export class CpxTabContainer extends CpxElement {
  tabContainerId: any;
  classNames: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("tab-container:class") || "";
    this.tabContainerId = this.getAttribute("tab-container:id") || Id.Generate.hex(12);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section
      tab-container:id="${this.tabContainerId}"
      class="tab-container ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-container`, CpxTabContainer);
