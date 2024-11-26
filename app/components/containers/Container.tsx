import React from "react";

/* 
-Clamp
-max and min width and height
-padding
*/

const Container = ({
  name,
  children,
  backgroundColor,
  height,
  width,
  flex,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  overflowX,
  overflowY,
  format: { xAlignment, yAlignment, direction },
  padding,
  margin,
  wrap,
  type = "div", // Default type as 'div'
  style,
}: {
  name?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  flex?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  overflowX?: "visible" | "hidden" | "scroll" | "auto";
  overflowY?: "visible" | "hidden" | "scroll" | "auto";
  format: { xAlignment: string; yAlignment: string; direction: string };
  wrap?: "wrap" | "nowrap";
  type?: "div" | "section" | "figure" | "li"; // Optional, but defaults to 'div'
  style?: {};
}) => {
  const sharedProps = {
    display: "flex",
    height: height ?? "auto", // Default height to 'auto'
    width: width ?? "100%", // Default width to '100%'
    backgroundColor: backgroundColor ?? "transparent",
    padding: padding ?? "0", // Default padding to '0'
    margin: margin ?? "0", // Default padding to '0'
    flex: flex ?? "0 1 auto",
    minWidth: minWidth ?? "0", // Default to '0' for minWidth
    maxWidth: maxWidth ?? "none",
    minHeight: minHeight ?? "0", // Default to '0' for minHeight
    maxHeight: maxHeight ?? "none",
    overflowX: overflowX ?? "visible",
    overflowY: overflowY ?? "visible",
    flexWrap: wrap ?? "nowrap",
    ...style,
  };

  // Select the tag dynamically based on `type`
  const Tag = type; // No need for type assertion since `type` is already properly typed

  const isColumn = direction === "column";

  // Define the dynamic styles based on direction
  const fullStyle: React.CSSProperties = {
    position: "relative",
    flexDirection: isColumn ? "column" : "row",
    justifyContent: isColumn ? yAlignment : xAlignment,
    alignItems: isColumn ? xAlignment : yAlignment,
    ...sharedProps,
  };

  return (
    <Tag
      className={`${name ? name + "-container" : "container"}`}
      style={fullStyle}
    >
      {children}
    </Tag>
  );
};

export default Container;
