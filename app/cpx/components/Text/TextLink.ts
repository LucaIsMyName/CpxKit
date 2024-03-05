import { CpxElement } from "../../element";

export class CpxTextLink extends CpxElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#" class="text-link">
        ${this.initialContent}
    </a>
        `;
  }
}
customElements.define(`text-link`, CpxTextLink);
