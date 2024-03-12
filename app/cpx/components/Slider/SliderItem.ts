import { CpxElement } from "../../element";

export class CpxSliderItem extends CpxElement {
  classNames: string;
  url: string;
  title: string;

  constructor() {
    super();
    this.classList.add("swiper-slide");
    this.classNames = this.getAttribute("slider-item:class") || "";
    this.url = this.getAttribute("slider-item:url") || "";
    this.title = this.getAttribute("slider-item:title") || "Slider Item Image";
  }

  render() {
    this.innerHTML = `
      <div class="w:full h:full ${this.classNames}">
        ${
          this.initialContent !== ""
            ? this.initialContent
            : `<picture-element 
                picture-element:url="${this.url}"
                picture-element:alt="${this.title}"
              ></picture-element>`
        }
      </div>
    `;
  }
}

customElements.define(`slider-item`, CpxSliderItem);
