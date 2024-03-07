import { CpxElement } from "../../element";

import { CpxAudioPlayer } from "./AudioPlayer";

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
  classNames: string;
  title: string;
  artist: string;
  album: string;
  hasArtist: boolean;
  hasAlbum: boolean;
  playlist: Array<Object>;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:style") || document.querySelector("audio-player").getAttribute("audio-player:style") || "default";
    this.classNames = this.getAttribute("audio-player:class") || "";
    this.title = this.getAttribute("audio-player:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-player:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasArtist = eval(this.getAttribute("audio-playlist:has-artist")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-artist")) || true;
    this.hasAlbum = eval(this.getAttribute("audio-playlist:has-album")) || eval(document.querySelector("audio-player").getAttribute("audio-player:has-album")) || true;
    this.playlist = eval(this.getAttribute("audio-playlist:playlist")) || [
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
    ];
  }

  render() {
    this.innerHTML = `
        <div data-audioplayer-playlist class="audio-playlist audio-playlist--${this.appearance} ${this.classNames}">
          ${
            this.initialContent !== ""
              ? `${this.initialContent}`
              : `
              ${this.playlist.map((track: any, index: number) => {
                return `
                    <audio-playlist-item
                      audio-playlist-item:style="${this.appearance}"
                      audio-playlist-item:title="${track.title}"
                      audio-playlist-item:artist="${track.artist}"
                      audio-playlist-item:album="${track.album}"
                      audio-playlist-item:url="${track.url}"
                      audio-playlist-item:cover="${track.cover}"
                    ></audio-playlist-item>
                    `;
              })}
              `
          }
            
        </div>
        `;
  }
}
customElements.define(`audio-playlist`, CpxAudioPlaylist);
