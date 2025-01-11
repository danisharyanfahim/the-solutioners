import Container from "@/app/components/containers/Container";
import ButtonLink from "@/app/components/content/inputs/ButtonLink";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Title from "@/app/components/content/text/Title";
import Header from "@/app/components/layout/header/Header";
import Page from "@/app/components/layout/page/Page";
import Card from "@/app/components/ui/cards/Card";
import React from "react";

const Bcdr = () => {
  return (
    <>
      <Header
        logo="/static/images/logos/page-logos/home-logo.png"
        icon="/static/icons/services-icons/bcdr-icon.png"
      />
      <Page title="bcdr">
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
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Business Continuity and Disaster Recovery (BCDR) Services
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={5}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Fortify your business with ransomware-proof solutions that ensure
            your critical data and systems remain secure, resilient, and
            untouchable."
          </Title>
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/services-background-1.jpg)`,
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
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            At The Solutioners, we specialize in providing robust Business
            Continuity and Disaster Recovery (BCDR) services to ensure your
            business can withstand disruptions. We help businesses maintain
            continuous operations and enable rapid recovery after events like
            cyberattacks, technical failures, or natural disasters. Our tailored
            solutions involve:
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
                Risk Assessment & Planning: Identifying vulnerabilities and
                creating customized recovery plans.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Secure Data Backups: Storing data in secure, cloud-based backups
                to ensure accessibility during a disaster.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Rapid Recovery: Fast restoration of systems, applications, and
                data to minimize downtime.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Failover Systems: Automated backup systems to maintain
                operations during failures.
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
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Our services are designed to reduce downtime, prevent data loss, and
            ensure compliance with industry regulations. With 24/7 monitoring
            and cost-effective pricing, we ensure your business is resilient and
            ready to face any challenge.
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Choose The Solutioners to ensure your operations stay secure and
            recoverable—no matter the disruption.
          </Title>
        </Container>
      </Page>
    </>
  );
};

export default Bcdr;
