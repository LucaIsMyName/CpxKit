import { CpxElement } from "../../element";

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
  borderWidth: string;
  fontFamily: string;
  fontWeight: string;
  letterSpacing: string;
  textTransform: string;
  borderRadius: string;
  padding: string;
  action: any;

  constructor() {
    super();
    this.classNames = this.getAttribute("badge-element:class") || "";
    this.size = this.getAttribute("badge-element:size") || "xs";
    this.color = this.getAttribute("badge-element:color") || "gray-700";
    this.bgColor = this.getAttribute("badge-element:bg") || "gray-200";
    this.borderColor = this.getAttribute("badge-element:border-color") || "shade-xl";
    this.borderWidth = this.getAttribute("badge-element:border-width") || "1";
    this.fontFamily = this.getAttribute("badge-element:font-family") || "sans";
    this.fontWeight = this.getAttribute("badge-element:weight") || "normal";
    this.letterSpacing = this.getAttribute("badge-element:tracking") || "sm";
    this.textTransform = this.getAttribute("badge-element:transform") || "none";
    this.borderRadius = this.getAttribute("badge-element:radius") || "pill";
    this.padding = this.getAttribute("badge-element:padding") || "2";
    this.action = eval(this.getAttribute("badge-element:action")) || false;
  }

  render() {
    this.innerHTML = `
        <button 
        ${
          this.action !== false
            ? `
            onclick="${this.action}"
            `
            : `tabindex="-1"`
        }
        class="${this.action !== false ? '' : `cursor:default`} size:${this.size} color:${this.color} bg:${this.bgColor} border-width:${this.borderWidth} border-color:${this.borderColor} font-family:${this.fontFamily} weight:${this.fontWeight} tracking:${this.letterSpacing} transform:${this.textTransform} radius:${this.borderRadius} px:${eval(this.padding) * 2} py:${eval(this.padding) * 1} ${this.classNames}">
            <span>${this.initialContent}</span>
        </button>
        `;
  }
}
customElements.define(`badge-element`, CpxBadgeElement);
