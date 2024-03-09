import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Picture Element
 * @description
 * The Picture Element is a custom element that allows you to display an image with multiple sources and sizes.
 * @example
 * <picture-element picture:url="https://via.placeholder.com/150" picture:url:xl="https://via.placeholder.com/1080" picture:url:md="https://via.placeholder.com/720" picture:breakpoint:xl="1240px" picture:breakpoint:md="720px" alt="Flowers">
 */
export class CpxSkeletonElement extends CpxElement {
  classNames: string;
  display: string;
  color: string;
  borderRadius: string;
  width: string;
  height: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("skeleton-element:class") || "";
    this.display = this.getAttribute("skeleton-element:display") || "inline-block";
    this.color = this.getAttribute("skeleton-element:color") || "gray-300";
    this.borderRadius = this.getAttribute("skeleton-element:border-radius") || "sm";
    this.width = this.getAttribute("skeleton-element:width") || "lg";
    this.height = this.getAttribute("skeleton-element:height") || "5";
  }

  render() {
    this.innerHTML = `  
        <div class="h:${this.height} w:full max-w:${this.width} display:${this.display}  radius:${this.borderRadius} bg:${this.color} ${this.classNames}">
        </div>
        `;
  }
}
customElements.define(`skeleton-element`, CpxSkeletonElement);
