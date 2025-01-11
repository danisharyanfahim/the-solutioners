"use client";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

/* 
// -Responsive
// -Autoplay
// -Play/Pause
// -Video stops when another tab is selected
// -Vignette
-Subtitles/Caption Overlay
-Title Overlay
-Repeat
// -Fading Volume depending on scroll position
// -Fade in and out depending on the scrollPosition
*/

interface VideoPlayerProps {
  autoPlay: boolean;
  vignette: boolean;
  src: string;
  fadeLimit: number;
  height?: string;
  width?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  autoPlay = false,
  vignette = true,
  fadeLimit = 1,
  src,
  height,
  width,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const vidRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition(1);

  const handlePlaying = (playing: boolean) => {
    if (playing) {
      vidRef.current!.play();
    } else {
      vidRef.current!.pause();
    }
    setIsPlaying(playing);
  };

  const handleAway = () => {
    if (document.visibilityState === "hidden") {
      // vidRef.current!.load(); //Will restart video if away
      vidRef.current!.pause(); //Will pause video if away
      setIsPlaying(false);
    }
  };

  const setOpacity = () => {
    let distance =
      Math.abs(
        containerRef.current!.offsetTop + window.innerHeight - scrollPosition
      ) / window.innerHeight;
    if (distance > fadeLimit) {
      distance = fadeLimit;
    } else {
      vidRef.current!.volume = 1 - distance * (1 / fadeLimit);
    }
    return 1 - distance * (1 / fadeLimit);
  }; //This method can be used for all other things in order to make things fade in and out depending on the scroll position

  useEffect(() => {
    if (autoPlay) {
      vidRef.current!.play();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("visibilitychange", handleAway);
    return () => window.removeEventListener("visibilitychange", handleAway);
  });

  return (
    <div
      ref={containerRef}
      className="video-container"
      style={{
        height: height ?? "100%",
        width: width ?? "100%",
        position: "relative",
        opacity: containerRef.current === null ? "0%" : setOpacity(),
      }}
    >
      <div
        className="button-container"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 2,
        }}
      >
        <button
          style={{
            height: "100%",
            width: "100%",
            padding: "0.5rem 1.5rem",
            border: "none",
            fontSize: "10rem",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: "rgba(255 255 255 / 0.8)",
          }}
          onClick={() => handlePlaying(!isPlaying)}
        >
          {isPlaying ? "" : <FaPlay />}
        </button>
      </div>
      {vignette && (
        <div
          className="vignette-overlay"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.25) 40%, rgba(0,0,0,1))",
          }}
        ></div>
      )}
      <video
        ref={vidRef}
        src={src}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
