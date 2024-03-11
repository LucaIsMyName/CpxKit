import { CpxElement } from "../../element";
import { Id } from "../../utils/id";

export class CpxRenderContainer extends CpxElement {
  classNames: string;
  title: string;
  titleType: string;

  constructor() {
    super();
  }


  render() {
    this.innerHTML = `
        ${this.initialContent}
        `;
  }
}
customElements.define(`render-container`, CpxRenderContainer);
