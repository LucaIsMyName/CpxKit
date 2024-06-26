import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Avatar Element
 */
export class CpxAvatarElement extends CpxElement {
  classNames: string;
  alt: string;
  url: string | boolean;
  size: string | number;
  borderColor: string;
  borderWidth: string | number;
  borderRadius: string | number;
  fontWeight: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("avatar-element:class") || "";
    this.size = this.getAttribute("avatar-element:size") || 12;
    this.borderColor = this.getAttribute("avatar-element:border-color") || "light-200";
    this.borderWidth = this.getAttribute("avatar-element:border-width") || 2;
    this.borderRadius = this.getAttribute("avatar-element:radius") || "pill";
    this.fontWeight = this.getAttribute("avatar-element:font-weight") || "normal";
    this.alt = this.getAttribute("avatar-element:alt") || "";
    this.url = this.getAttribute("avatar-element:url") || false;
    this.setAttribute("class", `display:block w:${this.size} h:${this.size}`);
  }

  render() {
    this.innerHTML = `  
        <section class="${Cpx.String.trimWhitespace(
          `
            overflow:hidden
            display:grid
            content:center
            ${this.borderRadius !== "none" ? `radius:${this.borderRadius}` : ""}
            ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
            ${this.borderWidth !== 0 ? `border-width:${Math.floor(Math.round(parseInt(this.borderWidth)))}` : ""}
            ${this.borderWidth !== 0 ? `outline-width:${Math.floor(Math.round(parseInt(this.borderWidth) * 2))}@hover` : ""}
            ${this.borderWidth !== 0 ? `outline-width:${Math.floor(Math.round(parseInt(this.borderWidth) / 2))}` : ""}
            ${this.borderColor !== "transparent" ? `outline-color:${this.borderColor} outline-color:light-900@hover` : ""}
            outline-offset:xxs
            w:${this.size}
            h:${this.size}
            ${this.classNames}">
            ${
              this.url === false
                ? `
                <div style="font-size:calc(var(--${this.size}) / 1.25))" class="display:grid place:center h:${this.size} w:${this.size} bg:${this.state.get('theme') === 'dark' ? `dark-800`:`light-200`}">
                  ${this.alt.trim().charAt(0).toUpperCase()}
                </div>
              `
                : `
                <picture-element
                  picture-element:has-caption="false"
                  picture-element:width=${this.size}
                  picture-element:height=${this.size}
                  picture-element:alt="${this.alt}"
                  picture-element:url="${this.url}">
                ${this.alt}</picture-element>
                `
            }
        </section>
        `,
          "all"
        )}`;
  }
}
customElements.define(`avatar-element`, CpxAvatarElement);
