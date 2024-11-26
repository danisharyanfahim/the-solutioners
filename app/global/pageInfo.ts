interface serviceInfo {
  title: string;
  url: string;
  card: { title: string; paragraph: string };
  icon: string;
}

export const servicesInfo: serviceInfo[] = [
  {
    title: "API Security",
    url: "/services/api-security",
    card: {
      title: "Protect Your Connections",
      paragraph: `Secure your APIs with our expert solutions that prevent breaches, ensure compliance, and maintain system integrity. We keep your digital infrastructure safe, so you can focus on growing your business with confidence.`,
    },
    icon: "static/icons/services-icons/api-icon.png",
  },
  {
    title: "BCDR",
    url: "/services/bcdr",
    card: {
      title: "BCDR Services",
      paragraph: `Business Continuity and Disaster Recovery planning to ensure your operations can withstand and recover from unexpected disruptions. Our services include strategy development, testing, and implementation of recovery plans.`,
    },
    icon: "static/icons/services-icons/bcdr-icon.png",
  },
  {
    title: "BDR",
    url: "/services/bdr",
    card: {
      title: "BDR and Browser-Based Antivirus Software",
      paragraph: `Advanced Browser Detection and Response (BDR) and antivirus solutions that protect against web-based threats. Our tools provide real-time scanning, phishing protection, and malicious site blocking to enhance your browsing security.`,
    },
    icon: "static/icons/services-icons/bdr-icon.png",
  },
  {
    title: "Cloud Security",
    url: "/services/cloud-security",
    card: {
      title: "Cloud Security Services",
      paragraph: `Robust security solutions designed for cloud environments, ensuring the confidentiality, integrity, and availability of your data. We provide cloud access security, data protection, and compliance solutions to secure your cloud infrastructure.`,
    },
    icon: "static/icons/services-icons/cloud-icon.png",
  },
  {
    title: "Incident Response",
    url: "/services/incident-response",
    card: {
      title: "Incident Response Services",
      paragraph: `Rapid response and management of security incidents to minimize damage and recovery time. Our team provides expert guidance and support to effectively handle and mitigate breaches and attacks.`,
    },
    icon: "static/icons/services-icons/incident-icon.png",
  },
  {
    title: "OT Security",
    url: "/services/ot-security",
    card: {
      title: "OT Security Services",
      paragraph: `Protection for Operational Technology (OT) systems, including industrial control systems and critical infrastructure. Our services focus on securing the technology that supports essential operations and industrial processes.`,
    },
    icon: "static/icons/services-icons/ot-icon.png",
  },
  {
    title: "Penetration Testing",
    url: "/services/penetration-testing",
    card: {
      title: "Penetration Testing Services",
      paragraph: `Simulated attacks to identify and address vulnerabilities in your systems before real attackers can exploit them. We conduct comprehensive assessments to strengthen your security defenses.`,
    },
    icon: "static/icons/services-icons/penetration-icon.png",
  },
  {
    title: "Risk Assessment",
    url: "/services/risk-assessment",
    card: {
      title: "Cyber Risk Assessment",
      paragraph: `A thorough evaluation of your organization’s risk exposure, identifying vulnerabilities and potential threats. We deliver actionable insights to enhance your risk management strategies and improve overall security posture.`,
    },
    icon: "static/icons/services-icons/risk-icon.png",
  },
  {
    title: "SAAS",
    url: "/services/saas",
    card: {
      title: "SAAS Services",
      paragraph: `Protect your business with our Managed Security Service Provider (MSSP) solutions. We offer 24/7 monitoring, advanced threat detection, and rapid response to keep your data safe from evolving cyber threats. We tailor our approach to safeguard your digital assets against a wide array of cyber threats.`,
    },
    icon: "static/icons/services-icons/saas-icon.png",
  },
  {
    title: "System Integration",
    url: "/services/system-integration",
    card: {
      title: "System Integration Services",
      paragraph: `Expert integration of diverse systems and technologies to streamline operations and enhance efficiency. We ensure that all components work seamlessly together, optimizing performance and security.`,
    },
    icon: "static/icons/services-icons/system-icon.png",
  },
];

export const pageInfo = [
  {
    title: "Home",
    url: "/",
    isDropDown: false,
    iconURL: "static/icons/navbar-icons/home-icon.png",
  },
  {
    title: "About",
    url: "/about",
    isDropDown: false,
    iconURL: "static/icons/navbar-icons/about-icon.png",
  },
  {
    title: "Services",
    url: "/services",
    isDropDown: true,
    dropDownInfo: servicesInfo,
    iconURL: "static/icons/navbar-icons/services-icon.png",
  },
  {
    title: "Contact",
    url: "/contact",
    isDropDown: false,
    iconURL: "static/icons/navbar-icons/contact-icon.png",
  },
];
