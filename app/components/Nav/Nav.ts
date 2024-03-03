import { Cpx, Config, DB } from "../../app";

export class ComponentNav extends Cpx.Element {
  type: string;
  nav: Array<string>;
  direction: string;
  spacing: string;
  style: any;
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
        <nav class="nav nav--direction-${this.direction} nav--style-${this.style} nav--size-${this.direction} nav--spacing-${this.spacing}">
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
                            data-set-state-key="${item.isModal === true ? "modalContent" : ``}${item.isAction === true ? "action" : ``}${item.isModal === false && item.isAction === false ? "page" : ``}" 
                            data-set-state-value="${item.page}" 
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
