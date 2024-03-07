import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

export class CpxAudioControl extends CpxElement {
  appearance: string;
  classNames: string;
  type: string;
  url: string;
  hasIcon: boolean;
  hasText: boolean;
  icon: string;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-control:appearance") || document.querySelector("audio-player").getAttribute("audio-player:appearance") || "default";
    this.classNames = this.getAttribute("audio-control:class") || "";
    this.type = this.getAttribute("audio-control:type") || "play-pause";
    this.icon = this.getAttribute("audio-control:icon") || "play";
    this.hasIcon = eval(this.getAttribute("audio-control:has-icon")) || true;
    this.hasText = eval(this.getAttribute("audio-control:has-text")) || true;
  }

  render() {
    this.innerHTML = `  
            ${
              this.type === "progress-bar" || this.type === "volume"
                ? `<input type="range" class="audio-control audio-control--${this.appearance} ${this.classNames}" data-audioplayer-control="${this.type}">`
                : `
                <button 
                class="audio-control audio-control--${this.appearance} ${this.classNames}"
                data-audioplayer-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : `
                    <section class="audio-control__inner-container">
                        ${
                          this.hasIcon
                            ? `
                                <div class="audio-control__icon">
                                    ${Icon[this.icon]}
                                </div>
                                    `
                            : ""
                        }
                        ${
                          this.hasText
                            ? `
                                <div class="audio-control__text">
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
customElements.define(`audio-control`, CpxAudioControl);
