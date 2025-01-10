import React from "react";
import Card from "./Card";
import Title from "../../content/text/Title";
import Paragraph from "../../content/text/Paragraph";
import Point from "../../content/text/Point";

const CarouselCard = ({
  title,
  paragraph,
  iconURL,
  points,
}: {
  title?: string;
  paragraph?: string;
  iconURL?: string;
  points?: string[] | undefined;
}) => {
  return (
    <Card
      width="100%"
      graphic={
        iconURL
          ? {
              src: iconURL,
              type: "icon",
              size: 20,
              fraction: 20,
              // maxImageSize: maxSize,
              minImageSize: "100px",
              colorInfo: iconURL
                ? "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))"
                : "transparent",
            }
          : undefined
      }
      format={"type2"}
    >
      {title && (
        <Title
          textFormat="center"
          size={6}
          padding="1.5rem 2rem 0rem 2rem"
          textWrap="balance"
        >
          {title}
        </Title>
      )}
      {paragraph && (
        <Paragraph
          textFormat="center"
          padding="1rem"
          textWrap="balance"
          color="rgba(85, 80, 140)"
        >
          {paragraph}
        </Paragraph>
      )}
      {points !== undefined && (
        <ul
          style={{
            paddingInlineStart: "1rem",
            padding: "0.5rem max(4vw, 1.5rem)",
          }}
        >
          {points.map((point, index) => {
            return (
              <li key={index}>
                <Point
                  textFormat="left"
                  padding="0.5rem 0rem"
                  color="rgba(85, 80, 140)"
                >
                  {point}
                </Point>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default CarouselCard;
