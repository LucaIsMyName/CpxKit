import { CpxElement } from "../../element";
import { Cpx } from "../../index";
import { Icon } from "../../utils/icons";

/**
 * @description
 * The Icon Element is a custom element that allows you to display an icon from the Cpx Icon Library.
 * @example
 * <icon-element icon-element:icon="play" icon-element:width="8" icon-element:height="8" icon-element:color="black" icon-element:bg-color="white" icon-element:border-color="black" icon-element:border-radius="0" icon-element:border-width="1" icon-element:is-inline="true" icon-element:svg:stroke="currentColor" icon-element:svg:fill="none" icon-element:svg:stroke-width="2"></icon-element>
 */
export class CpxIconElement extends CpxElement {
  classNames: string;
  url: string;
  alt: string;
  icon: string;
  width: string;
  height: string;
  color: string;
  bgColor: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: number | string;
  isInline: boolean | string;
  stroke: string;
  fill: string;
  strokeWidth: string | number;

  constructor() {
    super();
    this.classNames = this.getAttribute("icon-element:class") || "";
    this.url = this.getAttribute("icon-element:url") || "";
    this.alt = this.getAttribute("icon-element:alt") || "icon";
    this.width = this.getAttribute("icon-element:width") || "8";
    this.height = this.getAttribute("icon-element:height") || "8";
    this.icon = this.getAttribute("icon-element:icon") || "play";
    this.color = this.getAttribute("icon-element:color") || "black";
    this.bgColor = this.getAttribute("icon-element:bg-color") || "white";
    this.borderColor = this.getAttribute("icon-element:border-color") || "black";
    this.borderRadius = this.getAttribute("icon-element:border-radius") || "0";
    this.borderWidth = eval(this.getAttribute("icon-element:border-width")) || 1;
    this.isInline = this.getAttribute("icon-element:is-inline") || true;
    this.stroke = this.getAttribute("icon-element:svg:stroke") || "currentColor";
    this.fill = this.getAttribute("icon-element:svg:fill") || "none";
    this.strokeWidth = parseInt(this.getAttribute("icon-element:svg:stroke-width")) || "2";
    this.setAttribute("class", `w:${this.width} h:${this.height}`);
  }

  connectedCallback() {
    this.render();
    if (this.isInline === true || "true") {
      this.changeSvgAttributes();
    }
  }
  /**
   * @description
   * Change the stroke, fill, and stroke-width attributes of the svg element.
   * @returns {void}
   * @example
   * this.changeSvgAttributes();
   */
  changeSvgAttributes(): void {
    const allSvgTags = ["svg", "path", "circle", "rect", "line", "polyline", "polygon", "ellipse"];
    const allAttributes = ["stroke", "fill", "stroke-width"];
    const svg = this.querySelector("svg");
    console.log(this.isInline, "this.isInline");
    // Look for all stroke, stroke-width, and fill attributes and change them
    if (svg) {
      allSvgTags.forEach((tag) => {
        const elements = svg.getElementsByTagName(tag);
        if (elements.length > 0) {
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            allAttributes.forEach((attr) => {
              if (element.hasAttribute(attr)) {
                if (attr === "stroke") {
                  element.setAttribute(attr, this.stroke);
                } else if (attr === "fill") {
                  element.setAttribute(attr, this.fill);
                } else if (attr === "stroke-width") {
                  element.setAttribute(attr, this.strokeWidth.toString());
                }
              }
            });
          }
        }
      });
    }
  }
  /**
   * @description
   * Render the Icon Element.
   * @returns {void}
   */
  render(): void {
    this.innerHTML = `
        <section>
            ${
              eval(this.isInline) === true
                ? ` <figure title="${this.alt}" class="w:${this.width} h:${this.height}">
                        ${Cpx.Icon[this.icon]}
                    </figure>
                `
                : `
                <picture-element picture-element:width="${this.width}" picture-element:height:"${this.height}" picture-element:url="${this.url}" picture-element:alt="${this.alt}" ></picture-element>
                `
            }
        </section>
        `;
  }
}

customElements.define(`icon-element`, CpxIconElement);
