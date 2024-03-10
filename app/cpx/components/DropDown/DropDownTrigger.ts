import { Cpx } from "../..";
import { CpxElement } from "../../element";

export class CpxDropDownTrigger extends CpxElement {
  classNames: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: number | string;
  padding: number | string;

  constructor() {
    super();
    this.classNames = this.getAttribute("dropdown-trigger:class") || "";
    this.title = this.getAttribute("dropdown-trigger:title") || "DropDown Trigger";
    this.color = this.getAttribute("dropdown-trigger:color") || "text-500";
    this.bgColor = this.getAttribute("dropdown-trigger:bg") || "transparent";
    this.borderColor = this.getAttribute("dropdown-trigger:border-color") || "transparent";
    this.borderRadius = this.getAttribute("dropdown-trigger:border-radius") || "0";
    this.borderWidth = eval(this.getAttribute("dropdown-trigger:border-width")) || 1;
    this.padding = eval(this.getAttribute("dropdown-trigger:padding")) || 4;
  }


  render() {
    this.innerHTML = `
      <button class="${Cpx.String.trimWhitespace(`
          ${this.classNames}
          ${this.color !== "text-500" ? `color:${this.color}` : ""}
          ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
          ${this.borderColor !== "transparent" || "current" ? `border-color:${this.borderColor}` : ""}
          ${this.borderRadius !== "none" ? `border-radius:${this.borderRadius}` : ""}
          ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
          ${this.padding !== 0 ? `padding:${this.padding}` : ""}

      `, 'all')}" dropdown="trigger">
          ${this.initialContent === "" ? this.title : this.initialContent}
      </button>
    `;
  }
}

customElements.define(`dropdown-trigger`, CpxDropDownTrigger);
