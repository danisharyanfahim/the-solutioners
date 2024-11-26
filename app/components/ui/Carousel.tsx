"use client";
import { addToFrontAndEnd } from "@/app/global/functions";
import { DIRECTIONS } from "@/app/global/variables";
import { useMediaQueries } from "@/app/hooks/useMediaQueries";
import React, { useEffect, useMemo, useRef, useState } from "react";
import CarouselCard from "./cards/CarouselCard";

/*
-This currently displays the main item at the end, other variants will include having the main one on the left or the right followed by the others,also will need to add animations as well. Also this needs to responsive to the screen size as well, and making a vertical variation as well
-Also add selection for the main item for the screen, which will change the scrollPosition to the main item, as well as where it is placed
-Also add the ability to reverse the button directions as well (MThis is for when the buttons are designated next and prev rather than left and right)
-Will read touch dragging and mouse dragging once I can do it properly
-Make a smooth carousel version as well
-Make a vertical version
-Make a display indicator for which item in the carousel this is as well
-Update the code for this as well
*/

interface CarouselProps {
  itemInfo: any[];
  infinite: boolean;
  autoPlay: boolean;
  delay: number | undefined;
  direction: "forward" | "reverse" | string | undefined;
}

const Carousel: React.FC<CarouselProps> = ({
  itemInfo,
  infinite = true,
  autoPlay = false,
  delay = 1000,
  direction = DIRECTIONS.FORWARD,
}) => {
  const [device, setDevice] = useState<number | null>(null);
  const deviceSize = useMediaQueries();
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean | undefined>(
    autoPlay && delay !== undefined ? false : undefined
  );
  const [position, setPosition] = useState(
    !infinite ? 0 : Math.floor(itemInfo.length / 2)
  ); //Set to initial position
  const scrollBehavior = useRef<ScrollBehavior>("smooth");
  const dragging = useRef<boolean>(false);
  const initialX = useRef<number | null>(null);
  const initialScrollX = useRef<number | null>(null);

  const cards = useMemo(() => {
    let cards = itemInfo.map((item, index) => (
      <li
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        className="carousel-card"
        style={{
          minHeight: "400px",
          //   height: "100%",
          listStyle: "none",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          scrollSnapAlign: "start",
          cursor: "pointer",
          background:
            "linear-gradient(135deg,rgba(165 155 200 / 0.2), rgba(230 225 255 / 0.2))",
          backdropFilter: "blur(15px)",
        }}
      >
        <CarouselCard
          title={item.title}
          paragraph={item.paragraph}
          iconURL={item.url}
        />
      </li>
    ));
    if (infinite) {
      //I will just use 3 values for now
      const cardsToFront = Math.floor(cards.length / 2);
      const cardsToEnd = Math.ceil(cards.length / 2);
      cards = addToFrontAndEnd(cardsToFront, cardsToEnd, cards);
    }
    return cards;
  }, [itemInfo]);

  const setColumnWidth = () => {
    if (device !== null) {
      if (device < 3) {
        return "100%";
      } else if (device < 4) {
        return "calc((100% / 2) - 9px)";
      } else {
        return "calc((100% / 3) - 12px)";
      }
    }
  };

  const toggleScroll = (direction: string | number) => {
    if (typeof direction === "string") {
      if (direction === "right") {
        scrollCarousel(position - 1);
      } else {
        scrollCarousel(position + 1);
      }
    } else if (typeof direction === "number") {
      scrollCarousel(direction);
    }
  };

  const scrollCarousel = (newPosition: number) => {
    const firstCardWidth = cardRefs.current[0]?.offsetWidth;
    const carouselWidth = carouselRef.current?.offsetWidth;
    if (firstCardWidth === undefined || carouselWidth === undefined) return;
    const visibleCards = Math.round(carouselWidth / firstCardWidth);
    if (infinite) {
      const startPosition = Math.floor(cardRefs.current?.length / 2);
      const endPosition = cardRefs.current?.length + startPosition;
      if (newPosition < 0) {
        scrollBehavior.current = "auto";
        newPosition = cardRefs.current?.length;
      }
      if (newPosition >= endPosition) {
        scrollBehavior.current = "auto";
        newPosition = startPosition - 1;
      }
    } else {
      const startPosition = 0;
      const endPosition = cardRefs.current?.length - visibleCards;
      if (newPosition < startPosition) newPosition = startPosition;
      if (newPosition >= endPosition) newPosition = endPosition;
    }
    carouselRef.current?.scrollTo({
      left: firstCardWidth * newPosition,
      behavior: scrollBehavior.current,
    });
    setPosition(newPosition);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleTouch = (e: React.TouchEvent<HTMLUListElement>) => {
    if (carouselRef.current?.scrollLeft === undefined) return;
    dragging.current = true;
    initialX.current = e.changedTouches[0].pageX;
    initialScrollX.current = carouselRef.current?.scrollLeft;
  };

  const handleDrag = (e: React.TouchEvent<HTMLUListElement>) => {
    if (dragging.current && typeof initialX.current === "number") {
      const firstCardWidth = cardRefs.current[0]?.offsetWidth;
      const carouselWidth = carouselRef.current?.offsetWidth;
      if (
        firstCardWidth === undefined ||
        carouselWidth === undefined ||
        initialScrollX.current === null
      )
        return;
      const visibleCards = Math.round(carouselWidth / firstCardWidth);
      const distance =
        initialScrollX.current - (e.changedTouches[0].pageX - initialX.current);
      let newPosition = Math.round(distance / firstCardWidth);
      scrollBehavior.current = "smooth";
      if (infinite) {
        const startPosition = Math.floor(cardRefs.current?.length / 2);
        const endPosition = cardRefs.current?.length + startPosition;
        if (newPosition < 0) {
          scrollBehavior.current = "auto";
          newPosition = cardRefs.current?.length;
        }
        if (newPosition >= endPosition) {
          scrollBehavior.current = "auto";
          newPosition = startPosition - 1;
        }
      } else {
        const startPosition = 0;
        const endPosition = cardRefs.current?.length - visibleCards;
        if (newPosition < startPosition) newPosition = startPosition;
        if (newPosition >= endPosition) newPosition = endPosition;
      }
      carouselRef.current?.scrollTo({
        left: newPosition * firstCardWidth,
        behavior: scrollBehavior.current,
      });
      setPosition(newPosition);
    }
  };

  useEffect(() => {
    if (infinite) {
      const firstCardWidth = cardRefs.current[0]?.offsetWidth;
      if (firstCardWidth === undefined) return;
      carouselRef.current?.scrollTo({
        left: firstCardWidth * position,
      });
    }
  }, []); //Set's the position to the middle if it is infinite

  useEffect(() => {
    setDevice(deviceSize);
  }, [deviceSize]);

  useEffect(() => {
    if (infinite) {
      if (scrollBehavior.current === "auto" && !dragging.current) {
        scrollBehavior.current = "smooth";
        if (position === Math.floor(cardRefs.current?.length / 2) - 1) {
          toggleScroll(DIRECTIONS.LEFT);
        } else if (position === cardRefs.current?.length) {
          toggleScroll(DIRECTIONS.RIGHT);
        }
      }
    }
  }, [position]); //Sets the scroll behavior back to smooth once the carousel loops

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const releaseTouch = () => {
      // dragging.current = false;
      // initialX.current = null;
      // initialScrollX.current = null;
      if (autoPlay && isPaused) {
        setIsPaused(false);
      }
    };

    window.addEventListener("touchend", releaseTouch);

    const interval = setInterval(() => {
      if (direction === DIRECTIONS.FORWARD) {
        toggleScroll(DIRECTIONS.LEFT);
      } else {
        toggleScroll(DIRECTIONS.RIGHT);
      }
    }, delay);

    return () => {
      clearInterval(interval);
      window.removeEventListener("touchend", releaseTouch);
    };
  }, [position, delay, direction, autoPlay, isPaused]); //If autoplay is true then this plays the loop

  return (
    <div
      className="carousel-container"
      style={{
        position: "relative",
        // minHeight: "100vh",
        padding: "2rem 1rem",
        // backgroundImage: "linear-gradient(to left top, #031a9a, #8b53ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="wrapper"
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <button
          className="arrow-left gradient-button"
          style={{
            position: "absolute",
            height: "40px",
            width: "40px",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            fontSize: "1.25rem",
            cursor: "pointer",
            zIndex: 4,
            background:
              "linear-gradient(-135deg, rgba(220, 0, 250, 0.7), rgba(220, 0, 0, 0.7), rgba(230, 150, 0, 0.7))",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 2px 6px 0px rgba(0 0 0 / 0.2)",
            color: "rgba(240, 240, 250, 0.9)",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
          }}
          onClick={() => toggleScroll(DIRECTIONS.LEFT)}
        >
          {"❮"}
        </button>
        {device !== null && (
          <ul
            //   onTouchStart={(e: React.TouchEvent<HTMLUListElement>) => {
            //     // handleTouch(e)
            //     if (autoPlay && !isPaused) {
            //       setIsPaused(true);
            //     }
            //   }}
            //   // onTouchMove={(e: React.TouchEvent<HTMLUListElement>) => handleDrag(e)}
            //   onMouseOver={() => {
            //     if (autoPlay && !isPaused) {
            //       setIsPaused(true);
            //     }
            //     //If it is hovered over, then it will pause
            //   }}
            //   onMouseLeave={() => {
            //     if (autoPlay && isPaused) {
            //       setIsPaused(false);
            //     }
            //   }} //Will resume when mouse leaves
            ref={carouselRef}
            className="carousel"
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: setColumnWidth(),
              gap: "16px",
              overflowX: "scroll",
              scrollbarWidth: "none",
              scrollSnapType: "x mandatory",
              msOverflowStyle: "none",
              touchAction: "none",
              padding: "1rem 0rem",
              // cursor: dragging.current ? 'grab' : 'default'
            }} /* Add it for chrome as well */
          >
            {cards}
          </ul>
        )}
        <button
          className="arrow-right gradient-button"
          style={{
            position: "absolute",
            height: "40px",
            width: "40px",
            top: "50%",
            right: "-20px",
            transform: "translateY(-50%)",
            fontSize: "1.25rem",
            cursor: "pointer",
            zIndex: 4,
            background:
              "linear-gradient(135deg, rgba(220, 0, 250, 0.7), rgba(220, 0, 0, 0.7), rgba(230, 150, 0, 0.7))",
            borderRadius: "50%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 2px 6px 0px rgba(0 0 0 / 0.2)",
            color: "rgba(240, 240, 250, 0.9)",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
          }}
          onClick={() => toggleScroll(DIRECTIONS.RIGHT)}
        >
          ❯
        </button>
      </div>
      {/* {autoPlay && (
        <button
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
        </button>
      )} */}
    </div>
  );
};

export default Carousel;
