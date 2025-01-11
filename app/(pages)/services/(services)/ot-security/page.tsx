import Container from "@/app/components/containers/Container";
import ButtonLink from "@/app/components/content/inputs/ButtonLink";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Title from "@/app/components/content/text/Title";
import Header from "@/app/components/layout/header/Header";
import Page from "@/app/components/layout/page/Page";
import Card from "@/app/components/ui/cards/Card";
import React from "react";

const OtSecurity = () => {
  return (
    <>
      <Header
        logo="/static/images/logos/page-logos/home-logo.png"
        icon="/static/icons/services-icons/ot-icon.png"
      />
      <Page title="ot-security">
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-2.jpg)`,
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
            Operational Technology (OT) Security Tailored to Industrial Needs
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            In today’s interconnected world, the security of operational
            technology is paramount. Our OT security solutions are designed to
            protect critical infrastructure, minimize downtime, and ensure
            operational resilience. Backed by a North American-based team of
            experts, we’ve safeguarded industries ranging from automotive
            manufacturing to commodity production and beyond.
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/services-background-2.jpg)`,
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
            Key Features of Our OT Security Services
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
                Real-Time Monitoring for OT Networks: Detect and respond to
                threats across industrial control systems (ICS) and SCADA
                environments.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Industrial Cyber Threat Protection: Advanced tools to protect
                against ransomware, insider threats, and supply chain
                vulnerabilities.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Tailored Security Frameworks: Customized solutions aligned with
                the unique operational and regulatory needs of industrial
                environments.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Resilient Incident Response: Rapid identification, containment,
                and remediation of threats to minimize downtime.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Integration Across IT and OT: Ensure seamless security coverage
                across both traditional IT systems and specialized OT networks.
              </Point>
            </li>
          </ul>
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-1.jpg)`,
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
            Why Choose Our OT Security Team?
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
                Proven Industry Expertise: Our team has successfully delivered
                solutions for industries like automotive manufacturing,
                commodities processing, and critical infrastructure.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Local and Reliable Support: With a North American-based team, we
                provide responsive, expert assistance whenever you need it.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Minimized Operational Disruptions: Focus on running your
                operations while we manage and secure your critical systems.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                End-to-End Protection: Comprehensive security services from
                assessment to implementation and ongoing management.
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/contact-background-2.jpg)`,
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
            Securing the Future of Your Operations
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Whether you’re safeguarding a car manufacturing plant or a
            commodities processing facility, our team delivers solutions that
            protect your infrastructure from today’s most pressing threats.
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Get in touch to discuss how we can secure your operations and
            empower your business to thrive in a connected world.
          </Title>
        </Container>
      </Page>
    </>
  );
};

export default OtSecurity;
