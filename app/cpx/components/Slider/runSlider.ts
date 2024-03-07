import Swiper from "swiper";
export function runSlider() {
  const slider = (direction: any = "vertical", loop: boolean = true) => {
    new Swiper(".slider-container", {
      direction,
      loop,
      pagination: {
        el: "slider-pagination",
      },
      navigation: {
        nextEl: "slider-button[next]",
        prevEl: "slider-button[prev]",
      },
      scrollbar: {
        el: "slider-scrollbar",
      },
    });
  };
}
