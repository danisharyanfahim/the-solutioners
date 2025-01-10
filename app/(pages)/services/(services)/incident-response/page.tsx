import Container from "@/app/components/containers/Container";
import ButtonLink from "@/app/components/content/inputs/ButtonLink";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Title from "@/app/components/content/text/Title";
import Header from "@/app/components/layout/header/Header";
import Page from "@/app/components/layout/page/Page";
import Card from "@/app/components/ui/cards/Card";
import React from "react";
const IncidentResponse = () => {
  return (
    <>
      <Header
        logo="static/images/logos/page-logos/home-logo.png"
        icon="static/icons/services-icons/incident-icon.png"
      />
      <Page title="incident-response">
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
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Incident Response (IR) Services
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Empower your business with rapid incident response solutions,
            minimizing impact and restoring operations with expert precision
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            At The Solutioners, we provide rapid and effective Incident Response
            (IR) services to help businesses recover quickly from cyberattacks
            like ransomware, data breaches, and phishing attacks. Our goal is to
            minimize disruption, reduce downtime, and protect your reputation by
            swiftly addressing security incidents.
          </Paragraph>
        </Container>
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
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            What We do
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Our Canadian team of experts uses advanced tools and methodologies
            to detect, contain, and eradicate threats, ensuring your business
            stays protected. We lock down systems, assess and respond to threats
            in real-time, and restore operations as quickly as possible.
            Post-incident analysis is conducted to enhance future defenses. With
            a "boots on the ground" approach, we manage everything in-house,
            ensuring complete control over every aspect of your cybersecurity
            response.
          </Paragraph>
        </Container>
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
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            What We do
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Expert Team: Skilled technicians provide hands-on support during
                incidents.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                24/7 Availability: We're always ready to respond, no matter the
                time.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Tailored Approach: We customize our services to your unique
                business needs.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Canadian-Based: As a Canadian company, we handle all operations
                locally, ensuring seamless and direct communication.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Regular Testing & Support: Proactive testing, updates, and
                expert support for continuous preparedness.
              </Point>
            </li>
          </ul>
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
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Partner with us to ensure your business is protected and resilient
            against evolving cyber threats.
          </Title>
        </Container>
      </Page>
    </>
  );
};

export default IncidentResponse;
