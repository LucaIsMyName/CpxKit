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
  appearance: any;
  classNames: string;
  title: string;
  artist: string;
  album: string;
  hasTitle: any;
  hasArtist: any;
  hasCover: any;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-current:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.classNames = this.getAttribute("audio-current:class") || "";
    this.title = this.getAttribute("audio-current:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-current:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-current:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasTitle = this.getAttribute("audio-current:has-title") || document.querySelector("audio-player").getAttribute("audio-player:has-title") || true;
    this.hasArtist = this.getAttribute("audio-current:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
    this.hasCover = this.getAttribute("audio-current:has-cover") || document.querySelector("audio-player").getAttribute("audio-player:has-cover") || true;
  }

  render() {
    let evalTitle = eval(this.hasTitle);
    let evalArtist = eval(this.hasArtist);
    let evalCover = eval(this.hasCover);
    
    this.innerHTML = `
        <div class="audio-current audio-current--${this.appearance} ${this.classNames}">
            ${
              this.initialContent !== ""
                ? this.initialContent
                : `
                ${
                  evalCover === true
                    ? `
                      <img class="audio-current__image mb:4" audio-current="cover">`
                    : ``
                }
                ${
                  evalTitle === true || evalArtist === true
                    ? `
                    <div class="audio-current__text">
                      ${evalTitle === true ? `<text-element class="audio-current__title" audio-current="title">${this.title}</text-element>` : ``}
                      ${evalArtist === true ? `<text-element class="audio-current__title" audio-current="artist">${this.artist}</text-element>` : ``}
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
