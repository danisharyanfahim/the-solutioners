"use client";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../ui/VideoPlayer";
import { useMediaQueries } from "@/app/hooks/useMediaQueries";
import Container from "./Container";

const VideoContainer = ({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) => {
  const deviceSize = useMediaQueries();
  const [device, setDevice] = useState<number | null>(null);

  useEffect(() => {
    setDevice(deviceSize);
  }, [deviceSize]);

  return (
    <Container
      name="video-section"
      format={{
        xAlignment: "center",
        yAlignment: "center",
        direction: device !== null && device < 4 ? "column" : "row",
      }}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.7)), url(static/images/background-images/video-background.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        boxShadow:
          "0px 1px 5px 2px rgba(0 0 0 /0.15), inset 0px 0px 0px 3px rgba(145 145 155 / 0.4)",
      }}
    >
      <VideoPlayer
        autoPlay={false}
        vignette={true}
        fadeLimit={1}
        src={src}
        height={device !== null && device < 4 ? "66dvh" : "100dvh"}
        width={device !== null && device < 4 ? "100%" : "66%"}
      />
      <Container
        type="section"
        padding="max(2vw, 1.5rem)"
        width={device !== null && device < 4 ? "100%" : "34%"}
        minHeight={device !== null && device < 4 ? "34dvh" : "100dvh"}
        format={{
          xAlignment: "center",
          yAlignment: "center",
          direction: "column",
        }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default VideoContainer;
