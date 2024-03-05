import { Cpx, Config } from "../../app";

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
  }
  connectedCallback() {
    this.setInitialState();
    this.render();
    this.addClickHandler();
  }

  render() {
    this.innerHTML = `
        <section class="root">
            <main class="root__main">
                ${this.state.has("page") ? `<app-page-${this.state.get("page")} class="root__page"></app-page-${this.state.get("page")}>` : `<app-page-home></app-page-home>`}
            </main>
        </section>
        `;
  }
}
customElements.define(`${Config.prefix}-root`, ComponentRoot);
