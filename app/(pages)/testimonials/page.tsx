import Page from "@/app/components/layout/page/Page";
import Header from "@/app/components/layout/header/Header";
import React from "react";
import Title from "@/app/components/content/text/Title";
import Container from "@/app/components/containers/Container";
import Paragraph from "@/app/components/content/text/Paragraph";
import Point from "@/app/components/content/text/Point";
import Carousel from "@/app/components/ui/Carousel";
import { DIRECTIONS } from "@/app/global/variables";

const About = () => {
  return (
    <>
      <Header
        logo="/static/images/logos/page-logos/home-logo.png"
        icon="/static/icons/navbar-icons/about-icon.png"
      />
      <Page title="Testimonials">
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
            Success Stories
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            At The Solutioners , we pride ourselves on delivering rapid,
            reliable, and effective solutions for organizations facing critical
            cybersecurity incidents. Here’s how we demonstrated our expertise
            during a major ransomware attack.
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
            style={{
              marginBottom: "5rem",
              textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)",
            }}
          >
            Swift and Effective Ransomware Recovery
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Client Overview
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
            style={{
              marginBottom: "3rem",
            }}
          >
            A mid-sized financial services firm heavily reliant on its IT
            infrastructure for core banking, customer management, and payment
            processing.
          </Paragraph>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            The Challenge the organization faced
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
              marginBottom: "3rem",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Encrypted critical financial systems, rendering them unusable.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Disrupted customer transactions and daily financial operations.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Compromised most domain controllers, halting authentication and
                network access.
              </Point>
            </li>
            <Paragraph
              textFormat="center"
              padding="0.5rem 0rem 1rem"
              color="rgba(85, 80, 140)"
            >
              The stakes were high, with customer trust, financial integrity,
              and regulatory compliance at risk.
            </Paragraph>
          </ul>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Our Solution
          </Title>
          <Carousel
            infinite={true}
            autoPlay={true}
            direction={DIRECTIONS.FORWARD}
            delay={2000}
            itemInfo={[
              {
                title: "Rapid Incident Response",
                points: [
                  "Containment: Isolated infected systems to halt the spread of ransomware.",
                  "Forensic Analysis: Identified the ransomware strain, analyzed its behavior, and extracted Indicators of Compromise (IOCs) for enhanced threat monitoring..",
                ],
              },
              {
                title: "Strategic Recovery Using a Single Domain Controller",
                points: [
                  "Infrastructure Restoration: Leveraged the surviving domain controller to rebuild the company’s authentication and network infrastructure.",
                  "Phased Deployment: Deployed new domain controllers across the organization to restore access securely.",
                  "Data Recovery: Recovered critical data through backups and decryption efforts, prioritizing business-critical systems.",
                ],
              },
              {
                title: "Fortifying the Network",
                points: [
                  "Vulnerability Management: Patched security gaps exploited by the ransomware.",
                  "Network Segmentation: Restructured systems into isolated environments to minimize the impact of future threats.",
                  "Continuous Monitoring: Implemented IOC-based scans and advanced monitoring solutions for proactive threat detection.",
                ],
              },
            ]}
          />
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Results
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
                Operational Recovery: Restored all critical systems, enabling
                the firm to resume financial operations within days.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Minimized Downtime: Mitigated customer impact and reduced
                financial losses.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Enhanced Security: Delivered a robust, segmented network with
                improved defenses against future attacks.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Future Readiness: Equipped the IT team with monitoring tools and
                an improved incident response protocol.
              </Point>
            </li>
          </ul>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
            style={{
              marginBottom: "3rem",
            }}
          >
            A mid-sized financial services firm heavily reliant on its IT
            infrastructure for core banking, customer management, and payment
            processing.
          </Paragraph>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Why Choose Us?
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            This success story underscores our commitment to rapid recovery and
            long-term protection for businesses. Our combination of expertise,
            advanced technologies, and client-focused solutions ensures that
            your organization is secure and resilient in the face of cyber
            threats.
          </Paragraph>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Ready to secure your business? Contact us to learn how we can
            protect your organization
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
            style={{
              marginBottom: "5rem",
              textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)",
            }}
          >
            Implementing Cost-Effective, Immutable Ransomware Protection
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{
              textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)",
            }}
          >
            Client Overview
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
            style={{ marginBottom: "3rem" }}
          >
            A mid-sized organization concerned about rising cybersecurity
            threats, especially ransomware, sought a robust data protection
            solution. The key challenge was to enhance security without
            incurring significant costs for new infrastructure.
          </Paragraph>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            The Challenge the organization faced
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
              marginBottom: "3rem",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                A need to safeguard critical data from ransomware attacks
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Limited budget flexibility for deploying additional hardware or
                software solutions.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Existing infrastructure that required optimization to meet
                modern security standards.
              </Point>
            </li>
          </ul>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Our Solution
          </Title>
          <Carousel
            infinite={true}
            autoPlay={true}
            direction={DIRECTIONS.FORWARD}
            delay={2000}
            itemInfo={[
              {
                title: "Immutable Storage Implementation",
                points: [
                  "Designed an immutable backup solution leveraging the organization’s current hardware infrastructure.",
                  "Configured backups to ensure stored data could not be altered or deleted by ransomware, creating a ransomware-resistant safety net.",
                ],
              },
              {
                title: "Strategic Recovery Using a Single Domain Controller",
                points: [
                  "Avoided costly hardware upgrades by optimizing and repurposing the organization’s existing equipment.",
                  "Delivered enterprise-grade ransomware protection within the client’s budget.",
                ],
              },
              {
                title: "Fortifying the Network",
                points: [
                  "Ensured the new solution integrated smoothly with their existing systems, minimizing downtime and disruption.",
                  "Provided detailed guidance and training for the IT team to manage and monitor the solution effectively.",
                ],
              },
            ]}
          />
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Results
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
              marginBottom: "3rem",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Ransomware-Resistant Backup: The organization now benefits from
                an immutable storage solution that protects critical data from
                unauthorized modifications.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Cost Savings: By utilizing current hardware, the organization
                achieved significant cost savings while improving its security
                posture.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Peace of Mind: The company is better prepared for ransomware
                attacks, with backups ensuring data integrity and business
                continuity.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Optimized Infrastructure: Existing resources were optimized,
                extending their lifespan and maximizing ROI.
              </Point>
            </li>
          </ul>

          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Why Choose Us?
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Our ability to deliver high-impact, cost-effective solutions
            tailored to unique business needs sets us apart. Whether it’s
            ransomware protection, data recovery, or security enhancements, we
            ensure your organization stays secure without compromising on
            budget.
          </Paragraph>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Contact us today to learn how we can protect your data and transform
            your existing infrastructure into a robust defense against cyber
            threats.
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
            style={{
              marginBottom: "5rem",
              textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)",
            }}
          >
            Seamless and Secure Global Data Sharing with Software-Defined
            Networking (SDN)
          </Title>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{
              textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)",
            }}
          >
            Client Overview
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
            style={{ marginBottom: "3rem" }}
          >
            A commodity trading company operating across Canada, Australia,
            Singapore, India, and China needed a secure, efficient, and
            real-time solution to share critical product details across its
            global operations.
          </Paragraph>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            The Challenge the organization faced
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
              marginBottom: "3rem",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Global Operations: Efficiently connecting offices in
                geographically diverse locations.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Security Risks: Ensuring sensitive product information remained
                secure from unauthorized access.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Real-Time Data Sharing: Maintaining low-latency, high-speed
                communication for dynamic trading operations
              </Point>
            </li>
          </ul>
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={2}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Our Solution
          </Title>
          <Carousel
            infinite={true}
            autoPlay={true}
            direction={DIRECTIONS.FORWARD}
            delay={2000}
            itemInfo={[
              {
                title: "In-House Secure SDN Implementation",
                points: [
                  "Designed and implemented a secure Software-Defined Network (SDN) solution tailored to the client’s needs.",
                  "Enabled centralized control over network resources to manage data flow securely and dynamically across global locations.",
                ],
              },
              {
                title: "Optimized for Real-Time Operations",
                points: [
                  "Configured the network for real-time product detail sharing, ensuring latency was minimized for smooth business operations.",
                ],
              },
              {
                title: "Enhanced Security",
                points: [
                  "Integrated advanced encryption and access control protocols to safeguard sensitive product information.",
                  "Established monitoring systems for detecting and mitigating potential threats in real time.",
                ],
              },
              {
                title: "Scalable & Cost-Effective",
                points: [
                  "Built an in-house solution, eliminating the need for expensive third-party services while ensuring scalability for future growth.",
                ],
              },
            ]}
          />
          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Results
          </Title>
          <ul
            style={{
              paddingInlineStart: "1rem",
              padding: "0.5rem max(4vw, 1.5rem)",
              marginBottom: "3rem",
            }}
          >
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Global Connectivity: The company now has a seamless network
                connecting all international offices, supporting secure,
                real-time data sharing.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Improved Security: Sensitive product details are transmitted
                with advanced encryption, protecting against cyber threats.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Operational Efficiency: Real-time communication enables quicker
                decision-making and improved productivity across teams.
              </Point>
            </li>
            <li>
              <Point
                textFormat="left"
                padding="0.5rem 0rem"
                color="rgba(85, 80, 140)"
              >
                Cost Savings: Implementing the SDN in-house saved significant
                costs while offering a scalable solution.
              </Point>
            </li>
          </ul>

          <Title
            textFormat="center"
            padding="0.5rem 0rem"
            size={4}
            style={{ textShadow: "0px 0px 10px rgba(20, 20, 50, 0.2)" }}
          >
            Why Choose Us?
          </Title>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            We specialize in creating secure, custom solutions that address
            complex global connectivity challenges. Our in-house SDN
            implementation showcases our ability to deliver high-performing,
            secure, and cost-effective networks for businesses with unique
            needs.
          </Paragraph>
          <Paragraph
            textFormat="center"
            padding="0.5rem 0rem 1rem"
            color="rgba(85, 80, 140)"
          >
            Partner with us to build secure, real-time networking solutions for
            your global operations.
          </Paragraph>
        </Container>
      </Page>
    </>
  );
};

export default About;
