import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxDropDownContainer extends CpxElement {
  classNames: string;
  positionX: string;
  positionY: string;
  maxWidth: string;
  spacingTop: number | string;
  title: string;
  dropdownContent: HTMLElement | null;
  eventClick: boolean;
  eventFocus: boolean;
  eventHover: boolean;
  triggerPadding: number | string;
  triggerBorderRadius: string;
  triggerBorderWidth: number | string;
  triggerBorderColor: string;
  triggerBgColor: string;
  triggerColor: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("dropdown-container:class") || "";
    this.positionX = this.getAttribute("dropdown-container:position:x") || "center"; // 'start', 'center', 'end'
    this.positionY = this.getAttribute("dropdown-container:position:y") || "bottom"; // 'top', 'bottom'
    this.maxWidth = this.getAttribute("dropdown-container:max-width") || "100%";
    this.spacingTop = eval(this.getAttribute("dropdown-container:spacing:top")) || 4;
    this.title = this.getAttribute("dropdown-container:title") || "DropDown Container";
    this.dropdownContent = null;

    this.eventClick = eval(this.getAttribute("dropdown-container:event:click")) || true;
    this.eventFocus = eval(this.getAttribute("dropdown-container:event:focus")) || false;
    this.eventHover = eval(this.getAttribute("dropdown-container:event:hover")) || false;

    this.triggerPadding = eval(this.getAttribute("dropdown-container:trigger:padding")) || 0;
    this.triggerBorderRadius = this.getAttribute("dropdown-container:trigger:border-radius") || "none";
    this.triggerBorderWidth = eval(this.getAttribute("dropdown-container:trigger:border-width")) || 0;
    this.triggerBorderColor = this.getAttribute("dropdown-container:trigger:border-color") || "transparent";
    this.triggerBgColor = this.getAttribute("dropdown-container:trigger:bg-color") || "transparent";
    this.triggerColor = this.getAttribute("dropdown-container:trigger:color") || "text-500";
  }
  /**
   * @description
   * Handle the mouse enter event.
   * @returns {void}
   * @example
   * this.handleMouseEnter();
   * @memberof CpxDropDownContainer
   * @method
   * @name handleMouseEnter
   * @returns {void}
   */
  connectedCallback(): void {
    this.render();
    this.dropdownContent = this.querySelector("dropdown-item");
    if (this.dropdownContent) {
      this.dropdownContent.style.display = "none";
      if (this.eventHover === true) {
        this.addEventListener("mouseenter", this.handleMouseEnter.bind(this));
        this.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
      }
      if (this.eventClick === true) {
        this.addEventListener("click", this.handleClick.bind(this));
      }
      if (this.eventFocus === true) {
        this.addEventListener("focus", this.handleMouseEnter.bind(this));
        this.addEventListener("blur", this.handleMouseLeave.bind(this));
      }
    }
  }
  /**
   * @description
   * Handle the mouse enter event.
   * @returns {void}
   */
  handleMouseEnter(): void {
    if (this.dropdownContent) {
      this.dropdownContent.style.display = "block";
    }
  }
  /**
   * @description
   * Handle the mouse leave event.
   * @returns {void}
   */
  handleMouseLeave(): void {
    if (this.dropdownContent) {
      this.dropdownContent.style.display = "none";
    }
  }
  /**
   * @description
   * Handle the click event.
   * @returns {void}
   */
  handleClick(): void {
    if (this.dropdownContent) {
      this.dropdownContent.style.display = this.dropdownContent.style.display === "block" ? "none" : "block";
    }
  }

  render() {
    this.innerHTML = `
      <div dropdown="container" class="position:relative ${this.classNames}">
          <dropdown-trigger class="${Cpx.String.trimWhitespace(
            `
            ${this.triggerPadding !== 0 ? `p:${this.triggerPadding}` : ""}
            ${this.triggerBorderRadius !== "none" ? `br:${this.triggerBorderRadius}` : ""}
            ${this.triggerBorderWidth !== 0 ? `bw:${this.triggerBorderWidth}` : ""}
            ${this.triggerBorderColor !== "transparent" ? `bc:${this.triggerBorderColor}` : ""}
            ${this.triggerBgColor !== "transparent" ? `bg:${this.triggerBgColor}` : ""}
            ${this.triggerColor !== "text-500" ? `color:${this.triggerColor}` : ""}
         `,
            "all"
          )}" dropdown-trigger:title="">${this.title}</dropdown-trigger>
          <dropdown-item style="${Cpx.String.trimWhitespace(
            ` z-index: 1000;
              position: absolute; 
              display: none; 
              ${this.positionX}: 0; 
              ${this.positionY === "bottom" ? "top" : "bottom"}: 100%; 
              max-width: ${this.maxWidth};
              padding-${this.positionY === "bottom" ? "top" : "bottom"}:var(--${this.spacingTop})
            `,
            "all"
          )}">
            ${this.initialContent}
          </dropdown-item>
      </div>
    `;
  }
}

customElements.define("dropdown-container", CpxDropDownContainer);
