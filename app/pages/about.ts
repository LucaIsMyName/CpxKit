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
  copyToElement: any;
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
              <accordion-group>
                <accordion-item accordion-item:title="Accordion 1" accordion-item:open=true>
                  <text-element text-element:type="p">Accordion 1 Content</text-element>
                </accordion-item>
                <accordion-item accordion-item:title="Accordion 2">
                  <text-element text-element:type="p">Accordion 2 Content</text-element>
                </accordion-item>
                <accordion-item accordion-item:title="Accordion 3">
                  <text-element text-element:type="p">Accordion 3 Content</text-element>
                </accordion-item>
              </accordion-group>

            <skeleton-element 
              skeleton-element:display="block"
              skeleton-element:color="gray-400"></skeleton-element>
            <skeleton-element 
              skeleton-element:display="block"
              skeleton-element:color="gray-700"
              skeleton-element:width="md"
              skeleton-element:height="10"></skeleton-element>
            <code-block code-block:lang="js">
            console.log('test')</code-block>
              <section copy-element="trigger">CopyButton</section>
              <section copy-element="target">Target Area
              </section>
              <section copy-element="origin">
                <text-element text-element:type=h1 text-element:font-size=xl>Origin Area</text-element>
              </section>  
                  
            <div>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="green-500">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="red">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="green-600 " 
                  badge-element:color="yellow">My Badge</badge-element>
              </div>
              <audio-player audio-player:has-album=true></audio-player>
              <video-player></video-player>
              <div>
                  <badge-element
                    badge-element:color="purple-500"
                    badge-element:size=md
                    >My Badge</badge-element>
                  <badge-element
                    badge-element:color="black-500"
                    badge-element:size=xxs
                    badge-element:padding=2
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
                  code-block:lang="js" 
                  >
                  
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
