import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Picture Element
 * @description
 * The Picture Element is a custom element that allows you to display an image with multiple sources and sizes.
 * @example
 * <picture-element picture:url="https://via.placeholder.com/150" picture:url:xl="https://via.placeholder.com/1080" picture:url:md="https://via.placeholder.com/720" picture:breakpoint:xl="1240px" picture:breakpoint:md="720px" alt="Flowers">
 */
export class CpxPictureElement extends CpxElement {
  classNames: string;
  alt: string;
  url: string;
  urlImgBig: string | boolean;
  urlImgMedium: string | boolean;
  screenBig: string;
  screenMedium: string;
  width: string;
  height: string;
  aspectRatio: string;
  loading: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("picture-element:class") || "";
    this.width = this.getAttribute("picture-element:width") || "600";
    this.height = this.getAttribute("picture-element:height") || "600";
    this.aspectRatio = this.getAttribute("picture-element:aspect-ratio") || "1/1";
    this.alt = this.getAttribute("picture-element:alt") || "";
    this.url = this.getAttribute("picture-element:url") || "https://via.placeholder.com/150";
    this.urlImgBig = this.getAttribute("picture-element:screen:xl:url") || false;
    this.urlImgMedium = this.getAttribute("picture-element:screen:md:url") || false;
    this.screenBig = this.getAttribute("picture-element:screen:xl") || "1240px";
    this.screenMedium = this.getAttribute("picture-element:screen:md") || "720px";
    this.loading = this.getAttribute("picture-element:loading") || "lazy";
  }

  render() {
    this.innerHTML = `  
        <figure title="${this.alt}" style="--aspect-ratio:${this.aspectRatio}" class="picture-element ${this.classNames}">
        <suspense-all>
            <picture> 
              ${this.urlImgBig !== false ? `<source media="(min-width:${this.screenBig})" srcset="${this.urlImgBig}?as=webp?width=${this.screenBig}">` : ``}
              ${this.urlImgMedium !== false ? `<source media="(min-width:${this.screenMedium})" srcset="${this.urlImgMedium}?as=webp?width=${this.screenMedium}">` : ``}
                <img loading="${this.loading}" class="picture-element__img" src="${this.url}" alt="${this.alt}">
            </picture>
            ${this.initialContent !== "" ? `<figcaption class="picture-element__caption">${this.initialContent}</figcaption>` : ``}
            </suspense-all>
          </figure>
        `;
  }
}
customElements.define(`picture-element`, CpxPictureElement);
