import { Cpx, Config, DB } from "../app";

export class PagePost extends Cpx.Element {
  postId: string;

  constructor() {
    super();
    this.postId = this.getAttribute("post:id") || "0";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <app-text 
                text:format=h1
                text:weight=bold
                text:size=6xl
                text:letter-spacing=0
                text:line-height=md 
                text:color=primary>
               ${DB.POSTS[this.postId].title}
            </app-text>
            <app-text text:format="p">
                ${DB.POSTS[this.postId].content}
            </app-text>
        `;
  }
}

customElements.define(`${Config.prefix}-page-post`, PagePost);
