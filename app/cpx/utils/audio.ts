/**
 * @name runAudio()
 * @version 1.0
 * @author luca mack
 * @description provides an API to insert an audioplayer element on a website by just adding HTML attributes to elements
 * @link https://github.com/LucaIsMyName/audioplayer.js
 */

function audioAPI() {
  function initializeAudioPlayer(player: any) {
    // Container Elements for Controls and Playlist
    const controls = player.querySelector("[audio-controls]");
    const playlist = player.querySelector("[audio-playlist]");
    // Elements where the current Track Infos are renderd in
    const currentTrackImage = player.querySelector('[audio-current="cover"]');
    const currentTrackTitle = player.querySelector('[audio-current="title"]');
    const currentArtistTitle = player.querySelector('[audio-current="artist"]');
    // Controls
    const playPauseButton = controls.querySelector('[audio-control="play-pause"]');
    const prevButton = controls.querySelector('[audio-control="prev"]');
    const nextButton = controls.querySelector('[audio-control="next"]');
    const repeatPlaylistButton = controls.querySelector('[audio-control="repeat-playlist"]');
    const repeatTrackButton = controls.querySelector('[audio-control="repeat-track"]');
    const volumeInput = controls.querySelector('[audio-control="volume"]');
    const muteUnmuteButton = controls.querySelector('[audio-control="mute-unmute"]');
    const progressBar = controls.querySelector('[audio-control="progress-bar"]');

    const trackItems = Array.from(playlist.querySelectorAll("[audio-track][audio-track-url]"));
    let currentTrackIndex = 0;
    let audio = new Audio();

    function initializeControl(selector: any, action: any) {
      const control = controls.querySelector(selector);
      if (control) {
        action(control);
      }
    }
    /**
     * @name loadTrackDetails
     * @param {number} index
     */
    function loadTrackDetails(index: number) {
      const trackItem = trackItems[index];
      if (!trackItem) {
        console.error("Track item is undefined. Index:", index);
        return;
      }

      const trackURL = trackItem.getAttribute("audio-track-url");
      if (!trackURL) {
        console.error("Track URL is missing for index:", index);
        return;
      }

      audio.src = trackURL;

      const trackImage = trackItem.querySelector('[audio-track="cover"]');
      const trackTitle = trackItem.querySelector('[audio-track="title"]');
      const artistTitle = trackItem.querySelector('[audio-track="artist"]');

      if (currentTrackImage && trackImage) {
        currentTrackImage.src = trackImage.src;
      } else {
        console.log("Track image not found for index:", index);
      }

      if (trackTitle) {
        currentTrackTitle.textContent = trackTitle.textContent;
      } else {
        console.log("Track title not found for index:", index);
      }

      if (artistTitle) {
        currentArtistTitle.textContent = artistTitle.textContent;
      } else {
        console.log("Artist title not found for index:", index);
      }

      playPauseButton.setAttribute("audio-current-state", "pause");
    }

    trackItems.forEach((trackItem: any, index: number) => {
      trackItem.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrackDetails(index);
        playPauseButton.setAttribute("audio-current-state", "play");
        audio.play();
      });
    });

    function loadAndPlayTrack(index: number) {
      currentTrackIndex = index;
      loadTrackDetails(index);

      audio
        .play()
        .then(() => {
          playPauseButton.setAttribute("audio-current-state", "play");
        })
        .catch((error) => {});
    }

    initializeControl('[audio-control="play-pause"]', (control: any) => {
      control.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          control.setAttribute("audio-current-state", "play");
        } else {
          audio.pause();
          control.setAttribute("audio-current-state", "pause");
        }
      });
    });

    initializeControl('[audio-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + trackItems.length) % trackItems.length;
        loadAndPlayTrack(currentTrackIndex);
      });
    });

    initializeControl('[audio-control="next"]', (control: any) => {
      control.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
        loadAndPlayTrack(currentTrackIndex);
      });
    });

    // Function to toggle repeat playlist
    function toggleRepeatPlaylist() {
      audio.loop = false; // Disable track looping
      repeatPlaylistButton.classList.toggle("active");
      // Logic to repeat the playlist
      audio.onended = () => {
        if (repeatPlaylistButton.classList.contains("active")) {
          currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
          loadAndPlayTrack(currentTrackIndex);
        }
      };
    }

    // Function to toggle repeat track
    function toggleRepeatTrack() {
      repeatTrackButton.setAttribute("audio-repeat-track", "true");
      audio.loop = repeatTrackButton.getAttribute("audio-repeat-track").contains("active");
    }

    // Function to update volume
    function updateVolume() {
      audio.volume = volumeInput.value / 100;
    }

    // Function to toggle mute/unmute
    function toggleMuteUnmute() {
      audio.muted = !audio.muted;
      if (!audio.muted) {
        muteUnmuteButton.setAttribute("audio-muted", "false");
      } else {
        muteUnmuteButton.setAttribute("audio-muted", "true");
      }
    }

    progressBar.value = 0;

    function updateProgressBar() {
      const duration = audio.duration;
      if (duration > 0) {
        progressBar.value = (audio.currentTime / duration) * 100;
      }
    }

    // Attach timeupdate event listener to audio element
    audio.addEventListener("timeupdate", updateProgressBar);

    function seekTrack(event: any) {
      const progressBarRect = progressBar.getBoundingClientRect();
      const seekTime = ((event.clientX - progressBarRect.left) / progressBarRect.width) * audio.duration;
      audio.currentTime = seekTime;
    }

    if (trackItems.length > 0) {
      loadTrackDetails(currentTrackIndex);
    }

    // Check if the mathcing attribute is available in the DOM and Add event listeners
    initializeControl('[audio-control="repeat-playlist"]', (control: any) => {
      control.addEventListener("click", toggleRepeatPlaylist);
    });
    initializeControl('[audio-control="repeat-track"]', (control: any) => {
      control.addEventListener("click", toggleRepeatTrack);
    });
    initializeControl('[audio-control="volume"]', (control: any) => {
      control.addEventListener("click", updateVolume);
    });
    initializeControl('[audio-control="mute-unmute"]', (control: any) => {
      control.addEventListener("click", toggleMuteUnmute);
    });
    initializeControl('[audio-control="progress-bar"]', (control: any) => {
      control.addEventListener("click", seekTrack);
    });
    initializeControl('[audio-control="progress-bar"]', (control: any) => {
      control.addEventListener("input", (event) => {
        const duration = audio.duration;
        if (duration > 0) {
          const value = event.target.value;
          audio.currentTime = (value / 100) * duration;
        }
      });
    });
    initializeControl('[audio-control="prev"]', (control: any) => {
      control.addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + trackItems.length) % trackItems.length;
        loadAndPlayTrack(currentTrackIndex);
      });
    });
    initializeControl('[audio-control="next"]', (control: any) => {
      control.addEventListener("click", () => {
        currentTrackIndex = currentTrackIndex % trackItems.length;
        loadAndPlayTrack(currentTrackIndex);
      });
    });

    // Initialize the player with the first track
    loadAndPlayTrack(currentTrackIndex);
  }

  // Initialize all audio players on the page
  const audioPlayers = document.querySelectorAll("[audio]");

  audioPlayers.forEach((player) => {
    initializeAudioPlayer(player);
  });
}

export { audioAPI };
