import React from "react";
import NavMenu from "./NavMenu";
import { centerItems } from "@/app/global/styleFunctions";
import Link from "next/link";

interface NavbarProps {
  btnInfo: [
    {
      title: string;
      url: string | URL;
      isDropDown: boolean;
      iconURL: string | undefined;
    }
  ];
}

const Navbar: React.FC<NavbarProps> = ({ btnInfo }) => {
  return (
    <nav
      style={{
        background:
          "linear-gradient(to right, rgba(240, 240, 255), rgba(225, 220, 250) 50%)",
        // backdropFilter: "blur(20px)",
        // "linear-gradient(to right, navy, purple, sandybrown, orange)",
        width: "100%",
        position: "fixed",
        height: "4rem",
        top: "0px",
        paddingRight: "1rem",
        zIndex: 1000,
        boxShadow: "0px 2px 4px 1px rgba(0 0 0 /0.06)",
        borderBottom: "3px solid rgba(185, 180, 205, 0.9)",
      }}
    >
      <div
        className="nav-spacer"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="logo-container"
          style={{
            width: "5rem",
            height: "100%",
            position: "relative",
            ...centerItems,
          }}
        >
          <Link
            href="/"
            className="icon"
            style={{
              WebkitMaskImage: "url(static/icons/navbar-icons/main-icon.png)",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(to top left, rgba(150, 0, 190), rgba(50, 0, 90))",
              position: "absolute",
              zIndex: "10",
            }}
          ></Link>
        </div>
        <NavMenu btnInfo={btnInfo} />
      </div>
    </nav>
  );
};

export default Navbar;
