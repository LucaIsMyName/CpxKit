import { Cpx, Config } from "../../app";

export class ComponentFooter extends Cpx.Element {
    title: string;
    description: string;
    storage: any;
    navMainType: string;
    navSecondaryType: string;
    state: any;

    constructor() {
        super();
        this.title =
            this.getAttribute('footer:title')
            || 'Footer Title';

        this.description =
            this.getAttribute('footer:description')
            || 'Footer Description';
        this.navMainType = this.getAttribute('footer:nav:type-main') || 'main';
        this.navSecondaryType = this.getAttribute('footer:nav:type-secondary') || 'user';
    }
    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.innerHTML = `
       <footer class="footer">
            <section class="footer__brand">
                <app-text text:format=h1 text:size=xl text:color=white>
                    ${this.title}
                </app-text>
                <app-text text:format=p text:size=xs text:color=text-dark class="">
                    ${this.description}
                </app-text>
            </section>
            <section class="footer__navigations">
                <app-nav 
                    nav:direction=column 
                    nav:style="button" 
                    nav:type="${this.navMainType}" 
                    class="
                        footer__nav 
                        footer__nav--is-main"></app-nav>
                <app-nav 
                    nav:direction=column 
                    nav:style="button" 
                    nav:type="${this.navSecondaryType}" 
                    class="
                        footer__nav 
                        footer__nav--is-secondary"></app-nav>
            </section>
        </footer>
        `;
    }

}
customElements.define(`${Config.prefix}-footer`, ComponentFooter);