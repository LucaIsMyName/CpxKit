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
  classNames: string;
  position: string;
  hasPlayPause: boolean | null;
  hasPrev: boolean | null;
  hasNext: boolean | null;
  hasMuteUnmute: boolean | null;
  hasVolume: boolean | null;
  hasProgress: boolean | null;

  constructor() {
    super();
    this.classNames = this.getAttribute("video-controls:class") || "";
    this.position = this.getAttribute("video-controls:position") || "bottom-inside";
    this.hasPlayPause = eval(this.getAttribute("video-controls:has-play-pause")) || true;
    this.hasPrev = eval(this.getAttribute("video-controls:has-prev")) || true;
    this.hasNext = eval(this.getAttribute("video-controls:has-next")) || true;
    this.hasMuteUnmute = eval(this.getAttribute("video-controls:has-mute-unmute")) || true;
    this.hasVolume = eval(this.getAttribute("video-controls:has-volume")) || true;
    this.hasProgress = eval(this.getAttribute("video-controls:has-progress")) || true;
  }

  render() {
    this.innerHTML = `
    <div video-controls class="
    ${
      this.position === "bottom-inside"
        ? `position:absolute bottom:0 left:0 right:0 p:4`
        : ``
    }
    ${
      this.position === "bottom-outside"
        ? `position:relative`
        : ``
    }
    ${this.classNames}">
    ${
      this.initialContent !== ""
        ? this.initialContent
        : `
        ${
          this.hasProgress === true
            ? `
              <div class="mb:2">
                <video-control video-control:class="w:full" video-control:type="progress-bar"></video-control>
              </div>
              `
            : ``
        }
        
        <section class="display:flex items:center gap:4">
          ${
            this.hasPrev === true
              ? `
              <video-control class="" video-control:type="prev">
                ${Icon.backward}
              </video-control>
                `
              : ``
          }
          ${
            this.hasPlayPause === true
              ? `
              <video-control class="" video-control:type="play-pause">
                ${Icon.play}
              </video-control>
                `
              : ``
          }
          ${
            this.hasNext === true
              ? `
              <video-control class="" video-control:type="next">
                ${Icon.forward}
              </video-control>
                `
              : ``
          }

          ${
            this.hasMuteUnmute === true
              ? `
              <video-control class="" video-control:type="mute-unmute">
                ${Icon.speakerWave}
              </video-control>
                `
              : ``
          }
          ${
            this.hasVolume === true
              ? `
              <div class="h:full display:flex items:center">
                  <video-control class="h:full display:flex items:center" video-control:type="volume"></video-control>
              </div>
                `
              : ``
          }
        </section>
        `
    }
    </div>
    `;
  }
}
customElements.define(`video-controls`, CpxVideoControls);
