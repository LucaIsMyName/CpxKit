import { Cpx, Config, DB } from "../../app";

export class ComponentNav extends Cpx.Element {
  type: any;
  nav: Array<string>;
  direction: string;
  spacing: string;
  style: CSSStyleDeclaration | any;
  weight: any;

  constructor() {
    super();
    this.type = this.getAttribute("nav:type") || "main";
    this.nav = DB.NAVIGATIONS[this.type];
    this.direction = this.getAttribute("nav:direction") || "row";
    this.spacing = this.getAttribute("nav:spacing") || "normal";
    this.style = this.getAttribute("nav:style") || "none";
    this.weight = this.getAttribute("nav:weight") || "normal";
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <nav class="nav nav--direction-${this.direction} nav--style-${this.style} nav--spacing-${this.spacing}">
            <ul>
            ${this.nav
              .map((item: any, index: number) => {
                return `
                    <li>
                        <button 
                            class="
                            ${this.style === "none" ? `nav__item--style-none` : ``}
                            ${this.style === "button" ? `nav__item--style-button` : ``}
                            "
                            click:state:set(${this.nav[index].isModal === false ?`page`:`modalContent`},${item.page})
                            class="
                                nav__item 
                                nav__item-${index}">
                                <app-text 
                                    text:weight=${this.weight}>
                                    ${item.title}
                                </app-text>
                            </button>
                    </li>
                            `;
              })
              .join("")}
              </ul>
        </nav>
        `;

        
  }
}
customElements.define(`${Config.prefix}-nav`, ComponentNav);
