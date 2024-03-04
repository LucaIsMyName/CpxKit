import { Cpx, Config } from "../../app";

export class ComponentModal extends Cpx.Element {
  title: string;
  description: string;
  storage: any;
  state: any;

  constructor() {
    super();
    this.title = this.getAttribute("modal:title") || "modal Title";

    this.description = this.getAttribute("modal:description") || "modal Description";
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <section class="modal">
           <section 
                data-set-state-key="modalIsActive" 
                data-set-state-value="false" 
                class="modal__underlay">
           </section>
           <section class="modal__content">
              ${this.initialContent}
            </section>
        </section>
        `;
  }
}
customElements.define(`${Config.prefix}-modal`, ComponentModal);
