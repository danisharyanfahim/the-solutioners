import { centerItems } from "@/app/global/styleFunctions";
import React from "react";
import Title from "../../content/text/Title";
import Paragraph from "../../content/text/Paragraph";

const Slide = ({
  ref,
  content: { title, paragraph, imageURL },
  index,
  showIndex = false,
}: {
  ref: React.LegacyRef<HTMLLIElement> | undefined;
  index?: number;
  showIndex?: boolean;
  content: {
    title: string;
    paragraph: string;
    imageURL: string | undefined;
  };
}) => {
  return (
    <li
      ref={ref}
      className="slide"
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        background:
          "linear-gradient(75deg, rgba(235, 230, 255), rgba(245, 240, 255))",
        display: "inline-flex",
        justifyContent: "space-between",
      }}
    >
      <section
        className="slide-content"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          minWidth: "clamp(9.5rem, 50%, 100rem)",
          zIndex: "1",
          float: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title
          textFormat="left"
          size={6}
          padding="0rem 0rem 0rem clamp(0.75rem, 10%, 10rem)"
          textWrap="balance"
        >
          {title}
        </Title>
        <Paragraph
          textFormat="left"
          padding="1rem 1rem 1rem clamp(0.75rem, 10%, 10rem)"
          textWrap="balance"
          color="rgba(85, 80, 140)"
        >
          {paragraph}
        </Paragraph>
      </section>
      <img
        src={imageURL}
        style={{
          position: "relative",
          float: "right",
          objectFit: "contain",
          height: "100%",
        }}
      />

      {showIndex && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            color: "white",
            fontSize: "5rem",
            ...centerItems,
          }}
        >
          <h2>{index}</h2>
        </div>
      )}
    </li>
  );
};

export default Slide;
