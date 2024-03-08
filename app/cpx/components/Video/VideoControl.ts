import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

export class CpxVideoControl extends CpxElement {
  appearance: string;
  classNames: string;
  type: string;
  url: string;
  icon: string;
  hasIcon: boolean;
  hasText: boolean;

  constructor() {
    super();
    this.appearance = this.getAttribute("video-control:appearance") || document.querySelector("video-player").getAttribute("video-player:appearance") || "default";
    this.classNames = this.getAttribute("video-control:class") || "";
    this.type = this.getAttribute("video-control:type") || "play-pause";
    this.icon = this.getAttribute("video-control:icon") || "play";
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
                ? `<input type="range" class="video-control video-control--${this.appearance} video-control--slider ${this.classNames}" video-control="${this.type}">`
                : `
                <button 
                click:delete
                class="video-control video-control--${this.appearance} ${this.classNames}"
                video-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : `
                    <section class="video-control__inner-container">
                        ${
                          this.hasIcon
                            ? `${
                                this.type === "play-pause"
                                  ? `   <div  class="video-control__icon">
                                            ${this.querySelector("button").getAttribute("video-current-state") === "play" ? Icon.pause : Icon.play}
                                        </div>`
                                  : ``
                              }
                                <div class="video-control__icon">
                                    ${Icon[this.icon]}
                                </div>
                                    `
                            : ""
                        }
                        ${
                          this.hasText
                            ? `
                                <div class="video-control__text">
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
