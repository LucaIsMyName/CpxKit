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
    this.letterSpacing = this.getAttribute("text:letter-spacing") || "normal";
    this.lineHeight = this.getAttribute("text:line-height") || "md";
    this.color = this.getAttribute("text:color") || "currentColor";
    this.align = this.getAttribute("text:align") || "start";
    this.transform = this.getAttribute("text:transform") || "none";
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <${this.format} class="text ${this.weight !== "normal" ? `text--weight-${this.weight}` : ``} ${this.size !== "md" ? `text--size-${this.size}` : ``} ${this.letterSpacing !== "normal" ? `text--letter-spacing-${this.letterSpacing}` : ``} ${this.lineHeight !== "md" ? `text--line-height-${this.lineHeight}` : ``} ${this.align !== "start" ? `text--align-${this.align}` : ``} ${this.color !== "currentColor" ? `text--color-${this.color}` : ``} ${this.transform !== "none" ? `text--transform-${this.transform}` : ``}">
            ${this.initialContent}
        </${this.format}>
        `;
  }
}
customElements.define(`${Config.prefix}-text`, ComponentText);
