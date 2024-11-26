import React from "react";

const Icon = ({
  src,
  colorInfo,
}: {
  src: string | undefined;
  colorInfo?: string;
}) => {
  return (
    <div
      style={
        // backgroundInfo !== null
        {
          width: "100%",
          height: "100%",
          //   aspectRatio: "1 / 1",
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          background: colorInfo ?? "white",
          // backdropFilter: "blur(5px)",
          //   animation: animationHandler(animationInfo),
          //   ...styleBackground(backgroundInfo),
        }
        //   : {
        //     //   width: width,
        //     //   aspectRatio: "1 / 1",
        //       backgroundImage: `url(${src})`,
        //       backgroundSize: "100% 100%",
        //       // backdropFilter: "blur(5px)",
        //     //   animation: animationHandler(animationInfo),
        //     }
      }
    ></div>
  );
};

export default Icon;
