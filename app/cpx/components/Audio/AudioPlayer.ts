import { CpxElement } from "../../element";
import { Id } from "../../utils/id";
import { Cpx } from "../../index";
import { runAudio } from "./runAudio";

export class CpxAudioPlayer extends CpxElement {
  appearance: string;
  title: string;
  artist: string;
  album: string;
  constructor() {
    super();
    this.appearance = this.getAttribute("audio-player:appearance") || "default";
    this.title = this.getAttribute("audio-player:title") || "AudioPlayer Title";
    this.artist = this.getAttribute("audio-player:artist") || "AudioPlayer Artist Title";
    this.album = this.getAttribute("audio-player:album") || "AudioPlayer Album Title";
  }

  connectedCallback() {
    this.render();
    runAudio();
  }

  render() {
    this.innerHTML = `
    <section class="audio-player audio-player--${this.appearance}" data-audioplayer>
        <audio-current class="audio-player__current"></audio-current>
        <audio-playlist  class="audio-player__playlist"></audio-playlist>
    </section>
        `;
  }
}
customElements.define(`audio-player`, CpxAudioPlayer);
