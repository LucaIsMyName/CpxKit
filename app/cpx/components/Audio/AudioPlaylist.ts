import { CpxElement } from "../../element";

/**
 * @class CpxAudioPlaylist
 * @description
 * AudioPlaylist Component
 * @example
 * <audio-playlist audio-player:style="default" audio-player:title="AudioPlayer Title" audio-player:artist="AudioPlayer Artist Title" audio-player:album="AudioPlayer Album Title" audio-player:has-artist="true" audio-player:has-album="true">
 * </audio-playlist>
 *
 */
export class CpxAudioPlaylist extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  hasArtist: boolean;
  hasAlbum: boolean;
  playlist: Array<Object>;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.title = this.getAttribute("audio-player:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-player:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasArtist = eval(this.getAttribute("audio-player:has-artist")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-artist")) || true;
    this.hasAlbum = eval(this.getAttribute("audio-player:has-album")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-album")) || true;
    this.playlist = [
      {
        title: "Song 1",
        artist: "Artist 1",
        album: "Album 1",
        cover: "https://placehold.co/600",
        url: "../dist/song-1.mp3",
      },
      {
        title: "Song 2",
        artist: "Artist 2",
        album: "Album 2",
        cover: "https://placehold.co/601",
        url: "../dist/song-2.mp3",
      },
      {
        title: "Song 3",
        artist: "Artist 3",
        album: "Album 3",
        cover: "https://placehold.co/602",
        url: "../dist/song-3.mp3",
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div data-audioplayer-playlist class="audio-playlist audio-playlist--${this.appearance}">
            ${this.playlist.map((track: any, index: number) => {
              return `
                    <button class="audio-playlist__track" data-audioplayer-track data-audioplayer-track-url="${track.url}">
                        <img data-audioplayer-track="cover" src="${track.cover}" alt="${track.title}">
                        <p data-audioplayer-playlist-track="title">${track.title}</p>
                        <div class="audio-playlist__meta">
                          ${this.hasArtist === true ? `<p data-audioplayer-playlist-track="artist">${track.artist}</p>` : ``}
                          ${this.hasAlbum === true ? `<p data-audioplayer-playlist-track"album">${track.album}</p>` : ``}
                        </div>
                    </button>
                    `;
            })}
        </div>
        `;
  }
}
customElements.define(`audio-playlist`, CpxAudioPlaylist);
