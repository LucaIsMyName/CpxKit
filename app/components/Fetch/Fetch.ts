import { Cpx, Config } from "../../app";

export class ComponentFetch extends Cpx.Element {
  fetchUrl: string;

  constructor() {
    super();
    this.fetchUrl = this.getAttribute("fetch:url") || "https://jsonplaceholder.typicode.com/posts";
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  tryFetch() {
    Cpx.Http.fetch((this.fetchUrl = "https://jsonplaceholder.typicode.com/users")).then((response) => {
      return `Response: ${response.name}`;
    });
  }

  render() {
    this.innerHTML = `
       <section class="fetch">
            ${this.tryFetch()}
        </section>
        `;
  }
}
customElements.define(`${Config.prefix}-fetch`, ComponentFetch);
