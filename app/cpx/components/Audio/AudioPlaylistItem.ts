import { CpxElement } from "../../element";

/**
 * @class CpxAudioPlaylistItem
 *
 */
export class CpxAudioPlaylistItem extends CpxElement {
  appearance: string;
  classNames: string;
  title: string;
  artist: string;
  album: string;
  hasArtist: any;
  hasAlbum: any;
  hasTitle: any;
  playlist: Array<Object>;
  url: string;

  constructor() {
    super();
    this.classNames = this.getAttribute("audio-playlist-item:class") || "";
    this.title = this.getAttribute("audio-playlist-item:title") || document.querySelector("audio-playlist").getAttribute("audio-playlist:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlaylistItem ITitle";
    this.artist = this.getAttribute("audio-playlist-item:artist") || document.querySelector("audio-playlist").getAttribute("audio-playlist:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlaylistItem Artist Title";
    this.album = this.getAttribute("audio-playlist-item:album") || document.querySelector("audio-playlist").getAttribute("audio-playlist:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlaylistItem Album Title";
    this.hasTitle = this.getAttribute("audio-playlist-item:has-title") || document.querySelector("audio-player").getAttribute("audio-player:has-title") || true;
    this.hasArtist = this.getAttribute("audio-playlist-item:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
    this.hasAlbum = this.getAttribute("audio-playlist-item:has-album") || document.querySelector("audio-player").getAttribute("audio-player:has-album") || true;
    this.url = this.getAttribute("audio-playlist-item:url") || "http://localhost/1234";
  }

  render() {
    let evalTitle = eval(this.hasTitle);
    let evalArtist = eval(this.hasArtist);
    let evalAlbum = eval(this.hasAlbum);

    this.innerHTML = `
        <button class="w:full p:2 mb:2 display:flex radius:sm items:center justify-content:between gap:4 border-width:1 border-color:gray-400 mb ${this.classNames}" audio-track audio-track-url="${this.url}>
          ${
            this.initialContent !== ""
              ? `${this.initialContent}`
              : `
              ${
                evalTitle === true
                  ? `
                    <p class="" audio-track="title">${this.title}</p>
                  `
                  : ``
              }
              <section class="display:flex items:center gap:4">
                  ${evalArtist === true ? `<p class="size:xs line-height:0" audio-track="artist">${this.artist}</p>` : ``}
                  ${evalAlbum === true ? `<p class="size:xs line-height:0" audio-track="album">${this.album}</p>` : ``}
              </section>
            `
          }
        </button>
    `;
  }
}
customElements.define(`audio-playlist-item`, CpxAudioPlaylistItem);
