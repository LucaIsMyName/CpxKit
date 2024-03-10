// tab-content.js
import { CpxElement } from "../../element";

export class CpxTabContent extends CpxElement {
  tabContentId: any;
  classNames: string;
  size: string;
  weight: string;
  borderWidth: number;
  radius: string;
  color: string;
  bgColor: string;
  borderColor: string;
  padding: number;

  constructor() {
    super();
    this.classNames = this.getAttribute("tab-content:class") || "";
    this.tabContentId = this.getAttribute("tab-content:id");
    this.size = this.getAttribute("tab-content:size") || "sm";
    this.weight = this.getAttribute("tab-content:weight") || "normal";
    this.borderWidth = parseInt(this.getAttribute("tab-content:border-width")) || 0;
    this.radius = this.getAttribute("tab-content:radius") || 'none';
    this.color = this.getAttribute("tab-content:color") || "inherit";
    this.bgColor = this.getAttribute("tab-content:bg-color") || "transparent";
    this.borderColor = this.getAttribute("tab-content:border-color") || "transparent";
    this.padding = parseInt(this.getAttribute("tab-content:padding")) || 0;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const activeTabToggle = document.querySelector(`tab-toggle[tab-toggle\\:active="true"]`);
    const activeTabContent = document.querySelector(`tab-content[tab-content\\:id="${activeTabToggle.getAttribute("tab-toggle:id")}"]`);
    if (activeTabContent === this) {
      activeTabContent.classList.add("display:block");
    } else {
      this.classList.add("display:none");
    }
    this.innerHTML = `
      <section 
        tab-content:id="${this.tabContentId}"
        class="
          ${this.padding !== 0 ? `p:${this.padding}` : ""}
          ${this.color !== "inherit" ? `color:${this.color}` : ""}
          ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
          ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
          ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
          ${this.radius !== "none" ? `radius:${this.radius}` : ""}
          ${this.size !== "sm" ? `size:${this.size}` : ""}
          ${this.weight !== "normal" ? `weight:${this.weight}` : ""}
          ${this.classNames}">
          ${this.initialContent}
      </section>
    `;
  }
}
customElements.define(`tab-content`, CpxTabContent);
