import { CpxElement } from "../../element";
import tippy, { roundArrow } from "tippy.js";
import "tippy.js/themes/light.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/svg-arrow.css";

// import 'tippy.js/themes/dark.css';

export class CpxToolTip extends CpxElement implements Element {
  this: Element;
  size: string;
  theme: string;
  tooltipContent: string;
  color: string;
  bgColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: string;
  radius: string | number;
  weight: string;
  padding: number;
  paddingX: number;
  paddingY: number;
  isInteractive: string | boolean;
  offsetX: number;
  offsetY: number;
  maxWidth: number;
  animation: string;
  trigger: string;
  position: string;

  duration: any;
  delay: any;
  constructor() {
    super();
    this.setAttribute("tool-tip", "");
    this.tooltipContent = this.getAttribute("tool-tip:content") || "";
    // Customization options
    this.theme = this.getAttribute("tool-tip:theme") || "light";
    this.size = this.getAttribute("tool-tip:size") || "xs";
    this.color = this.getAttribute("tool-tip:color") || "black";
    this.bgColor = this.getAttribute("tool-tip:bg-color") || "white";
    this.borderColor = this.getAttribute("tool-tip:border-color") || "black";
    this.borderWidth = parseInt(this.getAttribute("tool-tip:border-width")) || 1;
    this.radius = this.getAttribute("tool-tip:radius") || "sm";
    this.weight = this.getAttribute("tool-tip:weight") || "normal";
    this.padding = Math.floor(parseFloat(this.getAttribute("tool-tip:padding"))) || 1;
    this.paddingX = Math.floor(parseFloat(this.getAttribute("tool-tip:padding:x"))) || 2;
    this.paddingY = Math.floor(parseFloat(this.getAttribute("tool-tip:padding:y"))) || 1;
    this.isInteractive = eval(this.getAttribute("tool-tip:is-interactive")) || false;
    this.offsetX = Math.floor(parseFloat(this.getAttribute("tool-tip:offset:x"))) || 0;
    this.offsetY = Math.floor(parseFloat(this.getAttribute("tool-tip:offset:y"))) || 0;
    this.maxWidth = Math.floor(parseFloat(this.getAttribute("tool-tip:max-width"))) || 300;
    this.animation = this.getAttribute("tool-tip:animation") || "scale";
    this.trigger = this.getAttribute("tool-tip:trigger") || "mouseenter focus click";
    this.position = this.getAttribute("tool-tip:position") || "top";
    this.duration = {
      start: Math.floor(parseFloat(this.getAttribute("tool-tip:duration:start"))) || 200,
      end: Math.floor(parseFloat(this.getAttribute("tool-tip:duration:end"))) || 200,
    };
    this.delay = {
      start: parseInt(this.getAttribute("tool-tip:delay:start")) || 0,
      end: parseInt(this.getAttribute("tool-tip:delay:end")) || 100,
    };
  }

  connectedCallback(): void {
    this.render();
    console.log(this);
  }

  render() {
    // Initialize Tippy.js tooltip
    tippy(this, {
      allowHTML: true,
      content: `
        <div style="" class="px:${Math.floor(this.paddingX)} py:${Math.floor(this.padding)} radius:${this.radius} border-width:${this.borderWidth} size:${this.size}">
          ${this.tooltipContent}
        </div>
      `,
      theme: this.theme, // or 'dark', 'translucent', etc. customize as needed
      arrow: false,
      placement: this.position, // or 'bottom', 'left', 'right'
      appendTo: () => document.querySelector("app-root"),
      arrowType: this.arrowType,
      animation: this.animation,
      duration: [this.duration.start, this.duration.end],
      delay: [this.delay.start, this.duration.end],
      interactive: this.isInteractive, // allow interaction with the tooltip
      trigger: this.trigger, // show tooltip on mouseenter, focus, or click
      offset: [this.offsetX, this.offsetY], // adjust the tooltip's position
      maxWidth: 300, // maximum width of the tooltip
      // Customize appearance
      theme: {
        background: `var(--${this.bgColor})`,
        color: `var(--${this.color})`,
        border: `calc(var(--px) *${this.borderWidth}) solid ${this.borderColor}`,
        borderRadius: `var(--radius-${this.radius})`,
        fontWeight: `var(--radius-${this.weight})`,
        padding: `var(--${this.padding})`,
        arrow: eval(this.hasArrow),
      },
    });
  }
}

customElements.define("tool-tip", CpxToolTip);
