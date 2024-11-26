import { DIRECTIONS } from "@/app/global/variables";
import React from "react";

interface JointMenuProps {
  name: string;
  direction: string;
  children: React.ReactNode | React.ReactNode[];
  xAlignment?: "center" | "left" | "right";
  style?: {};
}

const JointMenu: React.FC<JointMenuProps> = ({
  name,
  direction,
  children,
  xAlignment,
  style,
}) => {
  return (
    <ul
      className={`${name} menu`}
      style={
        direction === DIRECTIONS.VERTICAL
          ? {
              width: "100%",
              ...style,
            }
          : xAlignment === "center"
          ? {
              display: "inline-flex",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              position: "absolute",
              ...style,
            }
          : {
              display: "inline-flex",
              float: xAlignment,
              height: "100%",
              position: "relative",
              ...style,
            }
      }
    >
      {children}
    </ul>
  );
};

export default JointMenu;
