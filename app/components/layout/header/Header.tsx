"use client";
import { centerItems } from "@/app/global/styleFunctions";
import { useMediaQueries } from "@/app/hooks/useMediaQueries";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import React, { useEffect, useState } from "react";

const scrollMultipliers = [
  -0.5, -0.2, -0.7, -0.3, -0.6, -0.4, -0.8, -0.33, -0.25,
];

const backgroundImageURL =
  "static/images/background-images/header-background.jpg";

const Header = ({
  logo = "static/images/logos/page-logos/home-logo.png",
  icon = "static/icons/navbar-icons/main-icon.png",
}: {
  logo: string;
  icon: string;
}) => {
  const pos1 = useScrollPosition(scrollMultipliers[0]);
  const pos2 = useScrollPosition(scrollMultipliers[1]);
  const pos3 = useScrollPosition(scrollMultipliers[2]);
  const pos4 = useScrollPosition(scrollMultipliers[3]);
  const pos5 = useScrollPosition(scrollMultipliers[4]);
  const pos6 = useScrollPosition(scrollMultipliers[5]);
  const pos7 = useScrollPosition(scrollMultipliers[6]);
  const pos8 = useScrollPosition(scrollMultipliers[7]);
  const pos9 = useScrollPosition(scrollMultipliers[8]);
  const [device, setDevice] = useState<number | null>(null);
  const deviceSize = useMediaQueries();

  const generateBackgroundIcons = (iconURL: string | URL | undefined) => {
    const positions = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];
    return positions.map((position, i) => {
      const size = 150;
      return (
        <div
          className="background-icon"
          key={i}
          style={{
            height: (size * -1) / scrollMultipliers[i] + "px",
            width: (size * -1) / scrollMultipliers[i] + "px",
            backgroundImage: `linear-gradient(rgba(235, 230, 255, ${-scrollMultipliers[
              i
            ]}), transparent)`,
            maskImage: `url(${iconURL})`,
            maskSize: "100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url(${iconURL})`,
            WebkitMaskSize: "100%",
            WebkitMaskRepeat: "no-repeat",
            position: "absolute",
            animation: `float ${
              -scrollMultipliers[i] + 1
            }s ease-in-out alternate infinite, fadeIn ${
              2 - scrollMultipliers[i] * 2
            }s forwards ease-in-out`,
            top:
              100 +
              ((1 + i) % 3) * 160 +
              ((1 + i) % 2) * 70 -
              ((1 + i) % 4) * 70 +
              ((1 + i) % 5) * 25 +
              position +
              "px",
            left: 20 + ((1 + i) % 8) * 300 - (8 / (i + 1)) * 60 + "px",
            // zIndex: Math.floor((1 + scrollMultipliers[i]) * -10),
            backdropFilter: "blur(4px)",
          }}
        ></div>
      );
      // }
    });
  };

  const setMainIcon = (iconURL: string | URL | undefined) => {
    let mainIcon = (
      <div
        className="header-logo-icon"
        style={{
          height: "100%",
          aspectRatio: "1 / 1",
          background:
            "linear-gradient(-135deg, rgba(240, 235, 255), rgba(205, 200, 245))",
          maskImage: `url(${iconURL})`,
          maskSize: "100%",
          maskRepeat: "no-repeat",
          WebkitMaskImage: `url(${iconURL})`,
          WebkitMaskSize: "100%",
          WebkitMaskRepeat: "no-repeat",
          opacity: "100%",
          animation: "drop 1.65s",
        }}
      ></div>
    );
    return mainIcon;
  };

  useEffect(() => {
    setDevice(deviceSize);
  }, [deviceSize]);

  return (
    <header
      style={{
        height: "calc(100dvh - 4rem)",
        width: "100%",
        background: `linear-gradient(180deg, rgba(0, 0, 100, 0.1), rgba(110, 0, 100) 60%, rgba(200, 0, 0) 90%, rgba(220, 100, 0) 100%), url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundColor: "black",
        overflow: "hidden",
        position: "relative",
        zIndex: "-1",
      }}
    >
      {generateBackgroundIcons(icon)}
      <div className="halftone"></div>
      {device !== null && (
        <>
          <div
            className="hotline-number"
            style={
              device < 4
                ? {
                    position: "absolute",
                    width: "100%",
                    padding: "1rem",
                    fontSize: "clamp(1.75rem, 2vh + 0.75rem, 2rem)",
                    color: "rgba(245, 240, 255)",
                    animation: "drop 1.25s",
                    ...centerItems,
                  }
                : {
                    position: "absolute",
                    padding: "1rem",
                    fontSize: "2rem",
                    color: "rgba(245, 240, 255)",
                    animation: "drop 1.25s",
                  }
            }
          >
            Need Help? Call 1-647-524-3894
          </div>
          <div
            className="logo-container"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              position: "absolute",
            }}
          >
            <div
              className="icon container"
              style={{
                maxWidth: device > 2 ? "250px" : "300px",
                width: device > 2 ? "17%" : "75%",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {setMainIcon(icon)}
            </div>
            {device > 2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "1100px",
                  width: "75%",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  className="header-logo"
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "90%",
                    aspectRatio: " 4.5 / 1",
                    animation: "drop 1.9s",
                  }}
                />
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
