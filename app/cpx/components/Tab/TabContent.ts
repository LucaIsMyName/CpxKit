import { CpxElement } from "../../element";

export class CpxTabContent extends CpxElement {
  tabContentId: any;
  classNames: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("tab-content:class") || "";
    this.tabContentId = this.getAttribute("tab-content:id");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section 
      tab-content:id
      tab-content:is-active
      class="tab-content ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-content`, CpxTabContent);
