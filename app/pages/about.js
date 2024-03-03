import { Cpx, Config } from "../app.ts";

export class PageAbout extends Cpx.Element {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>about Page</div>
        `;
    }

}

customElements.define(`${Config.prefix}-page-about`, PageAbout);