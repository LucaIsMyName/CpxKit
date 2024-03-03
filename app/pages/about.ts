import { Cpx, Config } from "../app";

export class PageAbout extends Cpx.Element {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
             <app-text  text:format=h1 text:weight=bold text:size=6xl text:letter-spacing=0 text:line-height=md text:color=primary>
                About Page
            </app-text>
        `;
    }

}

customElements.define(`${Config.prefix}-page-about`, PageAbout);