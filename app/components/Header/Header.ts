import { Cpx, Config } from "../../app";

export class ComponentHeader extends Cpx.Element {
    title: string;
    description: string;
    storage: any;
    state: any;
    
    constructor() {
        super();
        this.title =
            this.getAttribute('header:title')
            || 'Header Title';

        this.description =
            this.getAttribute('header:description')
            || 'Header Description';

        this.storage = Cpx.Storage;
        this.state = Cpx.State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.innerHTML = `
        <header class="header">
            Header!
        </header>
        `;
    }

}
customElements.define(`${Config.prefix}-header`, ComponentHeader);