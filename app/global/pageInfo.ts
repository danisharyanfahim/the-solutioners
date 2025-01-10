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
    title: "SOC",
    url: "/services/soc",
    card: {
      title: "SOC Services",
      paragraph: `Our locally based Security Operations Center (SOC) offers cutting-edge solutions tailored to protect your business from evolving cyber threats.`,
    },
    icon: "static/icons/services-icons/saas-icon.png",
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
    title: "Testimonials",
    url: "/testimonials",
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
