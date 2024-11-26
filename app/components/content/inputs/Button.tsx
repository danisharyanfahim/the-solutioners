import React from "react";
import { centerItems } from "@/app/global/styleFunctions";

const Button = ({ text }: { text: React.ReactNode }) => {
  return (
    <button
      style={{
        borderRadius: "50rem",
        minWidth: "7rem",
        maxWidth: "10rem",
        width: "25%",
        aspectRatio: "10 / 1",
        backgroundColor: "rgba(150, 100, 100, 0.2)",
        ...centerItems,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
