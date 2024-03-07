import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
import { Cpx } from "../../index";
import { runAudio } from "./runAudio";

/**
 * @class CpxAudioPlayer
 * @description
 * AudioPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="AudioPlayer Title" audio-player:artist="AudioPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxAudioPlayer extends CpxElement {
  appearance: string;
  classNames: string;
  title: string;
  artist: string;
  album: string;
  playlist: Array<any>;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:appearance") || "default";
    this.classNames = this.getAttribute("audio-player:class") || "";
    this.title = this.getAttribute("audio-player:title") || "AudioPlayer Title";
    this.artist = this.getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.playlist = eval(this.getAttribute("audio-player:playlist")) || [
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

  returnPlaylist() {
    return this.playlist;
  }

  connectedCallback() {
    this.render();
    runAudio();
  }

  render() {
    this.innerHTML = `
    <section class="audio-player audio-player--${this.appearance} ${this.classNames}" data-audioplayer>
    ${
      this.initialContent !== ""
        ? `${this.initialContent}`
        : `
            <div class="audio-player__column">
              <audio-current class="audio-player__current"></audio-current>
              <audio-controls class="audio-player__controls"></audio-controls>
            </div>
            <audio-playlist class="audio-player__column audio-player__playlist" class=""></audio-playlist>
        `
    }
    </section>
    `;
  }
}
customElements.define(`audio-player`, CpxAudioPlayer);
