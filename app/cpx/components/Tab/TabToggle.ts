// tab-toggle.js
import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxTabToggle extends CpxElement {
  tabToggleId: any;
  classNames: string;
  padding: number;
  color: string;
  bgColor: string;
  borderColor: string;
  size: string;
  weight: string;
  borderWidth: number;
  radius: string;

  constructor() {
    super();
    this.tabToggleId = this.getAttribute("tab-toggle:id");
    this.classNames = this.getAttribute("tab-toggle:class") || "";
    this.handleClick = this.handleClick.bind(this);
    this.padding = parseInt(this.getAttribute("tab-toggle:padding")) || 0;
    this.color = this.getAttribute("tab-toggle:color") || "inherit";
    this.bgColor = this.getAttribute("tab-toggle:bg-color") || "transparent";
    this.borderColor = this.getAttribute("tab-toggle:border-color") || "transparent";
    this.size = this.getAttribute("tab-toggle:size") || "sm";
    this.weight = this.getAttribute("tab-toggle:weight") || "normal";
    this.borderWidth = parseInt(this.getAttribute("tab-toggle:border-width")) || 0;
    this.radius = this.getAttribute("tab-toggle:radius") || "none";
  }

  connectedCallback() {
    this.addEventListener("click", this.handleClick);
    this.render();
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
  }

  handleClick(): void {
    const tabContentId = this.getAttribute("tab-toggle:id");
    const tabContent = document.querySelector(`tab-content[tab-content\\:id="${tabContentId}"]`);

    if (tabContent) {
      const allTabContents = document.querySelectorAll("tab-content");
      allTabContents.forEach((content) => {
        if (content.getAttribute("tab-content:id") === tabContentId) {
          content.classList.remove("display:none");
          content.classList.add("display:block");
          content.setAttribute("tab-content:active", "true");
        } else {
          content.classList.remove("display:block");
          content.classList.add("display:none");
          content.setAttribute("tab-content:active", "false");
        }
      });
    }
  }

  render() {
    this.innerHTML = `
      <button
        class="${Cpx.String.trimWhitespace(
        `
            ${this.padding !== 0 ? `p:${this.padding}` : ``}
            ${this.color !== "inherit" ? `color:${this.color}` : ``}
            ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ``}
            ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ``}
            ${this.size !== "sm" ? `size:${this.size}` : ``}
            ${this.weight !== "normal" ? `weight:${this.weight}` : ``}
            ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ``}
            ${this.radius !== "none" ? `radius:${this.radius}` : ``}
            ${this.classNames}
        `,
          "all"
        )}"
        id="${this.tabToggleId}">
          ${this.initialContent}
      </button>
    `;
  }
}
customElements.define(`tab-toggle`, CpxTabToggle);
