import { Cpx, Config, DB } from "../../app";

/**
 * @class ComponentNav
 * @description
 * This is the navigation component for the application.
 * It contains all the core functionality of the navigation component.
 * @example
 * <app-nav></app-nav>
 */
export class ComponentNav extends Cpx.Element {
  nav: string;
  storage: any;
  state: any;

  constructor() {
    super();
    this.nav = this.getAttribute("nav:type") || "main"; // DB Hook in DB.NAVIGATION[nav]
    this.state = Cpx.State;
  }
  connectedCallback() {
    this.setInitialState();
    this.render();
    this.addClickHandler();
  }

  getNav() {
    return DB.NAVIGATIONS[this.nav]
      .map((item: any): string => {
        // console.log(item);
        return `
          <li class="">
            <button class="px:2 py:1 radius:sm border-width:1 border-" nav nav:type="${item.type}" nav:location="${item.page}" >${item.title}</button>
          </li>`;
      })
      .join("");
  }

  render() {
    this.innerHTML = `
        <nav class="">
            <ul class="display:flex gap:4 list:none">
                ${this.getNav()}
            </ul>
        </nav>

        `;

    const allNavButtons = this.querySelectorAll("[nav]");
    allNavButtons.forEach((button: any) => {
      button.addEventListener("click", () => {
        const type = button.getAttribute("nav:type");
        const location = button.getAttribute("nav:location");
        this.state.set(type, location);
        document.querySelector("app-root").render();
      });
    });
  }
}
customElements.define(`${Config.prefix}-nav`, ComponentNav);
