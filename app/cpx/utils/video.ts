/**
 * @name runVideo()
 * @version 1.0
 * @description provides an API to insert a video player element on a website by just adding HTML attributes to elements
 */

function videoAPI() {
  function initializeVideoPlayer(player: any) {
    // Container Elements for Controls and Playlist
    const controls = player.querySelector("[video-controls]");
    // Elements where the current Video Infos are rendered in
    const currentVideoTitle = player.querySelector("[video-current='title']");
    const currentVideoPoster = player.querySelector("[video-current='poster']");
    const currentVideoUrl = player.querySelector("[video-current='url']");
    const currentVideoArtist = player.querySelector("[video-current='artist']");
    // Controls
    const playPauseButton = controls.querySelector('[video-control="play-pause"]');
    const prevButton = controls.querySelector('[video-control="prev"]');
    const nextButton = controls.querySelector('[video-control="next"]');
    const volumeInput = controls.querySelector('[video-control="volume"]');
    const muteUnmuteButton = controls.querySelector('[video-control="mute-unmute"]');
    const progressBar = controls.querySelector('[video-control="progress-bar"]');
    const playlist = player.querySelector("[video-playlist]");

    const videoItems = Array.from(playlist.querySelectorAll("[video-playlist-item][video-playlist-item-url]"));
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

      const videoURL = videoItem.getAttribute("video-playlist-item-url");
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
      const videoTitle = videoItem.querySelector('[video-playlist-item="title"]');
      const videoArtist = videoItem.querySelector('[video-playlist-item="artist"]');
      const videoPoster = videoItem.querySelector('[video-playlist-item="poster"]');
      const videoUrl = videoItem.querySelector('[video-playlist-item="url"]');

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

      playPauseButton.setAttribute("video-current-state", "pause");
    }

    videoItems.forEach((videoItem: any, index: any) => {
      videoItem.addEventListener("click", () => {
        currentVideoIndex = index;
        loadVideoDetails(index);
        playPauseButton.setAttribute("video-current-state", "play");
        video.play();
      });
    });

    function loadAndPlayVideo(index: any) {
      currentVideoIndex = index;
      loadVideoDetails(index);

      video
        .play()
        .then(() => {
          playPauseButton.setAttribute("video-current-state", "play");
        })
        .catch((error: any) => {});
    }

    initializeControl('[video-control="play-pause"]', (control: any) => {
      control.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          control.setAttribute("video-current-state", "play");
        } else {
          video.pause();
          control.setAttribute("video-current-state", "pause");
        }
      });
    });

    initializeControl('[video-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex - 1 + videoItems.length) % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });

    initializeControl('[video-control="next"]', (control: any) => {
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
        muteUnmuteButton.setAttribute("video-muted", "false");
      } else {
        muteUnmuteButton.setAttribute("video-muted", "true");
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
    initializeControl('[video-control="volume"]', (control: any) => {
      control.addEventListener("click", updateVolume);
    });
    initializeControl('[video-control="mute-unmute"]', (control: any) => {
      control.addEventListener("click", toggleMuteUnmute);
    });
    initializeControl('[video-control="progress-bar"]', (control: any) => {
      control.addEventListener("click", seekVideo);
    });
    initializeControl('[video-control="progress-bar"]', (control: any) => {
      control.addEventListener("input", (event: any) => {
        const duration = video.duration;
        if (duration > 0) {
          const value = event.target.value;
          video.currentTime = (value / 100) * duration;
        }
      });
    });
    initializeControl('[video-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = (currentVideoIndex + videoItems.length) % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });
    initializeControl('[video-control="next"]', (control: any) => {
      control.addEventListener("click", () => {
        currentVideoIndex = currentVideoIndex % videoItems.length;
        loadAndPlayVideo(currentVideoIndex);
      });
    });

    // Initialize the player with the first video
    loadAndPlayVideo(currentVideoIndex);
  }

  // Initialize all video players on the page
  const videoPlayers = document.querySelectorAll("[video]");

  videoPlayers.forEach((player) => {
    initializeVideoPlayer(player);
  });
}

export { videoAPI };
