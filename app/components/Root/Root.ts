import { Cpx, Config } from "../../app";
/**
 * @class ComponentRoot
 * @description
 * This is the root component for the application.
 * It contains all the core functionality of the root component.
 * @example
 * <app-root></app-root>
 */
export class ComponentRoot extends Cpx.Element {
  initialContent: string;
  title: string;
  description: string;
  storage: any;
  state: any;

  constructor() {
    super();
    this.title = this.getAttribute("root:title") || "Root Title";
    this.description = this.getAttribute("root:description") || "Root Description";
    this.storage = Cpx.Storage;
    this.state = Cpx.State;

    /**
     * Set the Color Scheme
     */
    // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)") ? `dark` : `light`;
    // console.log("Colorscheme: " + prefersDarkScheme);
    // console.log("User Colorscheme: " + this.storage.Local.get("user-color-scheme"));
    // console.log("User Colorscheme: " + this.state.get("theme"));
    // const userPreferedColorScheme = this.state.get("theme") || this.storage.Local.get("user-color-scheme") || prefersDarkScheme;
    // this.storage.Local.set("user-color-scheme", userPreferedColorScheme);
    // document.body.setAttribute("theme", userPreferedColorScheme);
    // this.state.set(`theme`, userPreferedColorScheme);
  }
  connectedCallback() {
    this.setInitialState();
    this.setThemeColor();
    this.render();
    this.addClickHandler();
  }

  setThemeColor() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)") ? `dark` : `light`;
    console.log("Colorscheme Agent: " + prefersDarkScheme);
    console.log("Colorscheme Storage: " + this.storage.Local.get("user-color-scheme"));
    console.log("Colorscheme State: " + this.state.get("theme"));
    const userPreferedColorScheme = this.state.get("theme") || this.storage.Local.get("user-color-scheme") || prefersDarkScheme;
    console.log("Colorscheme chosen: " + userPreferedColorScheme);
    this.storage.Local.set("user-color-scheme", userPreferedColorScheme);
    document.body.setAttribute("theme", userPreferedColorScheme);
    if (userPreferedColorScheme !== this.state.get("theme")) {
      this.state.set(`theme`, userPreferedColorScheme);
    }
  }

  render() {
    this.innerHTML = `
          <header class="position:sticky top:0 p:4 w:full bg:${this.state.get("theme") === "dark" ? `dark-800` : `light-200`} display:flex gap:4 content:between">
            <app-nav class=""></app-nav>
          </header>
          <render-container>
            <main class="">
                ${this.state.has("page") ? `<app-page-${this.state.get("page")} class=""></app-page-${this.state.get("page")}>` : `<app-page-home></app-page-home>`}
            </main>
              ${
                // Check if the modal is active
                this.state.get("modalisactive") === "true"
                  ? `
                    <modal-container modal-container:is-active="${this.state.get("modalisactive")}" modal-container:content="${this.state.get("modalcontent")}">
                      <app-page-${this.state.get("modalcontent")}>
                      </app-page-${this.state.get("modalcontent")}>
                    </modal-container>
                  `
                  : ``
              }
          </render-container>
          <footer class="{sm}display:flex justify:between items:center gap:4 p:4 w:full bg:${this.state.get("theme") === "dark" ? `dark-800` : `light-200`} display:flex gap:4 content:between">
            <h2>${this.title}</h2>
            <app-nav class=""></app-nav>
          </footer>
        `;
  }
}
customElements.define(`${Config.prefix}-root`, ComponentRoot);
