import Link from "next/link";
import React from "react";
import Container from "../../containers/Container";

const ButtonLink = ({
  title,
  name,
  url,
  margin,
  style,
  clickFunc,
  fontSize,
}: // imageInfo: { size, src, colorInfo },
{
  title: string;
  name?: string;
  url: string | URL;
  margin?: string;
  style: {};
  clickFunc?: () => void;
  fontSize?: string;
  // imageInfo: { size?: number; src?: string; colorInfo?: string };
}) => {
  return (
    <Link
      className={`${title}-button ${name}`}
      href={url}
      style={{ margin: margin ?? "0rem", ...style }}
      onClick={clickFunc}
    >
      <Container
        format={{
          xAlignment: "center",
          yAlignment: "center",
          direction: "row",
        }}
      >
        {/* <div
          className="icon"
          style={{
            //Will add max and minWidth and height afterwards
            position: "relative",
            background: colorInfo ?? "white",
            // width: size + "%",
            // maxWidth: maxImageSize,
            // minWidth: minImageSize,
            height: size + "px",
            aspectRatio: "1 / 1",
            // backgroundImage: `url(${src})`,
            // backgroundSize: "contain",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            maskImage: `url(${src})`,
            maskSize: "contain",
            maskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url(${src})`,
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
          }}
        ></div> */}
        <p
          style={{
            fontSize: fontSize ?? "1.5rem",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </Container>
    </Link>
  );
};

export default ButtonLink;
