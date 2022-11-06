import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnEnded = () => {
    if (videoElement.current.ended) {
      togglePlay()
    }
  }

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  var [watchedTime, setWatchedTime] = useState(0)

  useEffect(() => {
    if (playerState.isPlaying) {
      const interval = setInterval(() => {
        setWatchedTime(watchedTime => watchedTime + 1)
      }, 1000);
      return () => clearInterval(interval)
    }
    return undefined 
  }, [playerState.isPlaying, watchedTime])

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  const toggleFullscreen = () => {
    if (videoElement.current) {
            videoElement.current.requestFullscreen();
    }
   }

   useEffect(() => {
    playerState.isPlaying
      ? console.log(watchedTime)
      : console.log(watchedTime)
  }, [playerState.isPlaying, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnEnded,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
  };
};

export default useVideoPlayer;