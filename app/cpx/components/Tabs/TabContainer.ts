import { CpxElement } from "../../element";

export class CpxTabContainer extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="tab-container">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-container`, CpxTabContainer);
