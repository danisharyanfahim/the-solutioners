import Link from "next/link";
import React from "react";
import Card from "../../ui/cards/Card";
import Paragraph from "../../content/text/Paragraph";
import Container from "../../containers/Container";
import { formatStringToId } from "@/app/global/functions";

const NavButton = ({
  icon,
  text,
  url,
  color,
  background,
}: {
  icon?: string | undefined;
  text?: string;
  url: string | URL;
  color: string;
  background: string;
}) => {
  return (
    <Link href={url}>
      <div
        className="card"
        style={{
          display: "inline-flex",
          overflow: "hidden", // Hide any overflowed content
          position: "relative",
          minHeight: "4rem",
          flexDirection: "row", // Ensure card's children (image and content) are placed side-by-side
          alignItems: "center",
          background: background,
          height: "calc(100% + 3px)",
          paddingLeft: "1rem",
          paddingRight: "clamp(1rem, -4rem + 6.667vw, 2rem)",
          gap: "0.5rem",
        }}
      >
        <figure
          className="graphic-container"
          style={{
            display: "flex",
            position: "relative",
            flex: `0 0 ${text ? 30 : 100}%`, // Image takes up `fraction` of the width
            height: "50px", // The height is based on the content
            width: "100%",
            borderRadius: "8px", // Optional: Border radius for rounded image corners
            animation: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="icon"
            style={{
              position: "relative",
              background: color,
              width: `clamp("0rem", ${text ? 100 : 50}%, "100rem")`,
              aspectRatio: "1 / 1",
              maskImage: `url(${icon})`,
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
              WebkitMaskImage: `url(${icon})`,
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              height: "30px",
            }}
          ></div>
        </figure>
        <section
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Align text content in the center
            width: `${100 - (text ? 30 : 100)}%`, // Content area takes up the remaining width
            position: "relative",
          }}
        >
          {text && (
            <Container
              height="100%"
              format={{
                xAlignment: "center",
                yAlignment: "center",
                direction: "row",
              }}
            >
              <Paragraph
                textFormat="left"
                color={color}
                id={formatStringToId(text)}
              >
                {text}
              </Paragraph>
            </Container>
          )}
        </section>
      </div>
    </Link>
  );
};

export default NavButton;
