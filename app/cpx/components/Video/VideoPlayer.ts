import { CpxElement } from "../../element";
import { runVideo } from "./runVideo";

/**
 * @class CpxVideoPlayer
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxVideoPlayer extends CpxElement {
  appearance: string;
  classNames: string;
  poster: string;
  title: string;
  artist: string;
  getVideo: any;
  playlist: any;
  hasTitle: boolean;
  hasArtist: boolean;
  controlsPosition: string;

  constructor() {
    super();
    this.appearance = this.getAttribute("video-player:appearance") || "default";
    this.classNames = this.getAttribute("video-player:class") || "";
    this.poster = this.getAttribute(`video-player:poster`) || `https://placehold.co/1600x900`;
    this.title = this.getAttribute(`video-player:title`) || `videoPlayer Title`;
    this.artist = this.getAttribute(`video-player:artist`) || `videoPlayer Artist Title`;
    this.controlsPosition = this.getAttribute(`video-player:controls-position`) || `bottom-inside`;
    this.hasTitle = eval(this.getAttribute(`video-player:has-title`)) || true;
    this.hasArtist = eval(this.getAttribute(`video-player:has-artist`)) || false;
  }

  connectedCallback() {
    this.render();
    runVideo();
  }

  render() {
    this.innerHTML = `
    <div class="video-player ${this.classNames}" data-videoplayer>
    ${
      this.initialContent !== ""
        ? `${this.initialContent}`
        : `
        <div class="video-player__column">
            <section class="video-player__video-container">
                <img 
                    class="video-player__poster"
                    data-videoplayer-current="cover" src="${this.poster}">
                <video 
                    class="video-player__video"
                    data-videoplayer-current>
                </video>
                <video-controls
                    video-controls:appearance="${this.appearance}"
                    video-controls:position="${this.controlsPosition}"></video-controls>
            </section>
            <div class="video-player__meta my-4">
                ${this.hasTitle === true ? `<h2 class="video-player__title mb-2" data-videoplayer-current="title">${this.title}</h2>` : ``}
                ${this.hasArtist === true ? `<p class="video-player__artist" data-videoplayer-current="artist">${this.artist}</p>` : ``}
            </div>
        </div>
        <video-playlist
            class="video-player__column"
            video-playlist:appearance="${this.appearance}"></video-playlist>
       `
    }
    </div>
    `;
  }
}
customElements.define(`video-player`, CpxVideoPlayer);
