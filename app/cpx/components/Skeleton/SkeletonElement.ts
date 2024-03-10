import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * Skeleton Element
 * @description
 * The Skeleton Element is a custom element that allows you to display a skeleton loading state for an image or element.
 * @example
 * <skeleton-element skeleton-element:display="block" skeleton-element:color="light-300" skeleton-element:radius="sm" skeleton-element:width="lg" skeleton-element:height="5">
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
    this.color = this.getAttribute("skeleton-element:color") || "light-300";
    this.borderRadius = this.getAttribute("skeleton-element:radius") || "sm";
    this.width = this.getAttribute("skeleton-element:width") || "lg";
    this.height = this.getAttribute("skeleton-element:height") || "5";
  }

  render() {
    this.innerHTML = `  
        <div class="h:${this.height} w:full max-w:${this.width} max-h:${this.height} display:${this.display} radius:${this.borderRadius} bg:${this.color} ${this.classNames}">
        </div>
        `;
  }
}
customElements.define(`skeleton-element`, CpxSkeletonElement);
