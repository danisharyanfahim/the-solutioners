import Link from "next/link";
import React from "react";
import Card from "../../ui/cards/Card";
import Paragraph from "../../content/text/Paragraph";
import Container from "../../containers/Container";

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
      <Card
        minHeight="4rem"
        width="9rem"
        padding="0rem 0rem 0rem 0.5rem"
        graphic={{
          src: icon,
          type: "icon",
          size: text ? 100 : 50,
          fraction: text ? 30 : 100,
          colorInfo: color,
          justify: "right",
        }}
        format="type1"
        style={{
          minWidth: text ? "6rem" : "7rem",
          background: background,
          height: "calc(100% + 3px)",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        {text && (
          <Container
            height="100%"
            format={{
              xAlignment: "flex-start",
              yAlignment: "center",
              direction: "row",
            }}
          >
            <Paragraph textFormat="left" color={color}>
              {text}
            </Paragraph>
          </Container>
        )}
      </Card>
    </Link>
  );
};

export default NavButton;
