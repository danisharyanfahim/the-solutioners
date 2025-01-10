import Container from "@/app/components/containers/Container";
import ButtonLink from "@/app/components/content/inputs/ButtonLink";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Title from "@/app/components/content/text/Title";
import Header from "@/app/components/layout/header/Header";
import Page from "@/app/components/layout/page/Page";
import Card from "@/app/components/ui/cards/Card";
import React from "react";

const Saas = () => {
  return (
    <>
      <Header
        logo="static/images/logos/page-logos/api-logo.png"
        icon="static/icons/services-icons/saas-icon.png"
      />
      <Page title="soc">
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
            Security operations Center (SOC)
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Comprehensive SOC Services for Modern Threat Management
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Our locally based Security Operations Center (SOC) offers
            cutting-edge solutions tailored to protect your business from
            evolving cyber threats. With a focus on proactive monitoring and
            rapid incident response, our North American team ensures your
            digital environment remains secure around the clock.
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
            Key Features of Our SOC Solutions
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
                Automated Threat Detection: Harness the power of advanced
                automation to identify and respond to threats in real time.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Unified Management Dashboard: Monitor and manage your entire
                security landscape from a single intuitive platform.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Cloud and On-Premises Security: Seamlessly protect cloud
                environments like Microsoft 365 and hybrid infrastructures.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Comprehensive Compliance Support: Stay ahead of regulatory
                requirements with tools designed to simplify compliance.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                24/7 Expert Monitoring: Our North American-based analysts
                deliver continuous surveillance and actionable insights.
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
            Benefits of Partnering With Us
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
                Local Expertise, Global Reach: Work with a trusted SOC team
                rooted in North America.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Improved Threat Response Time: Minimize downtime with automated
                and human-led response capabilities.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Cost-Effective Security Solutions: Protect your organization
                without the need for in-house SOC resources.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Tailored Services: Solutions customized to meet the specific
                needs of your industry and business size.
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
            Partner With Experts Who Understand Your Needs
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            In today's digital world, protecting your assets is more critical
            than ever. Trust our locally based SOC team to safeguard your
            business with tools and strategies that keep you ahead of the curve.
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={6}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Contact us today to learn how we can enhance your cybersecurity
            posture and give you peace of mind.
          </Title>
        </Container>
      </Page>
    </>
  );
};

export default Saas;
