import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Avatar Element
 */
export class CpxAvatarList extends CpxElement {
  classNames: string;
  alt: string;
  url: string;
  size: string | number;
  borderColor: string;
  borderWidth: string | number;
  borderRadius: string | number;
  gap: string | number;
  gapIsInverted: boolean;

  constructor() {
    super();
    this.classNames = this.getAttribute("avatar-element:class") || "";
    this.size = this.getAttribute("avatar-element:size") || 12;
    this.borderColor = this.getAttribute("avatar-element:border-color") || "light-200";
    this.borderWidth = this.getAttribute("avatar-element:border-width") || 2;
    this.borderRadius = this.getAttribute("avatar-element:radius") || "pill";
    this.gap = parseInt(this.getAttribute("avatar-element:gap")) || 2;
    this.alt = this.getAttribute("avatar-element:alt") || "";
    this.url = this.getAttribute("avatar-element:url") || "https://via.placeholder.com/150";
    this.setAttribute("class", `display:block`);
  }

  render() {
    this.innerHTML = `  
        <section class="display:flex ${this.gap !== 0 ? `mr:${this.gap}>*` : ``}">
            ${this.initialContent}
        </section>
        `;
  }
}
customElements.define(`avatar-list`, CpxAvatarList);
