import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

export class CpxAudioControl extends CpxElement {
  appearance: string;
  classNames: string;
  type: string;
  url: string;
  hasIcon: any;
  hasText: any;
  icon: string;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-control:appearance") || document.querySelector("audio-player").getAttribute("audio-player:appearance") || "default";
    this.classNames = this.getAttribute("audio-control:class") || "";
    this.type = this.getAttribute("audio-control:type") || "play-pause";
    this.icon = this.getAttribute("audio-control:icon") || "play";
    this.hasIcon = this.getAttribute("audio-control:has-icon") || true;
    this.hasText = this.getAttribute("audio-control:has-text") || true;
  }

  render() {
    let evalIcon = eval(this.hasIcon);
    let evalText = eval(this.hasText);

    this.innerHTML = `  
            ${
              this.type === "progress-bar" || this.type === "volume"
                ? `<input type="range" class="audio-control audio-control--${this.appearance} ${this.classNames}" audio-control="${this.type}">`
                : `
                <button 
                class="audio-control audio-control--${this.appearance} ${this.classNames}"
                audio-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : `
                    <section class="audio-control__inner-container">
                        ${
                          evalIcon
                            ? `
                                <div class="audio-control__icon">
                                    ${Icon[this.icon]}
                                </div>
                                    `
                            : ""
                        }
                        ${
                          evalText
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
