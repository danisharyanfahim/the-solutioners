import React from "react";

const Page = ({
  children,
  title,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  //Tge purpose of this is so that every page will have it's own separate header
  return (
    <main
      className={title}
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {children}
    </main>
  );
};

export default Page;
