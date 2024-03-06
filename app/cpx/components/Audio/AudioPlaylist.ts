import { CpxElement } from "../../element";

export class CpxAudioPlaylist extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  hasArtist: boolean;
  hasAlbum: boolean;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.title = this.getAttribute("audio-player:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-player:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasArtist = eval(this.getAttribute("audio-player:has-artist")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-artist")) || true;
    this.hasAlbum = eval(this.getAttribute("audio-player:has-album")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-album")) || true;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div data-audioplayer-playlist class="audio-playlist">
            <button class="audio-playlist__track" data-audioplayer-track data-audioplayer-track-url="../dist/song-1.mp3">
                <p class="audio-playlist__title" data-audioplayer-track="title">${this.title}</p>
                <p class="audio-playlist__artist" data-audioplayer-track="artist">${this.artist}</p>
                <img class="audio-playlist__cover" data-audioplayer-track="cover" src="https://placehold.co/600">
            </button>
            <button class="audio-playlist__track" data-audioplayer-track data-audioplayer-track-url="../dist/song-1.mp3">
                <p class="audio-playlist__title" data-audioplayer-track="title">${this.title}</p>
                <p class="audio-playlist__artist" data-audioplayer-track="artist">${this.artist}</p>
                <img class="audio-playlist__cover" data-audioplayer-track="cover" src="https://placehold.co/600">
            </button>
        </div>
        `;
  }
}
customElements.define(`audio-playlist`, CpxAudioPlaylist);
