import { CpxElement } from "../../element";
import { Cpx } from "../../index";

export class CpxAudioControls extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-controls:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.title = this.getAttribute("audio-controls:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-controls:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-controls:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
            <div data-audioplayer-controls>
                ${
                    this.initialContent !== ""
                    ? this.initialContent
                    : ` 
                        <div>
                            <input class="audio-controls__progress" type="range" data-audioplayer-control="progress-bar">
                        </div>
                        <div>
                            <button class="audio-controls__prev" data-audioplayer-control="prev">
                                ${Cpx.Icon.prev}
                            </button>
                            <button class="audio-controls__play-pause" data-audioplayer-control="play-pause">
                                ${Cpx.Icon.play}
                            </button>
                            <button class="audio-controls__next" data-audioplayer-control="next">
                                ${Cpx.Icon.next}
                            </button>
                        </div>
                        <div>
                            <input class="audio-controls__volume" type="range" data-audioplayer-control="volume">
                        </div>`
                }  
            </div>
        `;
  }
}
customElements.define(`audio-controls`, CpxAudioControls);
