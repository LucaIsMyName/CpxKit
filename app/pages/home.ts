import { Cpx, Config } from "../app";
/**
 * @class PageHome
 * @description
 * This is the home page for the application.
 * It contains all the core functionality of the home page.
 * @example
 * <app-page-home></app-page-home>
 */
export class PageHome extends Cpx.Element {
  constructor() {
    super();
    this.state = Cpx.State;
  }

  connectedCallback() {
    this.render();
    this.addClickHandler();
  }

  render() {
    this.innerHTML = `
            <div style="text-align:center">
                <text-element text-element:type=h1>Home</text-element>
            </div>
        `;
  }
}

customElements.define(`${Config.prefix}-page-home`, PageHome);
