import { CpxElement } from "../../element";
import { Cpx } from "../../index";

/**
 * @class CpxVideoPlaylist
 * @description
 * VideoPlayer Component
 * @example
 * <audio-player audio-player:appearance="default" audio-player:title="VideoPlayer Title" audio-player:artist="VideoPlayer Artist Title" audio-player:album="AudioPlayer Album Title">
 * </audio-player>
 */
export class CpxVideoPlaylist extends CpxElement {
  appearance: string;
  classNames: string;
  getVideo: Function;
  playlist: any;
  baseUrl: any;
  apiKey: any;
  poster: any;

  constructor() {
    super();
    this.appearance = this.getAttribute("video-playlist:appearance") || "default";
    this.classNames = this.getAttribute("video-playlist:class") || "";
    this.baseUrl = this.getAttribute("video-playlist:url") || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:url") : "https://api.coverr.co/videos/");
    this.apiKey = this.getAttribute("video-playlist:api-key") || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:api-key") : "45e2e6d3f93979c3e38af50d42150752");
    this.poster = this.getAttribute(`video-playlist:poster`) || (this.closest("video-player") ? this.closest("video-player").getAttribute("video-player:poster") : "https://placehold.co/100");

    this.getVideo = (identifier: string = "1"): string => {
      return `${this.baseUrl}/${identifier}?api_key=${this.apiKey}`;
    };
    this.playlist = [
      {
        title: "Video 1",
        id: "1",
        artist: "Artist 1",
        cover: "https://placehold.co/16x9",
        url: `${this.getVideo("curvy-mountain-road-zcxbgh2l")}`,
      },
      {
        title: "Video 2",
        id: "2",
        artist: "Artist 2",
        cover: "https://placehold.co/16x9",
        url: `${this.getVideo("curvy-mountain-road-zcxbgh2l")}`,
      },
    ];
    console.log(this.playlist);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div data-videoplayer-playlist class="video-playlist ${this.classNames}">
            ${
              this.initialContent !== ""
                ? `${this.initialContent}`
                : `
                ${this.playlist.map((video: any, index: number) => {
                  return `
                        <video-playlist-item
                            class="video-playlist__item"
                            video-playlist-item:appearance="${this.appearance}"
                            video-playlist-item:title="${video.title}"
                            video-playlist-item:artist="${video.artist}"
                            video-playlist-item:url="${video.url}"></video-playlist-item>
                        `;
                })}
                `
            }      
        </div>
    `;
  }
}
customElements.define(`video-playlist`, CpxVideoPlaylist);
