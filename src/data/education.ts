export interface Education {
  period: string;
  title: string;
  institution: string;
  description: string;
};

export const education: Education[] = [
  {
    period: "Sep 2023 – Dec 2026",
    title: "Advanced Diploma, Computer Systems Technology – Software Development",
    institution: "Mohawk College, Hamilton, Ontario",
    description:
      "Focused on software development, including backend development, databases, and system design. Recipient of the Dean's Honours List.",
  },
  {
    period: "March 2025",
    title: "Microsoft Certified: Azure Fundamentals AZ900",
    institution: "Microsoft",
    description:
      "Certification demonstrating foundational knowledge of cloud services and how they are delivered through Microsoft Azure.",
  },
  {
    period: "Nov 2022 – May 2023",
    title: "English Program",
    institution: "ILAC (International Language Academy of Canada), Toronto, Ontario",
    description:
      "Completed an intensive English language program to build academic and professional English proficiency ahead of post-secondary studies in Canada.",
  },
];