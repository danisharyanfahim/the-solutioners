"use client";
import { centerItems } from "@/app/global/styleFunctions";
import { DIRECTIONS, testImages } from "@/app/global/variables";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Slide from "./cards/Slide";
import Paragraph from "../content/text/Paragraph";

interface SlideShowProps {
  height: string;
  slideInfo: any[];
  autoPlay?: boolean;
  infinite?: boolean;
  delay?: number;
  playDirection?: "forward" | "reverse";
  leftRightButtons?: boolean;
  positionIndicator?: boolean;
  positionButtons?: boolean;
}

/* 
// -infinite/wrapping
// -left/right buttons
// -autoplay + button
// -reverse
// -position indicators
// -position buttons
-smooth sliding transition effect 
-appearing and disappearing slide animations such as fading
-mouse over pause/autoPause
*/

/* 
-For the smooth transition effect, load up either the next slide or current slide depending on the play direction, or whatever next slide is selected,
then, use useEffect to create a sweep effect where it slow reveals the next slide from left to right
-for this create a property called transition type, if it is undefined it just immediately goes to the next slide, if it is fading it fades to the next slide,
and finally there is sliding, which reveals the next slide from left to  
*/

/* This just needs animations now, also the button styles can be changed along with the indicator style and position, another variation of the indicator is to have boxes on the bottom showing the slides along the bottom of the slideshow*/
const SlideShow: React.FC<SlideShowProps> = ({
  slideInfo = testImages,
  infinite = true,
  autoPlay = false,
  delay,
  height,
  leftRightButtons = true,
  playDirection = DIRECTIONS.FORWARD,
  positionIndicator = true,
  positionButtons = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const lastSlide = useRef<number>(0);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState<boolean | undefined>(
    autoPlay && delay !== undefined ? false : undefined
  );

  const slides = useMemo(() => {
    let slides = slideInfo.map((slide, index) => {
      const { title, paragraph, imageURL } = slide;
      return (
        <Slide
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          content={{ title: title, paragraph: paragraph, imageURL: imageURL }}
        />
      );
    });
    return slides;
  }, [slideInfo]);

  const indexButtons = useMemo(() => {
    return slides.map((_, index) => (
      <li
        key={index}
        onClick={() => toggleSlide(index)}
        style={{
          display: "inline-block",
          backgroundColor:
            currentSlide === index
              ? "rgba(245 240 255)"
              : "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          width: "clamp(10px, 1vw, 25px)",
          height: "clamp(10px, 1vw, 25px)",
          cursor: "pointer",
          margin: "0.5rem",
          color: "black",
          backdropFilter: "20px",
          WebkitBackdropFilter: "20px",
        }}
      >
        {/* <p style={{ ...centerItems }}>{index + 1}</p> */}
      </li>
    ));
  }, [slides, currentSlide]);

  const clamp = (index: number): number => {
    if (infinite) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index > slides.length - 1) {
        index = 0;
      }
    } else {
      if (index < 0) {
        index = 0;
      } else if (index > slides.length - 1) {
        index = slides.length - 1;
      }
    }
    return index;
  };

  const toggleSlide = (index: number) => {
    index = clamp(index);
    lastSlide.current = currentSlide;
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  console.log(lastSlide.current);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay && !isPaused) {
        if (playDirection === DIRECTIONS.FORWARD) {
          toggleSlide(currentSlide + 1);
        } else {
          toggleSlide(currentSlide - 1);
        }
      }
    }, delay);
    return () => clearInterval(interval);
  }, [currentSlide, autoPlay, isPaused, delay]);

  return (
    <section
      className="slide-show-container"
      style={{
        width: "100%",
        height: height,
        position: "relative",
        // backgroundImage: "linear-gradient(to top right, royalblue, purple)",
        animation: "drop 0.5s",
        ...centerItems,
      }}
    >
      <div
        className="controls-container"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        {leftRightButtons && (
          <div
            className="left-right-button-container"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "inline-flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              className="prev-button"
              style={{
                height: "clamp(40px, 7.5vw, 5rem)",
                width: "clamp(40px, 7.5vw, 5rem)",
                borderRadius: "100px",
                zIndex: 5,
                backgroundColor: "rgba(255 255 255 / 0.23)",
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
                position: "relative",
                marginLeft: "clamp(-2.5rem, -5vw, -1.2rem)",
                boxShadow: "0px 0px 7px 2px rgba(40, 35, 70, 0.05)",
                color: "inherit",
                ...centerItems,
              }}
              onClick={() => toggleSlide(currentSlide - 1)}
            >
              <Paragraph textFormat="center">❮</Paragraph>
            </button>
            <button
              className="next-button"
              style={{
                height: "clamp(40px, 7.5vw, 5rem)",
                width: "clamp(40px, 7.5vw, 5rem)",
                borderRadius: "100px",
                zIndex: 5,
                backgroundColor: "rgba(255 255 255 / 0.23)",
                WebkitBackdropFilter: "blur(20px)",
                backdropFilter: "blur(20px)",
                position: "relative",
                marginRight: "clamp(-2.5rem, -5vw, -1.2rem)",
                boxShadow: "0px 0px 7px 2px rgba(40, 35, 70, 0.05)",
                color: "inherit",
                ...centerItems,
              }}
              onClick={() => toggleSlide(currentSlide + 1)}
            >
              <Paragraph textFormat="center">❯</Paragraph>
            </button>
          </div>
        )}
        <div
          className="position-controls-container"
          style={{
            position: "absolute",
            zIndex: 3,
            bottom: "1rem",
            width: "100%",
            ...centerItems,
          }}
        >
          {positionIndicator && (
            <div
              className="position-indicator"
              style={{
                position: "absolute",
                display: "inline-flex",
                right: "1rem",
                color: "white",
              }}
            >
              <Paragraph textFormat="center">
                {currentSlide + 1}/{slides.length}
              </Paragraph>
            </div>
          )}
          {positionButtons && (
            <ul className="index-buttons items">{indexButtons}</ul>
          )}
        </div>
        {autoPlay && (
          <button
            className="gradient-button"
            onClick={togglePause}
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              padding: "0.25rem 1.5rem",
              background: isPaused
                ? "linear-gradient(135deg, rgba(200 0 0), rgba(230 150 0))"
                : "linear-gradient(135deg, rgba(45 40 200), rgba(135 120 235))",
              boxShadow: "0px 0px 3px 0px rgba(40, 35, 70, 0.05)",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              color: "rgba(245, 240, 255)",
              zIndex: 5,
            }}
          >
            <Paragraph textFormat="center">
              {isPaused ? "Resume" : "Pause"}
            </Paragraph>
          </button>
        )}
      </div>
      <div
        className="slide-container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0px 0px 10px 2px rgba(40, 35, 70, 0.1)",
        }}
      >
        <ul
          className="slides items"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {slides.map((slide, index) => {
            if (index === currentSlide) {
              return (
                <div
                  key={index}
                  className="current-slide"
                  style={{
                    position: "absolute",
                    animation: "fadeIn 1.2s",
                    height: "100%",
                    width: "100%",
                    zIndex: "2",
                  }}
                >
                  {slide}
                </div>
              );
            } else if (index === lastSlide.current) {
              return (
                <div
                  key={index}
                  className="last-slide"
                  style={{
                    position: "absolute",
                    animation: "fadeOut 1.2s",
                    height: "100%",
                    width: "100%",
                    zIndex: "1",
                  }}
                >
                  {slide}
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default SlideShow;
