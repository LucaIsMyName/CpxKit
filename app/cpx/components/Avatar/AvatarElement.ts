import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Avatar Element
 */
export class CpxAvatarElement extends CpxElement {
  classNames: string;
  alt: string;
  url: string;
  size: string | number;
  borderColor: string;
  borderWidth: string | number;
  borderRadius: string | number;
  constructor() {
    super();
    this.classNames = this.getAttribute("avatar-element:class") || "";
    this.size = this.getAttribute("avatar-element:size") || 12;
    this.borderColor = this.getAttribute("avatar-element:border-color") || "light-200";
    this.borderWidth = this.getAttribute("avatar-element:border-width") || 2;
    this.borderRadius = this.getAttribute("avatar-element:radius") || "pill";
    this.alt = this.getAttribute("avatar-element:alt") || "";
    this.url = this.getAttribute("avatar-element:url") || "https://via.placeholder.com/150";

    this.setAttribute("class", `display:block w:${this.size} h:${this.size}`);
  }

  render() {
    this.innerHTML = `  
        <section class="${Cpx.String.trimWhitespace(`
            overflow:hidden
            ${this.borderRadius !== "none" ? `radius:${this.borderRadius}` : ""}
            ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
            ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
            ${this.borderWidth !== 0 ? `outline-width:${parseInt(this.borderWidth)/2}` : ""}
            ${this.borderColor !== "transparent" ? `outline-color:${this.borderColor}` : ""}
            outline-offset:2
            w:${this.size}
            h:${this.size}
            ${this.classNames}">
            <picture-element picture-element:width=${this.size} picture-element:height=${this.size} picture-element:alt="${this.alt}" picture-element:url="${this.url}"></picture-element>
        </section>
        `, "all")}`;
  }
}
customElements.define(`avatar-element`, CpxAvatarElement);
