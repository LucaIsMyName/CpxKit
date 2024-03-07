import { CpxElement } from "../../element";
import { Icon } from "../../utils/icons";

/**
 * @class CpxVideoControls
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxVideoControls extends CpxElement {
  appearance: string;
  classNames: string;
  position: string;
  hasPlayPause: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  hasMuteUnmute: boolean;
  hasVolume: boolean;
  hasProgress: boolean;

  constructor() {
    super();
    this.appearance = this.getAttribute("video-controls:appearance") || "default";
    this.classNames = this.getAttribute("video-controls:class") || "";
    this.position = this.getAttribute("video-controls:position") || "bottom-outside";
    this.hasPlayPause = eval(this.getAttribute("video-controls:has-play-pause")) || true;
    this.hasPrev = eval(this.getAttribute("video-controls:has-prev")) || true;
    this.hasNext = eval(this.getAttribute("video-controls:has-next")) || true;
    this.hasMuteUnmute = eval(this.getAttribute("video-controls:has-mute-unmute")) || true;
    this.hasVolume = eval(this.getAttribute("video-controls:has-volume")) || true;
    this.hasProgress = eval(this.getAttribute("video-controls:has-progress")) || true;
  }

  render() {
    this.innerHTML = `
    <div data-videoplayer-controls class="video-controls video-controls--${this.appearance} video-controls--${this.position} ${this.classNames}">
    ${
      this.initialContent !== ""
        ? `${this.initialContent}`
        : `
        <div class="video-controls__progress-container">
            <video-control class="video-controls__progress-bar" video-control:type="progress-bar"></video-control>
        </div>
        <section class="video-controls__bottom">
            <video-control class="video-controls__prev" video-control:type="prev">
                ${Icon.backward}
            </video-control>
            <video-control class="video-controls__play-pause" video-control:type="play-pause">
                ${Icon.play}
            </video-control>
            <video-control class="video-controls__next" video-control:type="next">
                ${Icon.forward}
            </video-control>
            <video-control class="video-controls__mute-unmute" video-control:type="mute-unmute">
                ${Icon.speakerWave}
            </video-control>
            <div class="video-controls__volume-container">
                <video-control class="video-controls__volume" video-control:type="volume"></video-control>
            </div>
        </section>
        `
    }
    </div>
    `;
  }
}
customElements.define(`video-controls`, CpxVideoControls);
