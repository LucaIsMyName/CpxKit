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
            <div style="max-width:768px; margin-inline:auto; padding: var(--4)">
              <parse-markdown
              parse-markdown:styles="true"
              parse-markdown:url="https://raw.githubusercontent.com/adam-p/markdown-here/master/README.md"></parse-markdown>
                
            </div>
        `;
  }
}

customElements.define(`${Config.prefix}-page-home`, PageHome);
