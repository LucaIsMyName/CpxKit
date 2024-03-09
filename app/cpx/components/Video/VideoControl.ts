import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

export class CpxVideoControl extends CpxElement {
  classNames: string;
  type: string;
  url: string;
  icon: string;
  size: string;
  hasIcon: boolean;
  hasText: boolean;

  constructor() {
    super();
    this.classNames = this.getAttribute("video-control:class") || "";
    this.type = this.getAttribute("video-control:type") || "play-pause";
    this.icon = this.getAttribute("video-control:icon") || "play";
    this.size = this.getAttribute("video-control:size") || "9";
    this.hasIcon = eval(this.getAttribute("video-control:has-icon")) || true;
    this.hasText = eval(this.getAttribute("video-control:has-text")) || false;
  }

  connectedCallback() {
    this.render();
    this.addClickHandler();
    this.addDeleteOnClick();
  }

  render() {
    this.innerHTML = `  
            ${
              this.type === "progress-bar" || this.type === "volume"
                ? `<input type="range" class="${this.classNames}" video-control="${this.type}">`
                : `
                <button 
                click:delete
                class="size:${this.size} w:${this.size} h:${this.size} ${this.classNames}"
                video-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : `
                    <section class="">
                        ${
                          this.hasIcon
                            ? `${
                                this.type === "play-pause"
                                  ? `   <div  class="">
                                            ${this.querySelector("button").getAttribute("video-current-state") === "play" ? Icon.pause : Icon.play}
                                        </div>`
                                  : ``
                              }
                                <div class="">
                                    ${Icon[this.icon]}
                                </div>
                                    `
                            : ""
                        }
                        ${
                          this.hasText
                            ? `
                                <div class="">
                                    ${this.type}
                                </div>
                                `
                            : ""
                        }
                    </section>
                    `
                }  
                </button>
                `
            }
            
        `;
  }
}
customElements.define(`video-control`, CpxVideoControl);
