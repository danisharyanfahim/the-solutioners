import React from "react";

type textFormat = "center" | "left" | "right" | "justify";

const Point = ({
  children,
  textFormat,
  padding,
  textWrap,
  color,
}: {
  children: string | React.ReactNode;
  textFormat: textFormat;
  padding?: string;
  textWrap?: "wrap" | "nowrap" | "balance" | "pretty" | "stable";
  color?: string;
}) => {
  return (
    <p
      style={{
        textAlign: textFormat,
        fontSize: "clamp(1rem, 1vw + 0.625rem, 1.7rem)",
        padding: padding ?? 0,
        textWrap: textWrap ?? "wrap",
        color: color ?? "inherit",
      }}
    >
      {children}
    </p>
  );
};

export default Point;
