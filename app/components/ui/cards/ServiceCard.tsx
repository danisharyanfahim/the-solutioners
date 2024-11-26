"use client";
import React from "react";
import Card from "./Card";
import Title, { textFormat, textWrap } from "../../content/text/Title";
import Paragraph from "../../content/text/Paragraph";
import ButtonLink from "../../content/inputs/ButtonLink";
import { useMediaQueries } from "@/app/hooks/useMediaQueries";

interface CardProps {
  src: string | undefined;
  title: string | undefined;
  paragraph: string | undefined;
  btnUrl: string | URL;
}

const ServiceCard = ({ src, title, paragraph, btnUrl }: CardProps) => {
  const deviceSize = useMediaQueries();
  let format = "type2";
  let alignItems = "center";
  let textFormat: textFormat = "center";
  let maxSize = "150px";
  let textWrap: textWrap = "balance";
  if (deviceSize > 2) {
    format = "type1";
    alignItems = "flex-start";
    textFormat = "left";
    maxSize = "250px";
    textWrap = "wrap";
  }

  return (
    <Card
      minHeight="300px"
      width="100%"
      graphic={{
        src: src,
        type: "icon",
        size: 90,
        fraction: 35,
        maxImageSize: maxSize,
        minImageSize: "100px",
        colorInfo: `linear-gradient(-45deg, rgba(155, 100, 255), rgba(160, 0, 180) )`,
        animation: "drop 0.5s",
      }}
      format={format}
      style={{
        borderBottom: "1px solid white",
        // backgroundColor: "rgba(255 255 255 / 0.1)",
        backdropFilter: "blur(20px) brightness(130%)",
        boxShadow: "inset 0px 0px 10px 2px rgba(0 0 0 / 0.15)",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <article
        style={{
          // color: "black",
          width: "100%",
          maxWidth: "1000px",
          // backgroundColor: "blue",
          color: "white",
          padding: "0.5rem max(4vw, 1.5rem) 2rem max(4vw, 1.5rem)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: alignItems,
          animation: "fadeIn 1s",
        }}
      >
        <Title
          textFormat={textFormat}
          padding="0.5rem 0rem"
          textWrap="balance"
          size={4}
          style={{ textShadow: "0px 0px 10px rgba(15 0 45 / 0.5)" }}
        >
          {title}
        </Title>
        <Paragraph
          textFormat={textFormat}
          padding="0.5rem 0rem"
          textWrap={textWrap}
        >
          {paragraph}
        </Paragraph>
        <ButtonLink
          title={"Tell me more \u2192"}
          name="outline-button"
          url={btnUrl}
          margin="1rem 0rem 0rem"
          style={{
            padding: "0.5rem 1.5rem",
            border: "2px solid white",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg, rgba(25, 0, 55, 0.1), rgba(55, 0, 5, 0.1))",
          }}
          fontSize="clamp(1.1rem, 1vw + 0.625rem, 1.7rem)"
        />
      </article>
    </Card>
  );
};

export default ServiceCard;
