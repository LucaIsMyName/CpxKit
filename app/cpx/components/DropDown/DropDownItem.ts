import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxDropDownItem extends CpxElement {
  classNames: string;
  color: string;
  bgColor: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: number | string;
  padding: number | string;

  constructor() {
    super();
    this.classNames = this.getAttribute("dropdown-item:class") || "";
    this.color = this.getAttribute("dropdown-item:color") || "black";
    this.bgColor = this.getAttribute("dropdown-item:bg-color") || "white";
    this.borderColor = this.getAttribute("dropdown-item:border-color") || "black";
    this.borderRadius = this.getAttribute("dropdown-item:border-radius") || "0";
    this.borderWidth = eval(this.getAttribute("dropdown-item:border-width")) || 1;
    this.padding = eval(this.getAttribute("dropdown-item:padding")) || 4;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <section class="${Cpx.String.trimWhitespace(`
          ${this.color !== "text" ? `color:${this.color}` : ""}
          ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
          ${this.borderColor !== "current" ? `border-color:${this.borderColor}` : ""}
          ${this.borderRadius !== "0" ? `border-radius:${this.borderRadius}` : ""}
       `,
         "all"
       )} ${this.classNames}" dropdown="content">${this.initialContent}</section>
    `;
  }
}

customElements.define(`dropdown-item`, CpxDropDownItem);
