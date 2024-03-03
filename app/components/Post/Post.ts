import { Cpx, Config, DB } from "../../app";

export class ComponentPost extends Cpx.Element {
  id: string;
  hasHeadline: any;
  hasContent: any;
  hasImage: any;

  constructor() {
    super();
    this.hasHeadline = this.getAttribute("post:has-headline") || true;
    this.hasContent = this.getAttribute("post:has-content") || true;
    this.hasImage = this.getAttribute("post:has-image") || true;
    this.id = this.getAttribute("post:id") || "post id";
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
        <article class="post">
            <app-text
                text:format=h1
                text:size=xl
                text:color=black
                class="post__headline">
                ${DB.POSTS[this.id].title}
            </app-text>
            <app-text
                text:format=p
                text:size=md
                text:color=black
                class="post__content">
                ${DB.POSTS[this.id].content}
            </app-text>
        </article>
        `;
  }
}
customElements.define(`${Config.prefix}-post`, ComponentPost);
