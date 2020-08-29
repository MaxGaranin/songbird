import React, { useRef } from "react";

import "./audio-player.scss";

const AudioPlayer = (props) => {
  const audioRef = useRef(null);

  const { src, isPause, className } = props;

  if (isPause) {
    audioRef.current.pause();
  }

  return (
    <>
      <audio ref={audioRef} src={src} className={className} controls></audio>
    </>
  );
};

export default AudioPlayer;
