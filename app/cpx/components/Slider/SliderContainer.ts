// import Swiper from "swiper";
// import styles bundle
// import "swiper/css/bundle";
import { CpxElement } from "../../element";
import { runSlider } from "./runSlider";
/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */

export class CpxSliderContainer extends CpxElement implements Element {
  slider: Function;
  classNames: string;
  
  constructor() {
    super();
    this.classNames = this.getAttribute("slider-container:class") || "";
    this.slider = runSlider;
  }

  render() {
    this.innerHTML = `
        <section class="slider-container ${this.classNames}">
            <div class="slider-container__wrapper swiper-wrapper">
                ${this.initialContent !== "" ? `${this.initialContent}` : ``}
            </div>
        </section>
        `;
  }
}
customElements.define(`slider-container`, CpxSliderContainer);
