import React from "react";

/* 
- Add a card
- Make the image responsive
- Image size is determined based on text dimensions
- Use Icon component and Image components once this is done
*/

const Card = ({
  margin,
  minHeight,
  maxHeight,
  width,
  padding,
  graphic: {
    type,
    src,
    fraction,
    size,
    maxImageSize,
    minImageSize,
    colorInfo,
    animation,
  },
  children,
  format,
  style,
}: {
  margin?: string;
  minHeight?: string;
  maxHeight?: string;
  width: string;
  padding?: string;
  graphic: {
    type: string;
    src: string | undefined;
    fraction: number;
    size: number;
    maxImageSize?: string;
    minImageSize?: string;
    colorInfo?: string;
    animation?: string;
  };
  children: React.ReactNode;
  format: string;
  style?: {};
}) => {
  return (
    <div
      className="card"
      style={{
        display: "inline-flex",
        // borderRadius: "10px",
        overflow: "hidden", // Hide any overflowed content
        position: "relative",
        width: width, // Use the provided width prop for the card's width
        minHeight: minHeight ?? 0,
        maxHeight: maxHeight ?? "none",
        flexDirection: format === "type1" ? "row" : "column", // Ensure card's children (image and content) are placed side-by-side
        margin: margin ?? "0rem",
        alignItems: "center",
        ...style,
        // background: "navy", // Background color for the content section
      }}
    >
      <figure
        className="graphic-container"
        style={{
          display: "flex",
          position: "relative",
          flex: `0 0 ${format === "type1" ? fraction : "100%"}%`, // Image takes up `fraction` of the width
          height: "auto", // The height is based on the content
          width: "100%",
          // backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px", // Optional: Border radius for rounded image corners
          animation: animation ?? "none",
        }}
      >
        {src && type === "image" ? (
          <img
            src={src}
            alt="Card graphic"
            style={{
              width: "100%", // Make the image responsive
              height: "100%", // Maintain the aspect ratio
              objectFit: "contain", // Ensure it covers the area
              // borderRadius: "8px", // Optional: Border radius for rounded image corners
              position: "absolute",
            }}
          />
        ) : (
          <div
            className="icon"
            style={{
              //Will add max and minWidth and height afterwards
              position: "relative",
              background: colorInfo ?? "white",
              // width: size + "%",
              // maxWidth: maxImageSize,
              // minWidth: minImageSize,
              width: `clamp(${minImageSize ?? "0rem"}, ${size}%, ${
                maxImageSize ?? "100rem"
              })`,
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
          ></div>
        )}
      </figure>
      <section
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Align text content in the center
          width: format === "type1" ? `${100 - fraction}%` : "100%", // Content area takes up the remaining width
          padding: padding ?? "0rem",
          position: "relative",
          // color: "white", // Assuming the text should be white on navy background
        }}
      >
        {children}
      </section>
    </div>
  );
};

export default Card;
