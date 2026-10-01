export interface Experience {
  period: string
  role: string
  company: string
  description: string
  details: string
  activities: string[]
  technologies: string
}

export const experiences: Experience[] = [
  {
    period: "Sep 2026 – Present",
    role: "Platform Engineer (Part-time)",
    company: "Procor Limited",
    description: "Automating deployment pipelines and managing containerized infrastructure.",
    details:
      "Continuing on from two co-op terms, I work part-time supporting Procor's software delivery process end to end — from pipeline automation to production monitoring — while collaborating closely with the development team to improve tooling and workflows.",
    activities: [
      "Automated deployment of software updates and configuration changes to reduce manual errors and release time",
      "Configured and deployed containerized application instances on Kubernetes across local and cloud environments",
      "Built and enhanced CI/CD pipelines to streamline the development team's release process",
      "Monitored production systems and resolved issues to maintain uptime and reliability",
      "Collaborated with development teams to improve pipelines, tooling, and cross-team workflows",
      "Documented maintenance procedures for ongoing operations",
    ],
    technologies: "Jenkins, Docker, Kubernetes, Jira, Linux",
  },
  {
    period: "May 2025 – Dec 2025, May 2026 – Aug 2026",
    role: "DevOps Engineer (Co-op)",
    company: "Procor Limited",
    description: "Built and maintained CI/CD pipelines and containerized deployments across two co-op terms.",
    details:
      "Across two co-op terms, I worked on automating the software delivery process — building CI/CD pipelines, containerizing applications, and deploying them to Kubernetes — which laid the foundation for my current role at Procor.",
    activities: [
      "Built and enhanced CI/CD pipelines to support the development team's release process",
      "Configured and deployed containerized application instances on Kubernetes",
      "Installed and configured containerized software packages",
      "Monitored systems and troubleshot issues as they arose",
      "Configured workflow automation to support sprint tracking and team communication",
    ],
    technologies: "Jenkins, Docker, Kubernetes, Jira",
  },
  {
    period: "May 2024 – Dec 2024",
    role: "Peer Tutor",
    company: "Mohawk College Learning Support Centre",
    description: "Supported fellow students through weekly programming lab sessions.",
    details:
      "I ran open lab sessions to help students work through programming concepts and assignments, balancing this alongside my own coursework.",
    activities: [
      "Ran weekly open lab sessions for 5+ students, planning guided learning activities",
      "Communicated with students, faculty, and team leads to support academic goals",
    ],
    technologies: "Java, Python",
  },
  {
    period: "Sep 2021 – May 2023",
    role: "Magento Backend Developer",
    company: "Wolfsellers — Adobe Gold Partner",
    description: "Developed custom backend modules and APIs for Adobe Commerce storefronts.",
    details:
      "I built and extended backend functionality for e-commerce stores running on Magento/Adobe Commerce, designing APIs that connected backend business logic to the storefront and to external services.",
    activities: [
      "Designed and developed custom backend modules to extend core e-commerce functionality",
      "Built GraphQL endpoints to expose backend business logic to internal systems and third-party consumers",
      "Integrated third-party APIs to automate and streamline business operations",
      "Collaborated with frontend developers to ensure smooth integration between backend services and the storefront",
    ],
    technologies: "PHP, GraphQL, Linux",
  },

]