"use client";
import React, { useEffect, useState } from "react";
import JointMenu from "../../ui/menu/joint/JointMenu";
import { DIRECTIONS } from "@/app/global/variables";
import ButtonLink from "../../content/inputs/ButtonLink";
import { usePathname } from "next/navigation";
import { useMediaQueries } from "@/app/hooks/useMediaQueries";
import Icon from "../../content/icon/Icon";
import NavButton from "./NavButton";

type btnInfo = {
  title: string;
  url: string | URL;
  isDropDown?: boolean;
  dropDownInfo?: { title: string; url: string | URL }[];
  iconURL: string | undefined;
}[];

const selectStyle = (isMobile: boolean, isActive: boolean) => {
  if (isMobile) {
    return {
      height: "100%",
      padding: "1rem",
      width: "100%",
      background: isActive
        ? "linear-gradient(to right, rgba(0, 0, 100, 0.5), rgba(100, 0, 100, 0.5))"
        : "transparent",
      color: isActive ? "#FFF" : "#224",
      display: "table",
    };
  } else {
    return {
      padding: "1rem",
      width: "9rem",
      background: isActive
        ? "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))"
        : "transparent",
      color: isActive ? "#FFF" : "#224",
      display: "table",
      position: "relative",
      zIndex: 3,
      boxShadow: isActive ? "inset -4px 0px 10px 2px rgba(0 0 0 /0.1)" : "none",
    };
  }
};

/* 
// -Make buttons stop showing after being clicked
// -Show active button as well
// -Add hook to make it switch between desktop and mobile version
// -Make new menu icon to use
// -Format mobile menu to look in proportion to logo
-Make drop down menu component, name it so it isn't the same as the hover drop down
-This code needs to be seriously cleaned up
-Also clean up the code for the card, and containers as well and anything else
*/

const NavMenu: React.FC<{ btnInfo: btnInfo }> = ({ btnInfo }) => {
  const [showing, setShowing] = useState<boolean>(false);
  const pathname = usePathname();
  const deviceSize = useMediaQueries();
  const [device, setDevice] = useState<number | null>(null);

  const generateButtons = (buttonInfo: btnInfo, isMobile: boolean) => {
    return buttonInfo.map((btn, index) => {
      const isActive1 = pathname === btn.url;
      return (
        <li
          className={`${btn.title}-container ${
            btn.isDropDown && !isMobile ? "drop-down" : ""
          } ${isMobile ? "nav-button-mobile" : "nav-button-desktop"}`}
          key={index}
        >
          {/* <ButtonLink
            url={btn.url}
            title={btn.title}
            style={selectStyle(deviceSize < 3, isActive1)}
            clickFunc={() => toggleDropDown()}
            imageInfo={{
              src: "static/icons/navbar-icons/home-icon.png",
              size: 50,
              colorInfo: "black",
            }}
          /> */}
          {deviceSize < 3 ? (
            <ButtonLink
              url={btn.url}
              title={btn.title}
              style={selectStyle(true, isActive1)}
              clickFunc={() => toggleDropDown()}
            />
          ) : (
            <NavButton
              icon={btn.iconURL}
              url={btn.url}
              text={deviceSize < 5 ? undefined : btn.title}
              color={isActive1 ? "#FFF" : "#224"}
              background={
                isActive1
                  ? "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))"
                  : "transparent"
              }
            />
          )}
          {btn.isDropDown && !isMobile && (
            <JointMenu
              name="drop-down"
              direction={DIRECTIONS.VERTICAL}
              style={{
                position: "relative",
                background:
                  "linear-gradient(to top, rgba(245 240 255 / 0.5), rgba(225 220 250 / 0.9))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                // boxShadow: "0px 0px 7px 1px rgba(0 0 0 /0.16)",
                zIndex: "-10",
              }}
            >
              {btn.dropDownInfo?.map((item, itemIndex) => {
                const isActive2 = pathname === item.url;
                return (
                  <li
                    className={`${item.title}-container}`}
                    key={itemIndex}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ButtonLink
                      url={item.url}
                      title={item.title}
                      style={selectStyle(false, isActive2)}
                      clickFunc={() => toggleDropDown()}
                    />
                  </li>
                );
              })}
            </JointMenu>
          )}
        </li>
      );
    });
  };

  const toggleDropDown = () => {
    setShowing((prev) => !prev);
  };

  useEffect(() => {
    setDevice(deviceSize);
  }, [deviceSize]);

  return (
    device !== null &&
    (device < 3 ? (
      <div
        className="drop-down-container"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
        <div
          className="button-spacer"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <button
            onClick={(): void => toggleDropDown()}
            style={{
              height: "100%",
              aspectRatio: "1 / 1",
              position: "absolute",
              right: "-0px",
              // backgroundColor: "#666",
            }}
          >
            <Icon
              src="static/icons/navbar-icons/menu-icon.png"
              colorInfo="rgba(35, 0, 80)"
            />
          </button>
        </div>
        {showing && (
          <JointMenu
            name="nav-menu mobile-drop-down-menu"
            direction={DIRECTIONS.VERTICAL}
            style={{
              background:
                "linear-gradient(to top, rgba(245 240 255 / 0.5), rgba(225 220 250 / 0.9))",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0, 0, 20, 0.25)",
              // boxShadow: "0px 4px 8px 1px rgba(0 0 0 /0.03)",
            }}
          >
            {generateButtons(btnInfo, true)}
          </JointMenu>
        )}
      </div>
    ) : (
      <JointMenu
        name="nav-button"
        direction={DIRECTIONS.HORIZONTAL}
        xAlignment={deviceSize < 5 ? "center" : "right"}
      >
        {generateButtons(btnInfo, deviceSize < 5)}
      </JointMenu>
    ))
  );
};

export default NavMenu;
