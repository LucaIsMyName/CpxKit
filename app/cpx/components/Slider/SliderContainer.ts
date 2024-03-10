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
  /**
   * Initialize the Swiper slider
   * @description
   * This method initializes the Swiper slider with the provided options and breakpoints.
   */
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
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      breakpoints: {
        768: {
          slidesPerView: slidesPerViewMedium || slidesPerView,
          spaceBetween: spaceBetweenMedium || spaceBetween,
        },
        1440: {
          slidesPerView: slidesPerViewLarge || slidesPerViewMedium || slidesPerView,
          spaceBetween: spaceBetweenLarge || spaceBetweenMedium || spaceBetween,
        },
      },
      pagination: {
        el: `.swiper-pagination`,
      },
      navigation: {
        nextEl: `.swiper-navigation-next`,
        prevEl: `.swiper-navigation-prev`,
      },
      scrollbar: {
        el: `.swiper-scrollbar`,
      },
    });
  }

  render() {
    this.innerHTML = `
      <div id="${this.ID}" class="swiper-slider position:relative swiper-container-${this.ID} ${this.classNames}">
          <div class="swiper-wrapper">
            ${this.initialContent}
          </div>
          <div id="pagination-${this.ID}" class="swiper-pagination slider-pagination "></div>
          <div id="navigation-prev-${this.ID}" class="swiper-navigation-prev slider-navigation-prev"></div>
          <div id="navigation-next-${this.ID}" class="swiper-navigation-next slider-navigation-next"></div>
          <div id="scrollbar-${this.ID}" class="swiper-scrollbar slider-scrollbar"></div>
      </div>
    `;
  }
}

customElements.define(`slider-container`, CpxSliderContainer);
