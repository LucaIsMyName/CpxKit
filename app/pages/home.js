import { Cpx, Config } from "../app.ts";

export class PageHome extends Cpx.Element {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>Home Page</div>
        `;
    }

}

customElements.define(`${Config.prefix}-page-home`, PageHome);