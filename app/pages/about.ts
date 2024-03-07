import { Cpx, Config } from "../app";
/**
 * @class PageAbout
 * @description
 * This is the home page for the application.
 * It contains all the core functionality of the home page.
 * @example
 * <app-page-home></app-page-home>
 */
export class PageAbout extends Cpx.Element {
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
                <text-element
                  text-element:type=h1
                  text-element:font-size="5xl"
                  text-element:font-weight="bold"
                  text-element:font-family="serif"
                  text-element:letter-spacing="lg"
                  text-element:line-height="xs"
                ><a href="#">About</a></text-element>
                <picture-element 
                  picture-element:aspect-ratio="3 / 1"
                  picture-element:url="https://via.placeholder.com/500"
                  ></picture-element>
                <audio-player
                  audio-player:has-title="true"
                  audio-player:has-artist="true"
                  audio-player:appearance="default"
                  audio-player:position="bottom-inside"></audio-player>
            </div>
        `;
  }
}

customElements.define(`${Config.prefix}-page-about`, PageAbout);
