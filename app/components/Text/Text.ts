import { Cpx, Config } from "../../app";

export class ComponentText extends Cpx.Element {
  format: string;
  weight: string;
  size: string;
  letterSpacing: string;
  lineHeight: string;
  color: string;
  align: string;
  transform: string;

  constructor() {
    super();
    this.format = this.getAttribute("text:format") || "p";
    this.weight = this.getAttribute("text:weight") || "400";
    this.size = this.getAttribute("text:size") || "md";
    this.letterSpacing = this.getAttribute("text:letter-spacing") || "0";
    this.lineHeight = this.getAttribute("text:line-height") || "md";
    this.color = this.getAttribute("text:color") || "currentColor";
    this.align = this.getAttribute("text:align") || "left";
    this.transform = this.getAttribute("text:transform") || "none";
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <${this.format} 
            class="text text--weight-${this.weight} text--size-${this.size} text--letter-spacing-${this.letterSpacing} text--line-height-${this.letterSpacing} text--text-align-${this.align} text--color-${this.color} text--text-transform-${this.transform}
        ">
            ${this.initialContent}
        </${this.format}>
        `;
  }
}
customElements.define(`${Config.prefix}-text`, ComponentText);
