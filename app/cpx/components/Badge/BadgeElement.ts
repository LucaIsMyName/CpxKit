import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * @element badge-element
 * @description A badge-element component that can be used to display content when hovered over.
 * @example
 * <badge-element badge-element:title="DropDown Title" badge-element:content="DropDown Content">
 * </badge-element>
 */
export class CpxBadgeElement extends CpxElement implements Element {
  classNames: string;
  size: string;
  color: string;
  bgColor: string;
  borderColor: string;
  borderWidth: number;
  fontFamily: string;
  fontWeight: string;
  letterSpacing: string;
  textTransform: string;
  borderRadius: string;
  padding: number;
  action: Function | boolean;
  actionTrigger: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("badge-element:class") || "";
    this.size = this.getAttribute("badge-element:size") || "xs";
    this.color = this.getAttribute("badge-element:color") || "dark-700";
    this.bgColor = this.getAttribute("badge-element:bg") || "dark-200";
    this.borderColor = this.getAttribute("badge-element:border-color") || "shade-xl";
    this.borderWidth = parseInt(this.getAttribute("badge-element:border-width")) || 1;
    this.fontFamily = this.getAttribute("badge-element:font-family") || "sans";
    this.fontWeight = this.getAttribute("badge-element:weight") || "normal";
    this.letterSpacing = this.getAttribute("badge-element:tracking") || "sm";
    this.textTransform = this.getAttribute("badge-element:transform") || "none";
    this.borderRadius = this.getAttribute("badge-element:radius") || "pill";
    this.padding = parseInt(this.getAttribute("badge-element:padding")) || 2;
    this.action = eval(this.getAttribute("badge-element:action")) || false;
    this.actionTrigger = this.getAttribute("badge-element:action-trigger") || "click";
  }

  render() {
    this.innerHTML = `
        <button 
        ${
          this.action !== false
            ? `
            ${this.actionTrigger}="${this.action}"
            `
            : `tabindex="-1"`
        }
        class="${Cpx.String.trimWhitespace(
          ` 
              ${this.action !== false ? "" : `cursor:default`} 
              ${this.size !== "xs" ? `size:${this.size}` : ""}
              ${this.color !== "transparent" ? `color:${this.color}` : ""}
              ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
              ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
              ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
              ${this.fontFamily !== "sans" ? `font-family:${this.fontFamily}` : ""}
              ${this.fontWeight !== "normal" ? `weight:${this.fontWeight}` : ""}
              ${this.letterSpacing !== "sm" ? `tracking:${this.letterSpacing}` : ""}
              ${this.textTransform !== "none" ? `transform:${this.textTransform}` : ""}
              radius:${this.borderRadius}
              ${this.padding !== 0 ? `p:${this.padding}` : ""}
              ${this.classNames}
          `,
          "all"
        )}">
            <span>${this.initialContent}</span>
        </button>
        `;
  }
}
customElements.define(`badge-element`, CpxBadgeElement);
