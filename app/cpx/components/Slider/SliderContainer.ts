import { CpxElement } from "../../element";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

export class CpxSliderContainer extends CpxElement {
  classNames: string;

  constructor() {
    super();
    this.classList.add(`swiper-container-${this.id}`);
    this.classNames = this.getAttribute("slider-container:class") || "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.initSlider();
  }

  initSlider() {
    const sliderDirection = this.getAttribute("slider-container:direction") || "horizontal";
    const sliderLoop = this.getAttribute("slider-container:loop") !== "false"; // Defaults to true unless explicitly set to false
    const container = this.querySelector(`.swiper-container-${this.ID}`); // Get the container element
    const slidesPerView = eval(this.getAttribute("slider-container:slides-per-view")) || 1;
    const slidesPerViewMedium = eval(this.getAttribute("slider-container:slides-per-view:medium")) || eval(this.getAttribute("slider-container:slides-per-view"));
    const slidesPerViewLarge = eval(this.getAttribute("slider-container:slides-per-view:large")) || eval(this.getAttribute("slider-container:slides-per-view:medium")) || eval(this.getAttribute("slider-container:slides-per-view"));
    const spaceBetween = eval(this.getAttribute("slider-container:space-between")) || 0;
    const spaceBetweenMedium = eval(this.getAttribute("slider-container:space-between:medium")) || eval(this.getAttribute("slider-container:space-between"));
    const spaceBetweenLarge = eval(this.getAttribute("slider-container:space-between:large")) || eval(this.getAttribute("slider-container:space-between:medium")) || eval(this.getAttribute("slider-container:space-between"));
    new Swiper(container, {
      direction: sliderDirection,
      loop: sliderLoop,
      pagination: {
        el: `.slider-pagination`,
      },
      navigation: {
        nextEl: `.slider-navigation-next`,
        prevEl: `.slider-navigation-prev`,
      },
      breakpoints: {
        560: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
        },
        768: {
          slidesPerView: slidesPerViewMedium || slidesPerView,
          spaceBetween: spaceBetweenMedium || spaceBetween,
        },
        1440: {
          slidesPerView: slidesPerViewLarge || slidesPerViewMedium || slidesPerView,
          spaceBetween: spaceBetweenLarge || spaceBetweenMedium || spaceBetween,
        },
      },
      scrollbar: {
        el: `.slider-scrollbar`,
      },
    });
  }

  render() {
    this.innerHTML = `
      <div id="${this.ID}" class="position:relative swiper-container-${this.ID} ${this.classNames}">
        <div class="swiper-wrapper">
          ${this.innerHTML}
        </div>
        <div id="pagination-${this.ID}" class="slider-pagination "></div>
        <div id="navigation-prev-${this.ID}" class="slider-navigation-prev position:absolute bottom:0 left:0 w:8 h:9 bg:text-500 z:50"></div>
        <div id="navigation-next-${this.ID}" class="slider-navigation-next position:absolute bottom:0 right:0 w:8 h:9 bg:text-500 z:50"></div>
        <div id="scrollbar-${this.ID}" class="slider-scrollbar"></div>
      </div>
    `;
  }
}

customElements.define(`slider-container`, CpxSliderContainer);
