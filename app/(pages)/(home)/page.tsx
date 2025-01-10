import Container from "@/app/components/containers/Container";
import VideoContainer from "@/app/components/containers/VideoContainer";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Title from "@/app/components/content/text/Title";
import Header from "@/app/components/layout/header/Header";
import Page from "@/app/components/layout/page/Page";
import Carousel from "@/app/components/ui/Carousel";
import Ticker from "@/app/components/ui/Ticker";
import { DIRECTIONS } from "@/app/global/variables";
import React from "react";

const partnerLogo1 = "/static/images/logos/partner-logos/datto-logo.png";
const partnerLogo2 = "/static/images/logos/partner-logos/ingram-micro-logo.png";
const partnerLogo3 = "/static/images/logos/partner-logos/kaseya-logo.png";
const partnerLogo4 = "/static/images/logos/partner-logos/microsoft-logo.png";
const partnerLogo5 = "/static/images/logos/partner-logos/starwind-logo.png";

const partnerLogos = [
  partnerLogo1,
  partnerLogo2,
  partnerLogo3,
  partnerLogo4,
  partnerLogo5,
];

const Home = () => {
  return (
    <>
      <Header
        logo="/static/images/logos/page-logos/home-logo.png"
        icon="/static/icons/navbar-icons/main-icon.png"
      />
      <Page title="home-page">
        <VideoContainer src="/static/videos/Home.mp4">
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            color="#436"
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Welcome
          </Title>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            Welcome to TheSolutioners, your trusted partner in safeguarding your
            digital world with cost-effective cybersecurity solutions. In
            today’s rapidly evolving technological landscape, cyber threats are
            more sophisticated and pervasive than ever before. Every business,
            regardless of its size or industry, is vulnerable to cyberattacks
            that can jeopardize sensitive data, disrupt operations, and damage
            your reputation.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            At TheSolutioners, we are committed to ensuring your business
            remains secure and resilient. We understand the critical importance
            of robust cybersecurity, and we provide affordable, tailored
            solutions to protect your assets without breaking the bank.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            We offer comprehensive cybersecurity services and monitor your
            digital assets 24/7, ensuring you are always one step ahead of
            potential threats. Our expert team delivers maximum value by
            defending against attacks, ensuring compliance, mitigating risks,
            and strengthening your organization’s overall security posture. Let
            us help you protect your future while optimizing your cybersecurity
            budget and maintaining peace of mind.
          </Paragraph>
        </VideoContainer>
        <Container
          name="page-section-right"
          padding="max(4vw, 1.5rem) max(4vw, 2rem) max(4vw, 1.5rem) max(4vw, 1.5rem)"
          type="section"
          width="95%"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            borderRadius: "25px 0px 0px 25px",
            backgroundColor: "white",
            backgroundImage: `linear-gradient(-135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.7)), url(/static/images/background-images/home-background-1.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            marginTop: "4rem",
            marginLeft: "max(6vw, 3rem)",
            // border: "3px solid rgba(145 145 155 / 0.4)",
            boxShadow:
              "inset 0px 0px 0px 3px rgba(145 145 155 / 0.4), 0px 1px 5px 2px rgba(0 0 0 /0.15)",
            color: "#436",
          }}
        >
          <Paragraph textFormat="justify" color="rgba(85, 80, 140)">
            In today’s digital landscape, robust cybersecurity is essential for
            the success and continuity of any business. As cyber threats become
            increasingly frequent and sophisticated, safeguarding sensitive data
            and implementing comprehensive security measures are paramount.
          </Paragraph>
        </Container>
        <Container
          name="page-section-left"
          width="95%"
          type="section"
          padding="max(4vw, 1.5rem) max(4vw, 1.5rem) max(4vw, 1.5rem) max(4vw, 2rem)"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            borderRadius: "0px 25px 25px 0px",
            backgroundColor: "white",
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-2.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            color: "#436",
            marginRight: "max(6vw, 3rem)",
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
            Who are we?
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            We are a leading Canadian Cyber security company committed to
            delivering cutting-edge cybersecurity solutions and technologies.
            With years of experience in threat detection, risk management, and
            data protection. We specialize in providing cutting-edge solutions
            to help businesses, organizations, and individuals stay secure in an
            ever-evolving cyber landscape.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            Our mission is simple: to proactively defend your digital
            infrastructure, anticipate emerging threats, and ensure your systems
            are always protected against the latest cyber risks. From
            penetration testing and vulnerability assessments to managed
            security services and incident response, we work tirelessly to give
            you the peace of mind you deserve.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            At the heart of everything we do is our belief that security is not
            just a service—it’s a partnership. Together, we can build a safer,
            more resilient digital future.
          </Paragraph>
        </Container>
        <Container
          name="page-section-left"
          width="min(calc(100% - 3rem), 95%)"
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-2.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
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
            size={3}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            What do we do?
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            We specialize in delivering a comprehensive suite of cybersecurity
            solutions tailored to meet the diverse needs of modern businesses.
            Our services include:
          </Paragraph>
          <Carousel
            infinite={true}
            autoPlay={true}
            direction={DIRECTIONS.FORWARD}
            delay={2000}
            itemInfo={[
              {
                url: "static/icons/carousel-icons/threat-icon.png",
                title: "Threat Detection",
                paragraph: `Advanced systems designed to identify and
                respond to potential security threats in real time, ensuring
                your defenses are always one step ahead`,
              },
              {
                url: "static/icons/carousel-icons/cloud-icon.png",

                title: "Cloud Security",
                paragraph: `Robust solutions to protect your cloud
                environments, safeguarding your data and applications from
                unauthorized access and breaches.`,
              },
              {
                url: "static/icons/carousel-icons/ot-icon.png",
                title: "Operational Technology Security",
                paragraph: `Specialized protection for
                industrial control systems and critical infrastructure,
                addressing the unique challenges of OT environments.`,
              },
              {
                url: "static/icons/carousel-icons/soc-icon.png",
                title: "Security Operations Center (SOC) Services",
                paragraph: `Specialized protection for
                industrial control systems and critical infrastructure,
                addressing the unique challenges of OT environments.`,
              },
              {
                url: "static/icons/carousel-icons/employee-icon.png",
                title: " Employee Awareness Training",
                paragraph: `Comprehensive training programs
                designed to educate and empower your team against cybersecurity
                threats, fostering a culture of security awareness.`,
              },
              {
                url: "static/icons/carousel-icons/system-icon.png",
                title: "System Integration Services",
                paragraph: `Expert integration of your various
                IT systems and technologies to enhance efficiency, performance,
                and security across your organization.`,
              },
            ]}
          />
        </Container>
        <Container
          name="page-section-right"
          type="section"
          padding="max(4vw, 1.5rem) max(4vw, 2rem) max(4vw, 1.5rem) max(4vw, 1.5rem)"
          width="95%"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            borderRadius: "25px 0px 0px 25px",
            backgroundColor: "white",
            backgroundImage: `linear-gradient(-135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-4.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            color: "#436",
            marginLeft: "max(6vw, 3rem)",
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
            Why choose us?
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
                Emerging cybersecurity company with significant impact across
                the industry.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Knowledgeable team focused on the latest technological
                advancements, especially in AI. Offering innovative, tailored
                cybersecurity solutions.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Proactive approach to securing sensitive data and business
                information.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Trusted by a growing number of businesses to navigate the
                evolving threat landscape.
              </Point>
            </li>
          </ul>
        </Container>
        <Container
          type="section"
          padding="max(4vw, 1.5rem)"
          maxHeight="clamp(27rem, 40vw + 5rem, 50rem)"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            backgroundColor: "white",
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/home-background-5.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
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
            size={2}
            padding="0.5rem 0rem"
            textWrap="balance"
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Partnering to shape the future
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            At TheSolutioners, we believe that collaboration is key to achieving
            exceptional results. We are proud to work with a diverse array of
            esteemed business partners who share our commitment to excellence in
            cybersecurity. Each partnership enhances our ability to deliver
            top-tier solutions and services tailored to meet the unique needs of
            our clients.
          </Paragraph>
          <Container
            width="95%"
            maxWidth="1250px"
            format={{
              xAlignment: "center",
              yAlignment: "center",
              direction: "column",
            }}
          >
            <Ticker
              height={"clamp(10rem, 50vh, 18rem)"}
              itemInfo={partnerLogos}
              speed={2}
              direction={DIRECTIONS.FORWARD}
              infinite={true}
              autoPlay={true}
              leftRightButtons={false}
              mask={true}
              autoPause={false}
            />
          </Container>
        </Container>
      </Page>
    </>
  );
};

export default Home;
