import React from "react";

type textFormat = "center" | "left" | "right" | "justify";

const Paragraph = ({
  children,
  textFormat,
  padding,
  textWrap,
  color,
  style,
  id,
}: {
  children: string | React.ReactNode;
  textFormat: textFormat;
  padding?: string;
  textWrap?: "wrap" | "nowrap" | "balance" | "pretty" | "stable";
  color?: string;
  style?: {};
  id?: string;
}) => {
  return (
    <p
      style={{
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: textFormat,
        fontSize: "clamp(1rem, 1vw + 0.625rem, 1.7rem)",
        padding: padding ?? 0,
        textWrap: textWrap ?? "wrap",
        color: color ?? "inherit",
        ...style,
      }}
      id={id}
    >
      {children}
    </p>
  );
};

export default Paragraph;
