import { CpxElement } from "../../element";

/**
 * @element badge-element
 * @description A badge-element component that can be used to display content when hovered over.
 * @example
 * <badge-element badge-element:title="DropDown Title" badge-element:content="DropDown Content">
 * </badge-element>
 */
export class CpxBadgeElement extends CpxElement implements Element {
  classNames: string;
  size: string;
  color: string;
  fontFamily: string;
  fontWeight: string;
  letterSpacing: string;
  textTransform: string;
  borderRadius: string;
  padding: string;
  action: any;

  constructor() {
    super();
    this.classNames = this.getAttribute("badge-element:class") || "";
    this.size = this.getAttribute("badge-element:size") || "xs";
    this.color = this.getAttribute("badge-element:color") || "gray";
    this.fontFamily = this.getAttribute("badge-element:font-family") || "sans";
    this.fontWeight = this.getAttribute("badge-element:font-weight") || "normal";
    this.letterSpacing = this.getAttribute("badge-element:letter-spacing") || "md";
    this.textTransform = this.getAttribute("badge-element:text-transform") || "normal";
    this.borderRadius = this.getAttribute("badge-element:border-radius") || "pill";
    this.padding = this.getAttribute("badge-element:padding") || "sm";
    this.action = eval(this.getAttribute("badge-element:action")) || false;
  }

  render() {
    this.innerHTML = `
        <button 
        ${
          this.action !== false
            ? `
              onclick="${this.action}"
              `
            : `tabindex="-1"`
        }
        class="
        badge-element
        badge-element--font-size-${this.size}
        badge-element--color-${this.color}
        badge-element--font-family-${this.fontFamily}
        badge-element--font-weight-${this.fontWeight}
        badge-element--letter-spacing-${this.letterSpacing}
        badge-element--text-transform-${this.textTransform}
        badge-element--border-radius-${this.borderRadius}
        badge-element--padding-${this.padding}
        ${this.classNames}"
        
        >
            <span>${this.initialContent}</span>
        </button>
        `;
  }
}
customElements.define(`badge-element`, CpxBadgeElement);
