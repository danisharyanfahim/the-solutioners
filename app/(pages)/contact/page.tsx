import Page from "@/app/components/layout/page/Page";
import Header from "@/app/components/layout/header/Header";
import React from "react";
import ButtonLink from "@/app/components/content/inputs/ButtonLink";
import Card from "@/app/components/ui/cards/Card";
import Title from "@/app/components/content/text/Title";
import Paragraph from "@/app/components/content/text/Paragraph";
import Container from "@/app/components/containers/Container";
import VideoContainer from "@/app/components/containers/VideoContainer";

const Contact = () => {
  return (
    <>
      <Header
        logo="static/images/logos/page-logos/home-logo.png"
        icon="static/icons/navbar-icons/contact-icon.png"
      />
      <Page title="Contact">
        <VideoContainer src="/static/videos/Contact.mp4">
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            color="#436"
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Thank You for Visiting
          </Title>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            We are glad that you took an interest in us, as well as the services
            that we provide. We hope you found the information valuable and
            insightful.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            If you have any questions or need further assistance, please don't
            hesitate to reach out. Our team of engineers is always ready to
            assist you with any of your IT and cybersecurity needs.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            If you wish to contact us, our email is support@thesolutioners.ca or
            you can call us at +1 (647) 524-3894. Remember that your security is
            our top priority. Thank you for visiting us we hope to see you again
            soon.
          </Paragraph>
        </VideoContainer>
        <Container
          name="page-section-left"
          width="min(calc(100% - 3rem), 85%)"
          type="section"
          padding="max(4vw, 1.5rem) max(4vw, 1.5rem) max(4vw, 1.5rem) max(4vw, 2rem)"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            borderRadius: "25px",
            backgroundColor: "white",
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(static/images/background-images/contact-background-1.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            color: "#436",
            // marginRight: "max(6vw, 3rem)",
            marginTop: "4rem",
            boxShadow:
              "inset 0px 0px 0px 3px rgba(145 145 155 / 0.4), 0px 1px 5px 2px rgba(0 0 0 /0.15)",
          }}
        >
          <Title
            textFormat="center"
            size={1}
            padding="1rem 0.5rem"
            textWrap="balance"
          >
            Let's explore solutions together
          </Title>
          <ul className="items">
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                margin="1rem 0rem"
                graphic={{
                  src: "static/icons/footer-icons/address-icon.png",
                  type: "icon",
                  size: 75,
                  fraction: 30,
                  colorInfo:
                    "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))",
                }}
                format="type1"
              >
                <Title textFormat="left" size={4}>
                  Address
                </Title>
                <Paragraph textFormat="left" color="rgba(85, 80, 140)">
                  100 Mural St, Richmond Hill, ON L4B 1J3
                </Paragraph>
              </Card>
            </li>
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                margin="1rem 0rem"
                graphic={{
                  src: "static/icons/footer-icons/phone-icon.png",
                  type: "icon",
                  size: 75,
                  fraction: 30,
                  colorInfo:
                    "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))",
                }}
                format="type1"
              >
                <Title textFormat="left" size={4}>
                  Phone
                </Title>
                <Paragraph textFormat="left" color="rgba(85, 80, 140)">
                  +1-647-524-3894
                </Paragraph>
              </Card>
            </li>
            <li>
              <Card
                minHeight="100px"
                width="100%"
                padding="0rem 1rem"
                margin="1rem 0rem"
                graphic={{
                  src: "static/icons/footer-icons/email-icon.png",
                  type: "icon",
                  size: 75,
                  fraction: 30,
                  colorInfo:
                    "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))",
                }}
                format="type1"
              >
                <Title textFormat="left" size={4}>
                  Email
                </Title>
                <Paragraph textFormat="left" color="rgba(85, 80, 140)">
                  support@thesolutioners.ca
                </Paragraph>
              </Card>
            </li>
          </ul>
          <Paragraph
            textFormat="justify"
            padding="1rem 0rem"
            color="rgba(85, 80, 140)"
          >
            Protect your organization with our cutting-edge cybersecurity
            solutions and experience the peace of mind that comes from knowing
            your digital assets are secure. Contact us today to learn more about
            how we can safeguard your business against the evolving landscape of
            cyber threats.
          </Paragraph>
        </Container>
        <Container
          type="section"
          padding="max(4vw, 1.5rem)"
          minHeight="13rem"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            backgroundColor: "white",
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(static/images/background-images/contact-background-2.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            color: "#436",
            marginTop: "4rem",
            borderTop: "3px solid rgba(180 175 185 / 0.9)",
            borderBottom: "3px solid rgba(95 90 115 / 0.9)",
            // boxShadow:
            //   "inset 0px 0px 0px 3px rgba(145 145 155 / 0.4), -2px 4px 10px 2px rgba(0 0 0 / 0.15)",
          }}
        >
          <Title textFormat="center" size={5}>
            Feel free to stop by, call, or email us during our business hours.
            We look forward to connecting with you!
          </Title>
          <ButtonLink
            name="gradient-button"
            title="Email Us"
            url="mailto:support@thesolutioners.ca"
            style={{
              marginTop: "1rem",
              background:
                "linear-gradient(to right, rgba(220, 0, 0), rgba(240, 140, 0))",
              padding: "0.5rem 2.5rem",
              color: "white",
              boxShadow: "0px 0px 7px 1px rgba(0 0 0 /0.16)",
              borderRadius: "50px",
            }}
          />
        </Container>
      </Page>
    </>
  );
};

export default Contact;

/* 
-Responsive text (Clamp)
-Responsive section (Media queries or useMediaQueries)
-Responsive container size (Clamp and min and max height and width)
-Responsive card (Clamp, and useMediaQueries)
*/
