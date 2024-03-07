import { CpxElement } from "../../element";

/**
 * @element drop-down
 * @description A drop-down component that can be used to display content when hovered over.
 * @example
 * <drop-down drop-down:title="DropDown Title" drop-down:content="DropDown Content">
 * </drop-down>
 */
export class CpxDropDown extends CpxElement implements Element {
  classNames: string;
  title: string;
  content: string;
  constructor() {
    super();
    this.classNames = this.getAttribute("drop-down:class") || "";
    this.title = this.getAttribute("drop-down:title") || "DropDown Title";
    this.content = this.initialContent || this.getAttribute("drop-down:content") || "DropDown Content";
  }

  connectedCallback() {
    this.render();
    this.addMouseHandler();
  }

  addMouseHandler() {
    const dropDown = this.querySelector(`[drop-down="toggle"]`) as HTMLElement;
    const dropDownEvent = this.querySelector(`[drop-down]`)?.getAttribute("drop-down:event") || "mouseover";
    dropDown.addEventListener(dropDownEvent, () => {
      dropDown.querySelector(`[drop-down="toggle"]`).style.display = `block`;
    });
    dropDown.addEventListener(dropDownEvent === "mouseover" ? "mouseout" : "DOMContentLoaded", () => {
      dropDown.querySelector(`[drop-down="toggle"]`).style.display = `none`;
    });
  }

  render() {
    this.innerHTML = `
       <div class="drop-down ${this.classNames}">
          <section class="drop-down__toggle" drop-down="toggle">
              ${this.title}
          </section>
        </div>
        <section class="drop-down__content" drop-down="content">
          ${this.content}
        </section>
        `;
  }
}
customElements.define(`drop-down`, CpxDropDown);
