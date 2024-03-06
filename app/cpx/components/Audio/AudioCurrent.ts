import { CpxElement } from "../../element";

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
        <div class="audio-current">
            <section>
                <p data-audioplayer-current="title"></p>
                <p data-audioplayer-current="artist"></p>
                <img data-audioplayer-current="cover">
            </section>
            ${this.initialContent}
        </div>
        `;
  }
}
customElements.define(`audio-current`, CpxAudioCurrent);
