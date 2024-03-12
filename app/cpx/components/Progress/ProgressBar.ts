import { CpxElement } from "../../element";

export class CpxProgressBar extends CpxElement implements Element {
  classNames: string;
  unit: string;
  height: string;
  width: string;
  bgColor: string;
  color: string;
  progressColor: string;
  progressColorHover: string | boolean;
  borderRadius: string;
  borderWidth: number;
  borderColor: string;

  progress: number;
  progressStart: number;
  progressEnd: number;

  hasNumbers: boolean;

  constructor() {
    super();
    this.classList.add("display:block");
    this.unit = this.getAttribute("progress-bar:unit") || "";
    this.classNames = this.getAttribute("progress-bar:class") || "";
    this.height = this.getAttribute("progress-bar:height") || "2";
    this.width = this.getAttribute("progress-bar:width") || "full";
    this.bgColor = this.getAttribute("progress-bar:bg") || "shade-xl-900";
    this.color = this.getAttribute("progress-bar:color") || "text-500";
    this.borderRadius = this.getAttribute("progress-bar:radius") || "pill";
    this.borderWidth = parseInt(this.getAttribute("progress-bar:border-width")) || 0;
    this.borderColor = this.getAttribute("progress-bar:border-color") || "transparent";
    this.progress = parseInt(this.getAttribute("progress-bar:progress")) || 0;
    this.progressColor = this.getAttribute("progress-bar:progress:color") || "accent-500";
    this.progressColorHover = this.getAttribute("progress-bar:progress:color:hover") || false;
    this.progressStart = parseInt(this.getAttribute("progress-bar:start")) || 0;
    this.progressEnd = parseInt(this.getAttribute("progress-bar:end")) || 100;
    this.hasNumbers = eval(this.getAttribute("progress-bar:has-numbers")) || true;
  }

  renderNumbers(position: string) {
    return this.hasNumbers === true
      ? `
        <span class="size:xs text:${this.color}">${position}${this.unit}</span>
      `
      : ``;
  }

  render() {
    // Calculate the progress percentage relative to the start and end points
    const progressPercentage = ((this.progress - this.progressStart) / (this.progressEnd - this.progressStart)) * 100;

    // Display the content with the calculated progress percentage
    this.innerHTML = `
    <section class="w:auto display:flex gap:4 items:center color:${this.color}">
        ${this.renderNumbers(this.progressStart.toString())}
        <div class="
            w:full
            h:${this.height}
            ${this.bgColor !== "transparent" ? `bg:${this.bgColor}` : ""}
            ${this.borderColor !== "transparent" ? `border-color:${this.borderColor}` : ""}
            ${this.borderWidth !== 0 ? `border-width:${this.borderWidth}` : ""}
            ${this.borderRadius === "none" ? `radius:none` : `radius:${this.borderRadius}`}
            overflow:hidden ">
                <div style="width: ${progressPercentage}%;" class="bg:${this.progressColor} ${this.borderRadius === "none" ? `radius:none` : `radius:${this.borderRadius}`} bg:${this.progressColorHover}@hover h:full"></div>
        </div>
        ${this.renderNumbers(this.progressEnd.toString())}
    </section>`;
  }
}

customElements.define(`progress-bar`, CpxProgressBar);
