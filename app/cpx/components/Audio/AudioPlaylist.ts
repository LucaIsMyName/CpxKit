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
  hasArtist: any;
  hasAlbum: any;
  playlist: Array<Object>;
  constructor() {
    super();
    this.classNames = this.getAttribute("audio-player:class") || "";
    this.title = this.getAttribute("audio-player:title") || document.querySelector("audio-player").getAttribute("audio-player:title") || "AudioPlayer ITitle";
    this.artist = this.getAttribute("audio-player:artist") || document.querySelector("audio-player").getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || document.querySelector("audio-player").getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasArtist = this.getAttribute("audio-playlist:has-artist") || document.querySelector("audio-player").getAttribute("audio-player:has-artist") || true;
    this.hasAlbum = this.getAttribute("audio-playlist:has-album") || document.querySelector("audio-player").getAttribute("audio-player:has-album") || true;
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
    ];
  }

  render() {
    let evalArtist = eval(this.hasArtist);
    let evalAlbum = eval(this.hasAlbum);
  
    this.innerHTML = `
        <div audio-playlist class="flex:full mb:2>* shrink:1 display:flex direction:col justify-content:center ${this.classNames}">
          ${
            this.initialContent !== ""
              ? `${this.initialContent}`
              : `
              ${this.playlist.map((track: any, index: number) => {
                return `
                    <audio-playlist-item
                      audio-playlist-item:title="${track.title}"
                      audio-playlist-item:artist="${track.artist}"
                      audio-playlist-item:album="${track.album}"
                      audio-playlist-item:url="${track.url}"
                      audio-playlist-item:cover="${track.cover}"
                      audio-playlist-item:has-artist="${evalArtist}"
                      audio-playlist-item:has-album="${evalAlbum}"
                      ></audio-playlist-item>
                    `;
              }).join("")}
              `
          }
            
        </div>
        `;
  }
}
customElements.define(`audio-playlist`, CpxAudioPlaylist);
