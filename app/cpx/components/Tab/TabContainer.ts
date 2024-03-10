import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
/**
 * @class CpxTabContainer
 * @description
 * TabContainer Component
 * @example
 * <tab-container tab-container:id="tab-container-id">
 */
export class CpxTabContainer extends CpxElement {
  tabContainerId: any;
  classNames: string;
  size: string;
  weight: string;
  borderWidth: number;
  radius: string;
  color: string;
  bgColor: string;
  borderColor: string;
  padding: number;


  constructor() {
    super();
    this.classNames = this.getAttribute("tab-container:class") || "";
    this.tabContainerId = this.getAttribute("tab-container:id") || Id.Generate.hex(12);
    this.size = this.getAttribute("tab-container:size") || "sm";
    this.weight = this.getAttribute("tab-container:weight") || "normal";
    this.borderWidth = parseInt(this.getAttribute("tab-container:border-width")) || 0;
    this.radius = this.getAttribute("tab-container:radius") || 'none';
    this.color = this.getAttribute("tab-container:color") || "inherit";
    this.bgColor = this.getAttribute("tab-container:bg-color") || "transparent";
    this.borderColor = this.getAttribute("tab-container:border-color") || "transparent";
    this.padding = parseInt(this.getAttribute("tab-container:padding")) || 0;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section
      tab-container:id="${this.tabContainerId}"
      class="
        overflow:hidden
        ${this.padding !== 0 ? `p:${this.padding}` : ""}
        ${this.color !== "inherit" ? `color:${this.color}` : ""}
        ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
        ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
        ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
        ${this.radius !== "none" ? `radius:${this.radius}` : ""}
        ${this.size !== "sm" ? `size:${this.size}` : ""}
        ${this.weight !== "normal" ? `weight:${this.weight}` : ""}
        ${this.classNames}">
        ${this.initialContent}
    </section>
        `;
  }
}
customElements.define(`tab-container`, CpxTabContainer);
