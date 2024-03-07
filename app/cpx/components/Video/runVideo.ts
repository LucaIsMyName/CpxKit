/**
 * @name runVideo()
 * @version 1.0
 * @description provides an API to insert a video player element on a website by just adding HTML attributes to elements
 */

export function runVideo() {
  function initializeVideoPlayer(player: any) {
    // Container Elements for Controls and Playlist
    const controls = player.querySelector("[data-videoplayer-controls]");
    // Elements where the current Video Infos are rendered in
    const currentVideoTitle = player.querySelector("[data-videoplayer-current='title']");
    const currentVideoPoster = player.querySelector("[data-videoplayer-current='poster']");
    const currentVideoUrl = player.querySelector("[data-videoplayer-current='url']");
    const currentVideoArtist = player.querySelector("[data-videoplayer-current='artist']");
    // Controls
    const playPauseButton = controls.querySelector('[data-videoplayer-control="play-pause"]');
    const prevButton = controls.querySelector('[data-videoplayer-control="prev"]');
    const nextButton = controls.querySelector('[data-videoplayer-control="next"]');
    const volumeInput = controls.querySelector('[data-videoplayer-control="volume"]');
    const muteUnmuteButton = controls.querySelector('[data-videoplayer-control="mute-unmute"]');
    const progressBar = controls.querySelector('[data-videoplayer-control="progress-bar"]');
    const playlist = player.querySelector("[data-videoplayer-playlist]");

    const videoItems = Array.from(playlist.querySelectorAll("[data-videoplayer-video][data-videoplayer-video-url]"));
    let currentVideoIndex = 0;
    let video = player.querySelector("video");

    function initializeControl(selector: any, action: any) {
      const control = controls.querySelector(selector);
      if (control) {
        action(control);
      }
    }

    function loadVideoDetails(index: any) {
      const videoItem = videoItems[index];
      if (!videoItem) {
        console.error("Video item is undefined. Index:", index);
        return;
      }

      const videoURL = videoItem.getAttribute("data-videoplayer-video-url");
      if (!videoURL) {
        console.error("Video URL is missing for index:", index);
        return;
      }

      video.src = videoURL;

    /**
     * @name loadVideoDetails
     * @param {number} index
     * @description
     * Load the video details from the playlist
     */
      const videoTitle = videoItem.querySelector('[data-videoplayer-video="title"]');
      const videoArtist = videoItem.querySelector('[data-videoplayer-video="artist"]');
      const videoPoster = videoItem.querySelector('[data-videoplayer-video="poster"]');
      const videoUrl = videoItem.querySelector('[data-videoplayer-video="url"]');


      if (videoTitle) {
        currentVideoTitle.textContent = videoTitle.textContent;
      } else {
        console.log("Video title not found for index:", index);
      }

      if (videoArtist) {
        currentVideoArtist.textContent = videoArtist.textContent;
      } else {
        console.log("Video artist not found for index:", index);
      }

      if (videoPoster) {
        currentVideoPoster.textContent = videoPoster.textContent;
      } else {
        console.log("Video poster not found for index:", index);
      }

      if (videoUrl) {
        currentVideoUrl.src = videoUrl.textContent;
      } else {
        console.log("Video poster not found for index:", index);
      }

      playPauseButton.setAttribute("data-videoplayer-current-state", "pause");
    }

    videoItems.forEach((videoItem: any, index: any) => {
      videoItem.addEventListener("click", () => {
        currentVideoIndex = index;
        loadVideoDetails(index);
        playPauseButton.setAttribute("data-videoplayer-current-state", "play");
        video.play();
      });
    });

    function loadAndPlayVideo(index: any) {
      currentVideoIndex = index;
      loadVideoDetails(index);

      video
        .play()
        .then(() => {
          playPauseButton.setAttribute("data-videoplayer-current-state", "play");
        })
        .catch((error: any) => {});
    }

    initializeControl('[data-videoplayer-control="play-pause"]', (control: any) => {
      control.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          control.setAttribute("data-videoplayer-current-state", "play");
        } else {
          video.pause();
          control.setAttribute("data-videoplayer-current-state", "pause");
        }
      });
    });

    initializeControl('[data-videoplayer-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex - 1 + videoItems.length) % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });

    initializeControl('[data-videoplayer-control="next"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });

    // Function to update volume
    function updateVolume() {
      video.volume = volumeInput.value / 100;
    }

    // Function to toggle mute/unmute
    function toggleMuteUnmute() {
      video.muted = !video.muted;
      if (!video.muted) {
        muteUnmuteButton.setAttribute("data-videoplayer-muted", "false");
      } else {
        muteUnmuteButton.setAttribute("data-videoplayer-muted", "true");
      }
    }

    progressBar.value = 0;

    function updateProgressBar() {
      const duration = video.duration;
      if (duration > 0) {
        progressBar.value = (video.currentTime / duration) * 100;
      }
    }

    // Attach timeupdate event listener to video element
    video.addEventListener("timeupdate", updateProgressBar);

    function seekVideo(event: any) {
      const progressBarRect = progressBar.getBoundingClientRect();
      const seekTime = ((event.clientX - progressBarRect.left) / progressBarRect.width) * video.duration;
      video.currentTime = seekTime;
    }

    // Add event listeners
    initializeControl('[data-videoplayer-control="volume"]', (control: any) => {
      control.addEventListener("click", updateVolume);
    });
    initializeControl('[data-videoplayer-control="mute-unmute"]', (control: any) => {
      control.addEventListener("click", toggleMuteUnmute);
    });
    initializeControl('[data-videoplayer-control="progress-bar"]', (control: any) => {
      control.addEventListener("click", seekVideo);
    });
    initializeControl('[data-videoplayer-control="progress-bar"]', (control: any) => {
      control.addEventListener("input", (event: any) => {
        const duration = video.duration;
        if (duration > 0) {
          const value = event.target.value;
          video.currentTime = (value / 100) * duration;
        }
      });
    });
    initializeControl('[data-videoplayer-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex + videoItems.length) % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });
    initializeControl('[data-videoplayer-control="next"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = currentVideoIndex % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });

    // Initialize the player with the first video
    loadAndPlayVideo(currentVideoIndex);
  }

  // Initialize all video players on the page
  const videoPlayers = document.querySelectorAll("[data-videoplayer]");

  videoPlayers.forEach((player) => {
    initializeVideoPlayer(player);
  });
}
