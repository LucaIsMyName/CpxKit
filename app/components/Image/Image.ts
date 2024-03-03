import { Cpx, Config } from "../../app";

export class ComponentImage extends Cpx.Element {
  url: string;
  alt: string;
  hasOverlay: string | boolean;

  constructor() {
    super();
    this.url = this.getAttribute("image:url") || "https://via.placeholder.com/150";
    this.alt = this.getAttribute("image:alt") || "Image";
    this.hasOverlay = this.getAttribute("image:has-overlay") || false;
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <figure class="image"> 
            <picture>
                <source media="(max-width:768px)" srcset="${this.url}?as=webp&width=400" type="image/webp">
                <source media="(max-width:1240px)" srcset="${this.url}?as=webp&width=800" type="image/jpeg">
                <img src="${this.url}?as=webp&width=1640px" alt="${this.url}" class="image__img">
            </picture>
            ${
                this.hasOverlay ? `
                <figcaption class="image__overlay">
                    <app-text class="image__title">
                        ${this.initialContent}
                    </app-text>
                </figcaption>
                ` : ``
            }
        </figure>
        `;
  }
}
customElements.define(`${Config.prefix}-image`, ComponentImage);
