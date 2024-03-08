import { CpxElement } from "../../element";

/**
 * @element text-element
 * @class CpxTextElement
 * @description
 * TextElement Component
 * @example
 * <text-element text-element:type="p" text-element:class="text-element--example" text-element:align="center" text-element:font-family="serif" text-element:font-weight="bold" text-element:font-style="italic" text-element:font-size="lg" text-element:line-height="sm" text-element:letter-spacing="sm">
 */
export class CpxTextElement extends CpxElement {
  type: string;
  classNames: string;
  align: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;

  constructor() {
    super();
    this.type = this.getAttribute("text-element:type") || "p";
    this.classNames = this.getAttribute("text-element:class") || "";
    this.align = this.getAttribute("text-element:align") || "start";
    this.fontFamily = this.getAttribute("text-element:font-family") || "sans";
    this.fontWeight = this.getAttribute("text-element:font-weight") || "normal";
    this.fontStyle = this.getAttribute("text-element:font-style") || "normal";
    this.fontSize = this.getAttribute("text-element:font-size") || "sm";
    this.lineHeight = this.getAttribute("text-element:line-height") || "inherit";
    this.letterSpacing = this.getAttribute("text-element:letter-spacing") || "inherit";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <${this.type} class="text-element text-element--text-align-${this.align} text-element--font-size-${this.fontSize} text-element--font-weight-${this.fontWeight} text-element--font-style-${this.fontStyle} text-element--font-family-${this.fontFamily} text-element--line-height-${this.lineHeight} text-element--letter-spacing-${this.letterSpacing} ${this.classNames}">
        ${this.initialContent}
    </${this.type}>
        `;
  }
}
customElements.define(`text-element`, CpxTextElement);
