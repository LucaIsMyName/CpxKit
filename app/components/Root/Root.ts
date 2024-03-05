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
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <section class="root">
            <app-header
                header:title="${this.title}"
                header:nav:type-main="main"
                header:nav:type-secondary="user"
                class="root__header"></app-header>
            <main class="root__main">
                ${this.state.has("page") ? `<app-page-${this.state.get("page")} class="root__page"></app-page-${this.state.get("page")}>` : `<app-page-home></app-page-home>`}
            </main>

            <app-footer
                footer:title="${this.title}"
                class="root__footer"></app-footer>

            <app-modal
                class="
                    root__modal 
                    ${eval(this.state.get("modalIsActive")) === true ? "root__modal--is-active" : ""}
                "
                modal:is-active="${this.state.get("modalIsActive")}">
                ${eval(this.state.get("modalIsActive")) === true ? `<app-page-${this.state.get("modalContent")} class="root__modal-content"></app-page-${this.state.get("modalContent")}>` : ``}

            </app-modal>
        </section>
        `;
  }
}
customElements.define(`${Config.prefix}-root`, ComponentRoot);
