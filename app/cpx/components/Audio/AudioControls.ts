import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * @class CpxAudioControls
 * @description
 * AudioControls Component
 * @example
 * <audio-controls audio-controls:style="default" audio-controls:title="AudioPlayer Title" audio-controls:artist="AudioPlayer Artist Title" audio-controls:album="AudioPlayer Album Title">
 */
export class CpxAudioControls extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  hasPlayPause: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  hasProgress: boolean;
  hasVolume: boolean;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-controls:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.title = this.getAttribute("audio-controls:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-controls:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-controls:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasPlayPause = this.getAttribute("audio-controls:has-play-pause") || eval(document.querySelector("audio-player").getAttribute("audio-player:has-play-pause")) || true;
    this.hasPrev = this.getAttribute("audio-controls:has-prev") || eval(document.querySelector("audio-player").getAttribute("audio-player:has-prev")) || true;
    this.hasNext = this.getAttribute("audio-controls:has-next") || eval(document.querySelector("audio-player").getAttribute("audio-player:has-next")) || true;
    this.hasProgress = this.getAttribute("audio-controls:has-progress") || eval(document.querySelector("audio-player").getAttribute("audio-player:has-progress")) || true;
    this.hasVolume = this.getAttribute("audio-controls:has-volume") || eval(document.querySelector("audio-player").getAttribute("audio-player:has-volume")) || true;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
            <div class="audio-controls audio-controls--${this.appearance}" data-audioplayer-controls>
                ${
                  this.initialContent !== ""
                    ? this.initialContent
                    : ` 
                        ${
                          this.hasProgress === true
                            ? `
                            <div class="audio-controls__progress-container">
                                <audio-control class="audio-controls__progress-slider" audio-control:type="progress-bar">
                            </div>`
                            : ``
                        }
                        
                        <div class="audio-controls__playback-controls-row">
                            ${
                              this.hasPrev === true
                                ? `
                                <audio-control class="audio-controls__prev" data-audioplayer-control="prev">
                                    ${Cpx.Icon.prev}
                                </audio-control>
                                    `
                                : ``
                            }
                            ${
                              this.hasPlayPause === true
                                ? `
                                <audio-control class="audio-controls__play-pause" data-audioplayer-control="play-pause">
                                    ${Cpx.Icon.play}
                                </audio-control>
                                `
                                : ``
                            }
                            ${
                              this.hasNext === true
                                ? `
                                  <audio-control class="audio-controls__next" data-audioplayer-control="next">
                                      ${Cpx.Icon.next}
                                  </audio-control>
                                        `
                                : ``
                            }
                        </div>
                        ${
                          this.hasVolume === true
                            ? `
                              <div class="audio-controls__volume-container">
                                  <audio-control class="audio-controls__volume-slider" audio-control:type="volume">
                              </div>`
                            : ``
                        }`
                }  
            </div>
        `;
  }
}
customElements.define(`audio-controls`, CpxAudioControls);
