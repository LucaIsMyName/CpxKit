import { Cpx, Config, DB } from "../../app";

export class ComponentHeader extends Cpx.Element {
  title: string;
  description: string;
  navMainType: string;
  navSecondaryType: string;
  storage: any;
  state: any;

  constructor() {
    super();
    this.title = this.getAttribute("header:title") || "Header Title";
    this.navMainType = this.getAttribute("header:nav:type-main") || "main";
    this.navSecondaryType = this.getAttribute("header:nav:type-secondary") || "secondary";
    this.description = this.getAttribute("header:description") || "Header Description";

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
            <section class="header__brand">
                <app-text 
                    text:format=h1 
                    text:color=white
                    text:weight=bold
                    text:size=md
                    text:letter-spacing=wide>
                        ${this.title}
                </app-text>
                <app-text class="screen-reader">${this.description}</app-text>
            </section>
            <section class="header__navigations">
                <app-nav 
                    nav:direction=row 
                    nav:style=button 
                    nav:type=${this.navMainType} 
                    class="
                        header__nav 
                        header__nav--is-main"></app-nav>
                <app-nav 
                    nav:direction=row 
                    nav:style=button 
                    nav:type=${this.navSecondaryType} 
                    class="
                        header__nav 
                        header__nav--is-secondary"></app-nav>
            </section>
        </header>
        `;
  }
}
customElements.define(`${Config.prefix}-header`, ComponentHeader);
