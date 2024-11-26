import React from "react";
import Card from "./Card";
import Title from "../../content/text/Title";
import Paragraph from "../../content/text/Paragraph";

const CarouselCard = ({
  title,
  paragraph,
  iconURL,
}: {
  title: string | undefined;
  paragraph: string | undefined;
  iconURL: string | undefined;
}) => {
  return (
    <Card
      width="100%"
      graphic={{
        src: iconURL,
        type: "icon",
        size: 20,
        fraction: 20,
        // maxImageSize: maxSize,
        minImageSize: "100px",
        colorInfo:
          "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))",
      }}
      format={"type2"}
    >
      <Title
        textFormat="center"
        size={6}
        padding="1.5rem 2rem 0rem 2rem"
        textWrap="balance"
      >
        {title}
      </Title>
      <Paragraph
        textFormat="center"
        padding="1rem"
        textWrap="balance"
        color="rgba(85, 80, 140)"
      >
        {paragraph}
      </Paragraph>
    </Card>
  );
};

export default CarouselCard;
