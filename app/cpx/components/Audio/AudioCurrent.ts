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
  classNames: string;
  title: string;
  artist: string;
  album: string;
  hasTitle: boolean;
  hasArtist: boolean;
  hasCover: boolean;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-current:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.classNames = this.getAttribute("audio-current:class") || "";
    this.title = this.getAttribute("audio-current:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-current:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-current:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasTitle = eval(this.getAttribute("audio-current:has-title")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-title")) || true;
    this.hasArtist = eval(this.getAttribute("audio-current:has-artist")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-artist")) || true;
    this.hasCover = eval(this.getAttribute("audio-current:has-cover")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-cover")) || true;
  }

  render() {
    this.innerHTML = `
        <div class="audio-current audio-current--${this.appearance} ${this.classNames}">
            ${
              this.initialContent !== ""
                ? this.initialContent
                : `
                ${
                  this.hasCover === true
                    ? `
                      <img class="audio-current__image mb:4" data-audioplayer-current="cover">`
                    : ``
                }
                ${
                  this.hasTitle === true || this.hasArtist === true
                    ? `
                    <div class="audio-current__text">
                      ${this.hasTitle === true ? `<text-element class="audio-current__title" data-audioplayer-current="title">${this.title}</text-element>` : ``}
                      ${this.hasArtist === true ? `<text-element class="audio-current__title" data-audioplayer-current="artist">${this.artist}</text-element>` : ``}
                    </div>
                    `
                    : ``
                }
                
                `
            }
        </div>
        `;
  }
}
customElements.define(`audio-current`, CpxAudioCurrent);
