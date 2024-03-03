import { Cpx, Config } from "../../app";

export class ComponentFooter extends Cpx.Element {
    title: string;
    description: string;
    storage: any;
    state: any;
    
    constructor() {
        super();
        this.title =
            this.getAttribute('footer:title')
            || 'footer Title';

        this.description =
            this.getAttribute('footer:description')
            || 'footer Description';

        this.storage = Cpx.Storage;
        this.state = Cpx.State;
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
            Footer!
        </footer>
        `;
    }

}
customElements.define(`${Config.prefix}-footer`, ComponentFooter);