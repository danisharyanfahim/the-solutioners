import React from "react";
import { centerItems } from "@/app/global/styleFunctions";
import { RiArrowDropDownLine } from "react-icons/ri";
import Paragraph from "@/app/components/content/text/Paragraph";
import Container from "@/app/components/containers/Container";
import Title from "@/app/components/content/text/Title";

const AccordionRow = ({
  onClick,
  isOpen,
  index,
  title,
  children,
}: {
  onClick: (number: number) => void;
  isOpen: boolean;
  index: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        color: "inherit",
        flexDirection: "column",
        ...centerItems,
      }}
    >
      <button
        onClick={() => onClick(index)}
        style={{
          width: "100%",
          position: "relative",
          color: "rgba(225, 220, 255)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid white",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "row",
          }}
        >
          <Title
            textFormat="center"
            size={4}
            padding="clamp(0.25rem, 3vw, 2rem) 0rem"
          >
            {title}
          </Title>
        </Container>
        <RiArrowDropDownLine
          className={`dropdown-arrow ${isOpen ? "active" : ""}`}
          style={{
            fontSize: "clamp(3rem, 2vw + 1.25rem, 4rem)",
            marginRight: "1rem",
          }}
        />
      </button>
      {isOpen && (
        <div
          className="accordion-item-content"
          style={{
            width: "100%",
            position: "relative",
            ...centerItems,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionRow;
