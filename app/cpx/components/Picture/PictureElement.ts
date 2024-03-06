import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxPictureElement extends CpxElement {
  alt: string;
  url: string;
  urlImgBig: string;
  urlImgMedium: string;
  breakpointBig: string;
  breakpointMedium: string;

  constructor() {
    super();
    this.alt = this.getAttribute("alt") || "Flowers";
    this.url = this.getAttribute("picture:url") || "https://via.placeholder.com/150";
    this.urlImgBig = this.getAttribute("picture:url:xl") || this.url || "https://via.placeholder.com/1080";
    this.urlImgMedium = this.getAttribute("picture:url:md") || this.url || "https://via.placeholder.com/720";
    this.breakpointBig = this.getAttribute("picture:breakpoint:xl") || "1240px";
    this.breakpointMedium = this.getAttribute("picture:breakpoint:md") || "720px";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
        <figure class="picture-element">
            <picture> 
                <source media="(min-width:${this.breakpointBig})" srcset="${this.url}?as=webp?width=${this.breakpointBig}">
                <source media="(min-width:${this.breakpointMedium})" srcset="${this.url}?as=webp?width=${this.breakpointMedium}">
                <img class="picture-element__img" src="${this.url}" alt="${this.alt}">
            </picture>
            ${this.initialContent !== "" ? `<figcaption class="picture-element__caption">${this.initialContent}</figcaption>` : ``}
        </figure>
        `;
  }
}
customElements.define(`picture-element`, CpxPictureElement);
