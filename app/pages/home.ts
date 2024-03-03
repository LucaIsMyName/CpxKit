import { Cpx, Config } from "../app";

export class PageHome extends Cpx.Element {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <app-text  text:format=h1 text:weight=bold text:size=6xl text:letter-spacing=0 text:line-height=md text:color=primary>
                Home Page
            </app-text>
            <app-image image:has-overlay="true"></app-image>
        `;
  }
}

customElements.define(`${Config.prefix}-page-home`, PageHome);
