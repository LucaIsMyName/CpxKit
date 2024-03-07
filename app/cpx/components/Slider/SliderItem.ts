import Swiper from "swiper";
// import styles bundle
// import "swiper/css/bundle";
import { CpxElement } from "../../element";

/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */

export class CpxSliderItem extends CpxElement implements Element {
  slider: Swiper;
  classNames: string;
  url: string;
  title: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("slider-item:class") || "";
    this.url = this.getAttribute("slider-item:url") || "";
    this.title = this.getAttribute("slider-item:title") || "Slider Item Image";
  }

  render() {
    this.innerHTML = `
        <section class="slider-item swiper-slide ${this.classNames}">
            ${
              this.initialContent !== ""
                ? `${this.initialContent}`
                : `<picture-element 
                      picture-element:url="${this.url}"
                      picture-element:alt="${this.title}"
                      ></picture-element>`
            }
        </section>
        `;
  }
}
customElements.define(`slider-item`, CpxSliderItem);
