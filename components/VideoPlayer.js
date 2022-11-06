import React, { useRef } from "react";
import useVideoPlayer from "./useVideoPlayer";

const VideoPlayer = () => {

  const video = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnEnded,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
  } = useVideoPlayer(videoElement);
  return (
    
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onEnded={handleOnEnded}
          controlsList="nodownload"
          onContextMenu={(e)=> e.preventDefault()}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play">▶️</i>
              ) : (
                <i className="bx bx-pause">⏸</i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="bx bxs-volume-full">🔊</i>
            ) : (
              <i className="bx bxs-volume-mute">🔇</i>
            )}
          </button>
          <button className="full-screen" onClick={toggleFullscreen}>
              <i>📺</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;