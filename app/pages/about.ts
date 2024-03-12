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
    console.log(this.state.get("page"));
    this.innerHTML = `
    <chart-element chart-element:type="line">
</chart-element>
    <br><br>
    <br><br>
    <br><br>
    <p>lrmen2ne <tool-tip tool-tip:offset:x=0 tool-tip:content="This is a tooltip">Tooltip</tool-tip> 2 lwofpwkenfewkndf <tool-tip tool-tip:offset:x=0 tool-tip:content="This is a tooltip 2 loonger texdt sdinj">Tooltip</tool-tip></p>
     
    </p>
    <br><br>
    <br><br>
    <progress-bar
      progress-bar:start=0
      progress-bar:end=200
      progress-bar:unit="%"
      progress-bar:unit="%" 
      progress-bar:progress=46
      progress-bar:progress:color=danger-500
      progress-bar:progress:color:hover=danger-900
      progress-bar:progress:color=danger-500
      progress-bar:bg=shade-lg-900
      ></progress-bar>
    <br><br>
    <avatar-list avatar-element:gap="1">
    <avatar-element
      avatar-element:alt="Avatar"
      avatar-element:size="12"></avatar-element>
    <avatar-element
      avatar-element:url="https://via.placeholder.com/150"
      avatar-element:alt="Avatar" avatar-element:size="12"></avatar-element>
    <avatar-element
      avatar-element:url="https://via.placeholder.com/150"
      avatar-element:alt="Avatar" avatar-element:size="12"></avatar-element>
    </avatar-list> 
    
    <icon-element
      icon-element:is-inline="false"
      icon-element:icon="backward"
      icon-element:svg:stroke="currentColor"
      icon-element:svg:stroke-width="3"
      icon-element:url="https://placehold.co/100"
      icon-element:width="16"
      icon-element:height="16"
      icon-element:bg="text-500"
      ></icon-element>
      <icon-element
      icon-element:icon="backward"
      icon-element:svg:stroke="currentColor"
      icon-element:svg:stroke-width="1"
      icon-element:url="https://placehold.co/100"
      icon-element:width="16"
      icon-element:height="16"
      icon-element:bg="text-500"
      ></icon-element>
    <slider-container slider-container:slides-per-view=1 slider-container:slides-per-view:medium=3 slider-container:loop=false slider-container:direction=horizontal>
      <slider-item>
        <img class="w:full" src="https://via.placeholder.com/768x400" alt="Slider Image 1">
      </slider-item>
      <slider-item>
        <img class="w:full" src="https://via.placeholder.com/768x400" alt="Slider Image 2">
      </slider-item>
      <slider-item>
        <div class="w:ful h:available"><p>Slider Content 3</p></div>
      </slider-item>
      </slider-container>


      <section class="display:flex">
    <dropdown-container dropdown-container:position:y=top dropwdown-container:event:hover=true dropdown:title="Header">
      <dropdown-item>
          Dropdown Content<br>
          Yo<br>
          pwk,DSÜQPKDWÜW
        </dropdown-item>
    </dropdown-container>

     <dropdown-container
      dropdown-container:position:y=bottom
      dropdown-container:event:hover="true"
      dropdown-container:event:focus="true"
      dropdown-container:title="Header2">
        <section>
              Dropdown Content<br>
              Yo<br>
              pwk,DSÜQPKDWÜW
        </section>
    </dropdown-container>
    </section>

    <div>
   ${Cpx.String.trimWhitespace(
     ` <pre>
    
   hello   
      ,y

      edwesdf</pre>`,
     "all"
   )}
    <pre>hello   
    ,y

    edwesdf</pre>
</div>
    <tab-container tab-container:padding=0>
      <tab-header tab-header:padding=4 tab-header:gap=4>
        <tab-toggle tab-toggle:id="1" tab-toggle:active=true>Toggle 1</tab-toggle>
        <tab-toggle tab-toggle:id="2">Toggle 2</tab-toggle>
        <tab-toggle tab-toggle:id="3">Toggle 3</tab-toggle>
      </tab-header>
      <tab-content tab-content:padding=4 tab-content:id="1">
        <p >Tab 1 Content</p>
      </tab-content>
      <tab-content tab-content:padding=4 tab-content:id="2">
        <p >Tab 2 Content</p>
      </tab-content>

      <tab-content tab-content:padding=4 tab-content:id="3">
        <p >Tab 3 Content</p>
      </tab-content>
    </tab-container>


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
              skeleton-element:color="light-400"></skeleton-element>
            <skeleton-element 
              skeleton-element:display="block"
              skeleton-element:color="light-700"
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
                  badge-element:bg="success-600 " 
                  badge-element:color="text-500">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="success-600 " 
                  badge-element:color="text-500">My Badge</badge-element>
                  <badge-element
                  badge-element:bg="success-600 " 
                  badge-element:color="text-500">My Badge</badge-element>
              </div>
              <audio-player audio-player:has-playlist=true audio-player:has-album=true></audio-player>
              <video-player></video-player>
              <div>
                  <badge-element
                    badge-element:bg="danger-500"
                    badge-element:size=md
                    >My Badge</badge-element>
                  <badge-element
                    badge-element:color="text-500"
                    badge-element:bg="success-200"
                    badge-element:size=xs
                    badge-element:padding=2
                    badge-element:action="console.log('test')"
                    >Sky Badge</badge-element>
                  <badge-element
                    badge-element:bg="warning-100"
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
