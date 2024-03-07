import { CpxElement } from "../../element";

export class CpxTabHeader extends CpxElement {
  tabHeaderId: any;
  classNames: string;
  constructor() {
    super();
    this.tabHeaderId = this.getAttribute("tab-header:id");
    this.classNames = this.getAttribute("tab-header:class") || "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section 
      tab-header:id="${this.tabHeaderId} " 
      class="tab-header ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
  }
}

customElements.define(`tab-header`, CpxTabHeader);
