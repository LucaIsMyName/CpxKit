import { CpxElement } from "../../element";

export class CpxTextParagraph extends CpxElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p class="text-paragraph">
        ${this.initialContent}
    </p>
        `;
  }
}
customElements.define(`text-paragraph`, CpxTextParagraph);
