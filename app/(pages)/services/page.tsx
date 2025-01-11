import Page from "@/app/components/layout/page/Page";
import Header from "@/app/components/layout/header/Header";
import React from "react";
import Accordion from "@/app/components/ui/menu/accordion/Accordion";
import VideoPlayer from "@/app/components/ui/VideoPlayer";
import { servicesInfo } from "@/app/global/pageInfo";
import Paragraph from "@/app/components/content/text/Paragraph";
import Title from "@/app/components/content/text/Title";
import Container from "@/app/components/containers/Container";
import ServiceCard from "@/app/components/ui/cards/ServiceCard";
import SlideShow from "@/app/components/ui/SlideShow";
import VideoContainer from "@/app/components/containers/VideoContainer";
import video from "@/videos/services.mp4";

const Services = () => {
  return (
    <>
      <Header
        logo="/static/images/logos/page-logos/home-logo.png"
        icon="/static/icons/navbar-icons/services-icon.png"
      />
      <Page title="Services">
        <VideoContainer src={video}>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            color="#436"
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            What We Offer
          </Title>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            Thank you for taking an interest in the various services that we
            have to offer. At TheSolutioners, our goal is to provide you with
            the most robust cybersecurity solutions that are currently
            available. Our team of experts ensures your data will remain safe
            from every form of cyber threat. We specialize in protecting your
            digital assets through our comprehensive security solutions. We
            provide a large variety of services for you to choose from.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            These include a multitude of cybersecurity resources, to help
            identify and prevent potential risks before they can cause harm. A
            team of system integrators, responsible for implementing various
            technologies and networks into one seamless system. Plenty of cloud
            security services to guard and back up all of your online data.
            Various operational technology security services to help prevent the
            unauthorized access of industrial control systems. As well as a
            browser-based antivirus software to protect your device from
            malicious internet files.
          </Paragraph>
          <Paragraph
            textFormat="justify"
            color="rgba(85, 80, 140)"
            padding="1rem 0rem"
          >
            Additionally, we provide incident response services to manage and
            resolve security breaches swiftly. Our team is available 24/7 to
            support you in any emergency. You can trust us to safeguard your
            digital environment with our bulletproof solutions.
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
            backgroundImage: `linear-gradient(-135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.7)), url(/static/images/background-images/services-background-1.jpg)`,
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
          <Title
            textFormat="center"
            size={2}
            textWrap="balance"
            padding="0.5rem 0rem"
          >
            Are You Concerned About the Increasing Complexity of Cyber Threats ?
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            We provide a full suite of cybersecurity solutions designed to
            address the complexities of modern threats. Our expert team utilizes
            cutting-edge technologies and proactive strategies to ensure your
            systems are protected against both known and emerging threats.
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
            size={2}
            textWrap="balance"
            padding="0.5rem 0rem"
          >
            By choosing our services, you benefit from
          </Title>
          <Container
            width="clamp(1rem, 100%, 100rem)"
            padding="1rem 0rem 0rem 0rem"
            format={{
              xAlignment: "center",
              yAlignment: "center",
              direction: "column",
            }}
          >
            <SlideShow
              height="clamp(360px, 50vw, 800px)"
              delay={3000}
              autoPlay={true}
              leftRightButtons={false}
              slideInfo={[
                {
                  title: `Up-to-Date Expertise`,
                  paragraph: `We stay ahead of evolving threats and new
                technologies to offer the most relevant and effective solutions.`,
                  imageURL: "/static/images/slide-images/slide-1.png",
                },
                {
                  title: `Customized Solutions`,
                  paragraph: `Our services are tailored to meet the
                specific needs of your organization, ensuring optimal protection
                and performance.`,
                  imageURL: "/static/images/slide-images/slide-2.png",
                },
                {
                  title: ` Innovative Technology`,
                  paragraph: `We utilize advanced tools and AI to
                enhance our threat detection and response capabilities,
                providing superior security.`,
                  imageURL: "/static/images/slide-images/slide-3.png",
                },
                {
                  title: `Cost-Effective Security`,
                  paragraph: `We provide a cost-effective way to access expert
                security resources. Clients can leverage enterprise-grade cybersecurity
                capabilities without the high costs of hiring and training an in-house team`,
                  imageURL: "/static/images/slide-images/slide-4.png",
                },
              ]}
            />
            <Paragraph
              textFormat="justify"
              padding="2rem 0rem 1rem"
              color="rgba(85, 80, 140)"
            >
              Protect your organization with our cutting-edge cybersecurity
              solutions and experience the peace of mind that comes from knowing
              your digital assets are secure. Contact us today to learn more
              about how we can safeguard your business against the evolving
              landscape of cyber threats.
            </Paragraph>
          </Container>
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
            backgroundImage: `linear-gradient(135deg, rgba(240, 240, 255), rgba(225, 220, 250) 50%, rgba(225, 220, 250, 0.8)), url(/static/images/background-images/services-background-3.jpg)`,
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
            textWrap="balance"
            size={2}
            padding="0.5rem 0rem"
          >
            Tailored Solutions for Every Environment
          </Title>
          <Paragraph
            textFormat="justify"
            padding="0.5rem 0rem"
            color="rgba(85, 80, 140)"
          >
            Our services are designed to provide seamless security across all
            environments, ensuring comprehensive protection whether you’re
            operating on-premises, in the cloud, or within industrial settings.
            We address the unique challenges of each environment with
            specialized strategies and tools.
          </Paragraph>
        </Container>
        <Container
          type="section"
          format={{
            xAlignment: "center",
            yAlignment: "center",
            direction: "column",
          }}
          style={{
            backgroundColor: "white",
            backgroundImage: `linear-gradient(105deg, rgba(35, 20, 85), rgba(30, 30, 90) 50%, rgba(35, 30, 90, 0.8)), url(/static/images/background-images/services-background-4.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
            color: "#436",
            marginTop: "4rem",
            borderTop: "2px solid rgba(180 175 185 / 0.9)",
            // boxShadow:
            //   "inset 0px 0px 0px 3px rgba(145 145 155 / 0.4), -2px 4px 10px 2px rgba(0 0 0 / 0.15)",
          }}
        >
          <Container
            type="section"
            padding="max(4vw, 1.5rem) 0rem max(4vw, 1.5rem) 0rem"
            format={{
              xAlignment: "center",
              yAlignment: "center",
              direction: "column",
            }}
            style={{
              color: "rgba(225, 220, 255)",
              borderBottom: "2px solid rgba(180 175 185 / 0.9)",
              boxShadow: "-2px 4px 10px 2px rgba(0 0 0 / 0.25)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          >
            <Title
              textFormat="center"
              size={2}
              textWrap="balance"
              padding="0.5rem 0rem"
            >
              We offer a range of specialized services to meet your
              cybersecurity needs
            </Title>
          </Container>
          <Accordion
            alwaysOpen={false}
            items={servicesInfo.map((item) => {
              return {
                title: item.title,
                children: [
                  <ServiceCard
                    src={item.icon}
                    title={item.card?.title}
                    paragraph={item.card?.paragraph}
                    btnUrl={item.url}
                  />,
                ],
              };
            })}
          />
        </Container>
      </Page>
    </>
  );
};

export default Services;
