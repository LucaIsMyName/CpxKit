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
  title: string;
  artist: string;
  album: string;
  playlist: Array<any>;

  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:appearance") || "default";
    this.title = this.getAttribute("audio-player:title") || "AudioPlayer Title";
    this.artist = this.getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || "AudioPlayer Album Title";
    this.playlist = eval(this.getAttribute("audio-player:playlist")) || [{}];
  }

  connectedCallback() {
    this.render();
    runAudio();
  }

  render() {
    this.innerHTML = `
    <section class="audio-player audio-player--${this.appearance}" data-audioplayer>
    ${
      this.initialContent !== ""
        ? `${this.initialContent}`
        : `
            <div>
              <audio-current class="audio-player__current"></audio-current>
              <audio-controls class="audio-player__controls"></audio-controls>
            </div>
            <audio-playlist audio-playlist:list="${this.playlist}"  class="audio-player__playlist"></audio-playlist>
        `
    }
    </section>
    `;
  }
}
customElements.define(`audio-player`, CpxAudioPlayer);
