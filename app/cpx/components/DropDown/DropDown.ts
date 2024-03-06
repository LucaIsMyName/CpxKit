import { CpxElement } from "../../element";

export class CpxDropDown extends CpxElement implements Element {
  title: string;
  content: string;
  constructor() {
    super();
    this.title = this.getAttribute("drop-down:title") || "DropDown Title";
    this.content = this.initialContent || this.getAttribute("drop-down:content") || "DropDown Content";
  }

  connectedCallback() {
    this.render();
    this.addMouseHandler();
  }

  addMouseHandler() {
    const dropDown = this.querySelector(`[drop-down="toggle"]`) as HTMLElement;
    dropDown.addEventListener(`mouseover`, () => {
      dropDown.querySelector(`[drop-down="toggle"]`).style.display = `block`;
    });
    dropDown.addEventListener(`mouseout`, () => {
        dropDown.querySelector(`[drop-down="toggle"]`).style.display = `none`;
    });
  }

  render() {
    this.innerHTML = `
       <div class="drop-down">
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
