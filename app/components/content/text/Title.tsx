import React from "react";

export type textFormat = "center" | "left" | "right" | "justify";
export type textWrap = "wrap" | "nowrap" | "balance" | "pretty" | "stable";

/* 
-Be able to select between h1-h6
*/

const fontSizes = [
  "clamp(2.2rem, 3vw + 1.25rem, 3.5rem)", //h1
  "clamp(1.7rem, 4vw + 0.25rem, 3rem)", //h2
  "clamp(1.53rem, 4vw + 0.45rem, 2.75rem)", //h3
  "clamp(1.33rem, 3vw + 0.25rem, 2.5rem)", //h4
  "clamp(1.22rem, 3vw + 0.25rem, 2.25rem)", //h5
  "clamp(1.12rem, 3vw, 2rem)", //h6
];

const Title = ({
  children,
  textFormat,
  size = 2,
  padding,
  textWrap,
  color,
  style,
}: {
  children: string | React.ReactNode;
  textFormat: textFormat;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  padding?: string;
  textWrap?: textWrap;
  color?: string;
  style?: {};
}) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements; // Dynamically select the tag based on the type prop
  return (
    <Tag
      style={{
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: textFormat,
        fontSize: fontSizes[size - 1],
        padding: padding ?? 0,
        textWrap: textWrap ?? "wrap",
        color: color ?? "inherit",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export default Title;
