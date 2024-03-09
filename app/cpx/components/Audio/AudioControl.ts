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
  size: string;
  color: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("audio-control:class") || "";
    this.type = this.getAttribute("audio-control:type") || "play-pause";
    this.icon = this.getAttribute("audio-control:icon") || "play";
    this.size = this.getAttribute("audio-control:size") || "16";
    this.color = this.getAttribute("audio-control:color") || "gray-700";
    this.hasIcon = this.getAttribute("audio-control:has-icon") || true;
    this.hasText = this.getAttribute("audio-control:has-text") || true;
  }

  render() {
    let evalIcon = eval(this.hasIcon);
    let evalText = eval(this.hasText);

    this.innerHTML = `  
            ${
              this.type === "progress-bar" || this.type === "volume"
                ? `<input type="range" class="color:${this.color} ${this.classNames}" audio-control="${this.type}">`
                : `
                <button 
                class="color:${this.color} size:${this.size} h:${this.size} ${this.classNames}"
                audio-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : `
                    <section class="">
                        ${
                          evalIcon
                            ? `
                                <div class="w:${this.size} h:${this.size}">
                                    ${Icon[this.icon]}
                                </div>
                                    `
                            : ""
                        }
                        ${
                          evalText
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
customElements.define(`audio-control`, CpxAudioControl);
