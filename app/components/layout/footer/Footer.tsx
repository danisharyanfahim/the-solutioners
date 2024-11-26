import Link from "next/link";
import React from "react";
import Icon from "../../content/icon/Icon";
import { centerItems } from "@/app/global/styleFunctions";
import Card from "../../ui/cards/Card";
import Paragraph from "../../content/text/Paragraph";
import Title from "../../content/text/Title";
import Container from "../../containers/Container";
import IconLink from "../../content/icon/IconLink";

/* 
-Add social media icons, and then I'm done the base format
-Also update the card so that I can have any height I want with a minHeight and maxHeight and not have to use fixed heights for them so the card is dependent on the content
*/

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "white",
        backgroundImage: `linear-gradient(-190deg, rgba(15, 10, 45), rgba(25, 20, 50, 0.98) 60%, rgba(25, 20, 50, 0.9) 85%, rgba(25, 20, 50, 0.8)), url(static/images/background-images/footer-background.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        overflow: "hidden",
        minHeight: "32rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px -2px 10px 2px rgba(0 0 0 /0.2)",
        zIndex: "10",
      }}
    >
      <Container
        name="divider"
        height="100%"
        minWidth="21.5rem"
        maxWidth="95%"
        wrap="wrap"
        padding="3rem 0rem 0rem"
        format={{
          xAlignment: "center",
          yAlignment: "flex-start",
          direction: "row",
        }}
      >
        <Container
          name="company-slogan"
          type="section"
          padding="0rem 1rem 1rem 1rem"
          // backgroundColor="red"
          maxWidth="30rem"
          minWidth="20rem"
          flex="1 1 20rem"
          format={{
            xAlignment: "center",
            yAlignment: "flex-start",
            direction: "column",
          }}
        >
          <Container
            name="footer-logo"
            type="figure"
            padding="1rem"
            margin="1rem 0rem"
            height="80px"
            maxWidth="400px"
            format={{
              xAlignment: "center",
              yAlignment: "center",
              direction: "row",
            }}
          >
            <Icon src="static/images/logos/main-logo-large.png" size={100} />
          </Container>
          <Paragraph textFormat="justify" padding="0rem 0.5rem">
            Our mission is to provide you with the most advanced and effective
            security services to protect your business from evolving digital
            threats
          </Paragraph>
          <Container
            name="social-media-icons"
            type="figure"
            padding="1rem"
            margin="1rem 0rem"
            height="40px"
            maxWidth="400px"
            format={{
              xAlignment: "center",
              yAlignment: "center",
              direction: "row",
            }}
          >
            <Link
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/the-solutioners-ca"
              className="icon"
              style={{
                WebkitMaskImage:
                  "url(static/icons/social-media-icons/linked-in-icon.png)",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                background:
                  // "linear-gradient(to top left, rgba(150, 0, 190), rgba(50, 0, 90))",
                  `linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(245, 240, 255, 0.8))`,
                position: "absolute",
                zIndex: "10",
              }}
            ></Link>
          </Container>
        </Container>
        <Container
          name="footer-links"
          type="section"
          padding="1rem"
          // backgroundColor="blue"
          maxWidth="36rem"
          minWidth="20rem"
          flex="1 1 20rem"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
        >
          <Title textFormat="center" size={2} padding="1rem 0rem" color="white">
            Links
          </Title>
          <ul className="items">
            <li style={{ ...centerItems }}>
              <Link href="/">
                <Title textFormat="center" size={6} padding="0.5rem 0rem">
                  Home
                </Title>
              </Link>
            </li>
            <li style={{ ...centerItems }}>
              <Link href="/about">
                <Title textFormat="center" size={6} padding="0.5rem 0rem">
                  About
                </Title>
              </Link>
            </li>
            <li style={{ ...centerItems }}>
              <Link href="/services">
                <Title textFormat="center" size={6} padding="0.5rem 0rem">
                  Services
                </Title>
              </Link>
            </li>
            <li style={{ ...centerItems }}>
              <Link href="/contact">
                <Title textFormat="center" size={6} padding="0.5rem 0rem">
                  Contact
                </Title>
              </Link>
            </li>
          </ul>
        </Container>
        <Container
          name="company-information"
          type="section"
          padding="0rem 2rem"
          // backgroundColor="green"
          maxWidth="36rem"
          minWidth="20rem"
          flex="1 1 20rem"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
        >
          <ul className="items" style={{ width: "100%", margin: "0.5rem" }}>
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                graphic={{
                  src: "static/icons/footer-icons/address-icon.png",
                  type: "icon",
                  size: 70,
                  fraction: 20,
                  colorInfo: `linear-gradient(135deg, rgba(255, 255, 255), rgba(245, 240, 255))`,
                }}
                format="type1"
              >
                <Container
                  height="100%"
                  format={{
                    xAlignment: "flex-start",
                    yAlignment: "center",
                    direction: "row",
                  }}
                >
                  <Paragraph textFormat="left">
                    100 Mural St, Richmond Hill, ON L4B 1J3
                  </Paragraph>
                </Container>
              </Card>
            </li>
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                graphic={{
                  src: "static/icons/footer-icons/phone-icon.png",
                  type: "icon",
                  size: 70,
                  fraction: 20,
                  colorInfo: `linear-gradient(135deg, rgba(255, 255, 255), rgba(245, 240, 255))`,
                }}
                format="type1"
              >
                <Container
                  height="100%"
                  format={{
                    xAlignment: "flex-start",
                    yAlignment: "center",
                    direction: "row",
                  }}
                >
                  <Paragraph textFormat="left">+1-647-524-3894</Paragraph>
                </Container>
              </Card>
            </li>
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                graphic={{
                  src: "static/icons/footer-icons/email-icon.png",
                  type: "icon",
                  size: 70,
                  fraction: 20,
                  colorInfo: `linear-gradient(135deg, rgba(255, 255, 255), rgba(245, 240, 255))`,
                }}
                format="type1"
              >
                <Container
                  height="100%"
                  format={{
                    xAlignment: "flex-start",
                    yAlignment: "center",
                    direction: "row",
                  }}
                >
                  <Paragraph textFormat="left">
                    support@thesolutioners.ca
                  </Paragraph>
                </Container>
              </Card>
            </li>
          </ul>
        </Container>
      </Container>
      <Container
        format={{
          xAlignment: "center",
          yAlignment: "center",
          direction: "column",
        }}
        style={{ borderTop: "1px solid rgba(255 255 255 / 0.1)" }}
      >
        <Paragraph textFormat="center" padding="1rem">
          © 2024 TheSolutioners. All rights reserved.
        </Paragraph>
      </Container>
    </footer>
  );
};

export default Footer;
