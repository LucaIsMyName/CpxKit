import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
import { Cpx } from "../../index";
import { audioAPI } from "../../utils/audio";
/**
 * @class CpxAudioPlayer
 * @description
 * AudioPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="AudioPlayer Title" audio-player:artist="AudioPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxAudioPlayer extends CpxElement {
  appearance: any;
  classNames: any;
  title: any;
  artist: any;
  album: any;
  playlist: Array<any>;
  hasPlaylist: any;
  hasControls: any;
  hasTitle: any;
  hasArtist: any;
  hasCover: any;
  hasCurrent: any;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:appearance") || "default";
    this.classNames = this.getAttribute("audio-player:class") || "";
    this.title = this.getAttribute("audio-player:title") || "AudioPlayer Title";
    this.artist = this.getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.hasPlaylist = this.getAttribute("audio-player:has-playlist") || true;
    this.hasControls = this.getAttribute("audio-player:has-controls") || true;
    this.hasTitle = this.getAttribute("audio-player:has-title") || true;
    this.hasArtist = this.getAttribute("audio-player:has-artist") || true;
    this.hasCover = this.getAttribute("audio-player:has-cover") || true;
    this.hasCurrent = this.getAttribute("audio-player:has-current") || true;
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

  returnPlaylist() {
    return this.playlist;
  }

  connectedCallback() {
    this.render();
    audioAPI();
  }

  render() {
    let evalHasPlaylist = eval(this.hasPlaylist);
    let evalHasControls = eval(this.hasControls);
    let evalHasTitle = eval(this.hasTitle);
    let evalHasArtist = eval(this.hasArtist);
    let evalHasCover = eval(this.hasCover);
    let evalHasCurrent = eval(this.hasCurrent);

    this.innerHTML = `
    <section class="audio-player audio-player--${this.appearance} ${this.classNames}" audio>
    ${
      this.initialContent !== ""
        ? `${this.initialContent}`
        : `
        ${
          evalHasCurrent === true || evalHasControls === true
            ? `
            <div class="audio-player__column">
              ${evalHasCurrent === true ? `<audio-current audio-current:has-title="${evalHasTitle}" audio-current:has-artist="${evalHasArtist}" audio-current:has-cover="${evalHasCover}" class="audio-player__current"></audio-current>` : ``}
              ${evalHasControls === true ? `<audio-controls class="audio-player__controls"></audio-controls>` : ``}
            </div>`
            : ``
        }
        ${evalHasPlaylist === true ? `<audio-playlist class="audio-player__column audio-player__playlist" class=""></audio-playlist>` : ``}
        `
    }
    </section>
    `;
  }
}
customElements.define(`audio-player`, CpxAudioPlayer);
