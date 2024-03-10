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
        <button click:storage:local:set(currentvideo,${Cpx.String.toHtml(this.videoTitle)}) class="w:full p:3 border-width:1 border-color:light-100 radius:sm mb:2 ${this.classNames}" video-playlist-item video-playlist-item-url="${this.videoUrl}">
          ${
            this.initialContent !== ""
              ? this.initialContent
              : `<section class="display:flex">
                        <div class="display:flex">
                            <img video-playlist-item="cover" src="${this.videoPoster}" alt="${this.videoTitle}" />
                            <p video-playlist-item="title">${this.videoTitle}</p>
                        </div>
                        <p class="" video-playlist-item="artist">${this.videoArtist}</p>
                   </section>
                    `
          }
        </button>
    `;
  }
}
customElements.define(`video-playlist-item`, CpxVideoPlaylistItem);
