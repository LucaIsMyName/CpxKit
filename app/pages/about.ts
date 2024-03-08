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
  state = Cpx.State;
  copyToElement = Cpx.Functions.copyAPI.toElement;
  constructor() {
    super();
    this.state = Cpx.State;
    this.copyToElement = Cpx.Functions.copyAPI.toElement;
  }

  connectedCallback() {
    this.render();
    this.addClickHandler();
    this.copyToElement();
  }
  addCopyClickHandler() {
    // Add click event listener to the copy button
  }
  render() {
    this.innerHTML = `
            <div style="text-align:center;max-width:768px;margin-inline:auto">
              <section copy-element="trigger">CopyButton</section>
              <section copy-element="target">Target Area
              </section>
              <section copy-element="origin">
                <text-element text-element:type=h1 text-element:font-size=xl>Origin Area</text-element>
              </section>  
                  
            <div>
                  <badge-element
                    badge-element:color="green">My Badge</badge-element>
                  <badge-element
                    badge-element:color="red">My Badge</badge-element>
                  <badge-element
                    badge-element:color="yellow">My Badge</badge-element>
              </div>
              <audio-player audio-player:has-playlist=false></audio-player>
              <video-player></video-player>
              <div>
                  <badge-element
                    badge-element:color="purple"
                    badge-element:size=md
                    >My Badge</badge-element>
                  <badge-element
                    badge-element:color="sky"
                    badge-element:size=md
                    badge-element:action="console.log('test')"
                    >Sky Badge</badge-element>
                  <badge-element
                    badge-element:color="pink"
                    badge-element:size=md
                    >My Badge</badge-element>
              </div>
                <code-block 
                  code-block:has-header="false" 
                  code-block:has-copy-button="false" 
                  code-block:title="myFiles" 
                  code-block:lang="bash" 
                  code-block:theme=light>
                  
console.log('test');
const myVar = 'test';
export function myFunction(param = true, { myVar }) {
    return { myVar, param };
}
</code-block>
            </div>
        `;
  }
}

customElements.define(`${Config.prefix}-page-about`, PageAbout);
