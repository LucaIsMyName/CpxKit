import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * @class CpxVideoPlaylistItem
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxVideoPlaylistItem extends CpxElement {
  appearance: string;
  classNames: string;
  getVideo: Function;
  playlist: any;
  videoPoster: any;
  videoUrl: any;
  videoTitle: any;
  videoArtist: any;
  apiKey: any;
  videoId: any;

  constructor() {
    super();
    this.appearance = this.getAttribute("video-playlist-item:appearance") || "default";
    this.classNames = this.getAttribute("video-playlist-item:class") || "";
    this.videoPoster = this.getAttribute("video-playlist-item:poster") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:poster") : "https://placehold.co/100");
    this.videoUrl = this.getAttribute("video-playlist-item:url") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:url") : "https://api.coverr.co/videos/");
    this.apiKey = this.getAttribute("video-playlist-item:api-key") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:api-key") : "45e2e6d3f93979c3e38af50d42150752");
    this.videoTitle = this.getAttribute("video-playlist-item:title") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:title") : "Video Title");
    this.videoArtist = this.getAttribute("video-playlist-item:artist") || (this.closest("video-playlist") ? this.closest("video-playlist").getAttribute("video-playlist:artist") : "Artist");
    this.videoId = this.getAttribute("video-playlist-item:id");
  }

  render() {
    this.innerHTML = `
        <button click:storage:local:set(currentvideo,${Cpx.String.toHtml(this.videoTitle)}) class="video-playlist-item video-playlist-item--${this.appearance} ${this.classNames}" data-videoplayer-video data-videoplayer-video-url="${this.videoUrl}">
            ${
              this.initialContent !== ""
                ? `${this.initialContent}`
                : `
                    <section class="video-playlist-item__row">
                        <div class="video-playlist-item__left">
                            <img data-videoplayer-video="cover" src="${this.videoPoster}" alt="${this.videoTitle}" />
                            <p data-videoplayer-video="title">${this.videoTitle}</p>
                        </div>
                        <p class="video-playlist-item__right" data-videoplayer-video="artist">${this.videoArtist}</p>
                    </section>
                    `
            }
        </button>
    `;
  }
}
customElements.define(`video-playlist-item`, CpxVideoPlaylistItem);
