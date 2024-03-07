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
  hasArtist: boolean;
  hasAlbum: boolean;
  hasTitle: boolean;
  playlist: Array<Object>;
  url: string;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-playlist-item:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.classNames = this.getAttribute("audio-playlist-item:class") || "";
    this.title = this.getAttribute("audio-playlist-item:title") || document.querySelector("audio-playlist").getAttribute("audio-playlist:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlaylistItem ITitle";
    this.artist = this.getAttribute("audio-playlist-item:artist") || document.querySelector("audio-playlist").getAttribute("audio-playlist:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlaylistItem Artist Title";
    this.album = this.getAttribute("audio-playlist-item:album") || document.querySelector("audio-playlist").getAttribute("audio-playlist:album")|| document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlaylistItem Album Title";
    this.hasTitle = eval(this.getAttribute("audio-playlist-item:has-title")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-title")) || true;
    this.hasArtist = eval(this.getAttribute("audio-playlist-item:has-artist")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-artist")) || true;
    this.hasAlbum = eval(this.getAttribute("audio-playlist-item:has-album")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-album")) || true;
    this.url = this.getAttribute("audio-playlist-item:url") || "http://localhost/1234";
  }

  render() {
    this.innerHTML = `
        <button class="audio-playlist-item audio-playlist-item--${this.appearance} ${this.classNames}" data-audioplayer-track data-audioplayer-track-url="${this.url}>
          ${
            this.initialContent !== ""
              ? `${this.initialContent}`
              : `
                <p class="audio-playlist-item__title" data-audioplayer-track="title">${this.title}</p>
                <section class="audio-playlist-item__meta">
                    ${this.hasArtist === true ? `<p class="audio-playlist-item__artist" data-audioplayer-track="artist">${this.artist}</p>` : ``}
                    ${this.hasAlbum === true ? `<p class="audio-playlist-item__album" data-audioplayer-track="album">${this.album}</p>` : ``}
                </section>
            `
          }
        </button>
        `;
  }
}
customElements.define(`audio-playlist-item`, CpxAudioPlaylistItem);
