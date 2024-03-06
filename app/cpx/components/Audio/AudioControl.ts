import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxAudioControl extends CpxElement {
  appearance: string;
  type: string;
  url: string;
  hasIcon: boolean;
  hasText: boolean;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-control:appearance") || document.querySelector("audio-player").getAttribute("audio-player:appearance") || "default";
    this.type = this.getAttribute("audio-control:type") || "play-pause";
    this.hasIcon = eval(this.getAttribute("audio-control:has-icon")) || true;
    this.hasText = eval(this.getAttribute("audio-control:has-text")) || true;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
            <button 
                data-audioplayer-control="${this.type}">
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : ` 
                    <section>
                        ${
                            this.hasIcon ? Cpx.Icon[this.type] : ""
                        }
                        ${
                            this.hasText ? this.type : ""
                        }
                    </section>
                    `
                }  
            </button>
        `;
  }
}
customElements.define(`audio-control`, CpxAudioControl);
