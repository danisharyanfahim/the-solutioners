//This will have a scroll speed which decides how fast it goes
/* 
Combine my infinite carousel component with parts of the new slider and carousel component to make the ticker/infinite carousel component
*/
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DIRECTIONS } from "@/app/global/variables";
import { addToFrontAndEnd } from "@/app/global/functions";
import { centerItems } from "@/app/global/styleFunctions";

interface TickerProps {
  height: string;
  itemInfo: any[];
  speed: number;
  direction: "forward" | "reverse" | string | undefined;
  infinite: boolean;
  autoPlay: boolean;
  leftRightButtons: boolean | undefined;
  mask: boolean | undefined;
  autoPause: boolean | undefined;
  //   positionButtons: boolean | undefined;
}

/* 
// -infinite
// -autoplay
// -reverse
// -speed
// -smoothness
// -left/right button functionality
// -autoPause on hover
// -left and right with infinite
// -mask
-vertical version
*/

// import testImage from "../../../public/static/images/Cloud_Security_Background.jpg";
const testImage = "public/static/images/Cloud_Security_Background.jpg";

const images = [testImage];

const Ticker: React.FC<TickerProps> = ({
  height = "500px",
  itemInfo = images,
  speed = 25,
  direction = DIRECTIONS.FORWARD,
  infinite = true,
  autoPlay = true,
  leftRightButtons = true,
  autoPause = true,
  mask = true,
}) => {
  const itemsBefore = useMemo<number>(
    () => (infinite ? Math.floor(itemInfo.length / 2) : 0),
    [itemInfo?.length]
  );
  const itemsAfter = useMemo<number>(
    () => (infinite ? Math.ceil(itemInfo.length / 2) : 0),
    [itemInfo?.length]
  );
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const tickerRef = useRef<HTMLUListElement | null>(null);
  const buttonDirection = useRef<string | null>(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean | undefined>(!autoPlay);
  const [isAutoPaused, setIsAutoPaused] = useState<boolean | undefined>(
    isPaused
  );

  const items = () => {
    let items = itemInfo.map((item, index) => {
      return (
        <li
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          //   key={index}
          className="slide"
          style={{
            height: "100%",
            flexBasis: "100%",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 2,
              color: "white",
              fontSize: "5rem",
              ...centerItems,
            }}
          >
            <h2>{index + 1}</h2>
          </div> */}
          <figure
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <img
              src={item}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </figure>
        </li>
      );
    });

    if (infinite) {
      items = addToFrontAndEnd(itemsBefore, itemsAfter, items);
    }
    return items;
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const clamp = (newPosition: number): number => {
    const tickerWidth = tickerRef.current!.offsetWidth;
    const tickerScrollWidth = tickerRef.current!.scrollWidth;
    if (infinite) {
      if (newPosition > -tickerWidth * itemsBefore) {
        newPosition = -tickerScrollWidth / 2 - tickerWidth * itemsBefore;
      } else if (
        newPosition <
        -tickerScrollWidth / 2 - tickerWidth * itemsBefore
      ) {
        newPosition = -tickerWidth * itemsBefore;
      }
    } else {
      if (newPosition > 0) {
        newPosition = 0;
      } else if (newPosition < -tickerScrollWidth + tickerWidth) {
        newPosition = -tickerScrollWidth + tickerWidth;
      }
    }
    return newPosition;
  };

  const tick = (direction: string) => {
    setOffsetX((prev) => {
      let newPosition =
        direction === DIRECTIONS.FORWARD ? prev - speed : prev + speed;
      newPosition = clamp(newPosition);
      return newPosition;
    });
  };

  const handleMouseDown = (direction: string) => {
    buttonDirection.current = direction;
    setMouseDown(true);
    if (autoPlay && isAutoPaused) {
      //Change this to autopPause afterwards
      setIsAutoPaused((prev) => !prev);
    }
  };

  useEffect(() => {
    if (infinite) {
      const tickerWidth = tickerRef.current!.offsetWidth;
      setOffsetX(-tickerWidth * itemsBefore);
    }
  }, []);

  useEffect(() => {
    const handleMouseRelease = () => {
      buttonDirection.current = null;
      setMouseDown(false);
      if (autoPlay && isAutoPaused) {
        setIsAutoPaused((prev) => !prev);
      }
    };
    const interval = setInterval(() => {
      if (autoPlay && !mouseDown && !isPaused && !isAutoPaused) {
        tick(direction);
      } else if (mouseDown && buttonDirection.current !== null) {
        tick(buttonDirection.current);
      }
    }, 1000 / 60);

    window.addEventListener("mouseup", handleMouseRelease);

    return () => {
      window.removeEventListener("mouseup", handleMouseRelease);
      clearInterval(interval);
    };
  }, [mouseDown, autoPlay, isPaused, isAutoPaused, speed, direction]);

  return (
    <section
      className="ticker-container"
      style={{
        width: "100%",
        position: "relative",
        // backgroundImage: "linear-gradient(to top right, royalblue, purple)",
        overflow: "hidden",
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
          <>
            <button
              className="prev-button"
              onMouseDown={() => handleMouseDown(DIRECTIONS.FORWARD)}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
                zIndex: 3,
                left: "1rem",
                top: "calc(50% - 25px)",
              }}
            >
              ❮
            </button>
            <button
              onMouseDown={() => handleMouseDown(DIRECTIONS.REVERSE)}
              className="next-button"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
                zIndex: 3,
                right: "1rem",
                top: "calc(50% - 25px)",
              }}
            >
              ❯
            </button>
          </>
        )}
        {/* <button
          onClick={togglePause}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "0.5rem 1.5rem",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
            color: "black",
            zIndex: 4,
          }}
        >
          {isPaused ? "Resume" : "Pause"}
        </button> */}
      </div>
      <div
        className="items-container"
        style={{
          width: "100%",
          height: height,
          maskImage: mask
            ? `linear-gradient(to right, transparent, black 20%, black 80%,  transparent)`
            : "none",
          WebkitMaskImage: mask
            ? "linear-gradient(to right, transparent, black 20%, black 80%,  transparent)"
            : "none",
        }}
      >
        <ul
          onMouseOver={() => {
            if (autoPlay && !isAutoPaused && autoPause) {
              setIsAutoPaused(true);
            } //If it is hovered over, then it will pause
          }}
          onMouseLeave={() => {
            if (autoPlay && isAutoPaused && autoPause) {
              setIsAutoPaused(false);
            }
          }}
          ref={tickerRef}
          className="items"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            touchAction: "none",
            transform: `translateX(${offsetX}px)`,
          }}
        >
          {items()}
        </ul>
      </div>
    </section>
  );
};

export default Ticker;
