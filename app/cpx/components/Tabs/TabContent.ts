import { CpxElement } from "../../element";

export class CpxTabContent extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="tab-content">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-content`, CpxTabContent);
