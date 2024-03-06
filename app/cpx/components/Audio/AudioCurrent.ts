import { CpxElement } from "../../element";

/**
 * @element audio-current
 * @class CpxAudioCurrent
 * @description
 * AudioCurrent Component
 * @example
 * <audio-current audio-current:style="default" audio-current:title="AudioPlayer Title" audio-current:artist="AudioPlayer Artist Title" audio-current:album="AudioPlayer Album Title">
 */
export class CpxAudioCurrent extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-current:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.title = this.getAttribute("audio-current:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-current:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-current:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="audio-current audio-current--${this.appearance}">
            ${
              this.initialContent !== ""
                ? this.initialContent
                : `
                  <section>
                      <img class="audio-current__image" data-audioplayer-current="cover">
                      <div class="audio-current__text">
                        <p class="audio-current__title" data-audioplayer-current="title"></p>
                        <p class="audio-current__artist" data-audioplayer-current="artist"></p>
                      </div>
                  </section>
                `
            }
        </div>
        `;
  }
}
customElements.define(`audio-current`, CpxAudioCurrent);
