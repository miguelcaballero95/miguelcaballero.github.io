export interface Project {
  name: string;
  type: string;
  description: string;
  stack: string;
  details: string;
  images: string[];
  website: string;
  github: string;
}

export const projects = [
  {
    name: "Makerteca",
    type: "Client Project",
    description:
      "An online platform with a wide catalog of maker activities tied to the school curriculum, organized by subject and grade level to make it quick and easy to run Maker or STEAM classes.",
    stack: "WordPress, PHP, React Native (Expo), Next.js",
    details:
      "Ongoing work across Makerteca's full stack: maintaining and modernizing a custom WordPress theme and plugin (introducing testing and CI/CD to an existing codebase), building and supporting a React Native mobile app with Expo, and developing a new Next.js frontend. [ADD: any specific feature, metric, or outcome worth mentioning — e.g. user count, a migration milestone, a specific feature you built]",
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85'
    ],
    website: 'https://makerteca.com',
    github: 'https://github.com/miguelcaballero95'
  },
  {
    name: 'StallSpot',
    type: "Academic / Capstone Project",
    description:
      "A platform for organizing local markets, craft fairs, and food festivals, where organizers manage event stands and vendors handle their own reservations.",
    stack: "Laravel, Inertia, Pest, Laravel Cloud",
    details:
      "Built a web platform that replaces the spreadsheets and back-and-forth messages organizers typically rely on to coordinate vendors. Organizers can create events, define the number of available stands, upload event maps, and approve or reject vendor applications. Vendors can browse upcoming events and apply for specific stands, with all event and reservation data tracked in a database to prevent double-booking. The app is fully responsive for use on both desktop and mobile, and supports two distinct user roles — Organizer and Vendor — each with its own workflow. Payment processing is intentionally out of scope; the focus is the application and management workflow itself.",
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85'
    ],
    website: '#',
    github: 'https://github.com/miguelcaballero95/capstone-project'
  },
];