import { Cpx, Config } from "../../app";

export class ComponentModal extends Cpx.Element {
    title: string;
    description: string;
    storage: any;
    state: any;
    
    constructor() {
        super();
        this.title =
            this.getAttribute('modal:title')
            || 'modal Title';

        this.description =
            this.getAttribute('modal:description')
            || 'modal Description';

        this.storage = Cpx.Storage;
        this.state = Cpx.State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.innerHTML = `
        <section class="modal">
            modal!
        </section>
        `;
    }

}
customElements.define(`${Config.prefix}-modal`, ComponentModal);