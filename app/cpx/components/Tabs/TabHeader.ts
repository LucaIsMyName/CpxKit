import { CpxElement } from "../../element";

export class CpxTabHeader extends CpxElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="tab-header">
        ${this.initialContent}
    </section>
        `;
  }
}

customElements.define(`tab-header`, CpxTabHeader);
