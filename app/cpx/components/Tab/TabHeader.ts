import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxTabHeader extends CpxElement {
  tabHeaderId: any;
  classNames: string;
  wrap: boolean;
  padding: number;
  paddingX: number;
  paddingY: number;
  gap: number;
  color: string;
  bgColor: string;
  borderColor: string;
  size: string;
  borderWidth: number | string;
  radius: string;
  weight: string;

  constructor() {
    super();
    this.tabHeaderId = this.getAttribute("tab-header:id");
    this.classNames = this.getAttribute("tab-header:class") || "";
    this.padding = parseInt(this.getAttribute("tab-header:padding")) || 0;
    this.paddingX = parseInt(this.getAttribute("tab-header:padding:x")) || 0;
    this.paddingY = parseInt(this.getAttribute("tab-header:padding:y")) || 0;
    this.gap = parseInt(this.getAttribute("tab-header:gap")) || 0;
    this.wrap = eval(this.getAttribute("tab-header:wrap")) || false;
    this.color = this.getAttribute("tab-header:color") || "inherit";
    this.bgColor = this.getAttribute("tab-header:bg-color") || "transparent";
    this.borderColor = this.getAttribute("tab-header:border-color") || "transparent";
    this.size = this.getAttribute("tab-header:size") || "sm";
    this.weight = this.getAttribute("tab-header:weight") || "normal";
    this.radius = this.getAttribute("tab-header:radius") || "none";
    this.borderWidth = parseInt(this.getAttribute("tab-header:border-width")) || 0;
  }

  render() {
    this.innerHTML = `
    <button 
      tab-header:id="${this.tabHeaderId} " 
      class="${Cpx.String.trimWhitespace(`
        display:flex
        ${this.padding !== 0 ? `p:${this.padding}` : ""}
        ${this.paddingX !== 0 ? `px:${this.paddingX}` : ""}
        ${this.paddingY !== 0 ? `py:${this.paddingY}` : ""}
        ${this.color !== "inherit" ? `color:${this.color}` : ""}
        ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
        ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
        flex-wrap:${this.wrap ? "wrap" : "nowrap"}
        ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
        ${this.radius !== "none" ? `radius:${this.radius}` : ""}
        ${this.size !== "sm" ? `size:${this.size}` : ""}
        ${this.weight !== "normal" ? `weight:${this.weight}` : ""}
        ${this.gap !== 0 ? `gap:${this.gap}` : ""}
        ${this.classNames}`,
        "all"
      )}">
        ${this.initialContent}
    </button>
        `;
  }
}

customElements.define(`tab-header`, CpxTabHeader);
