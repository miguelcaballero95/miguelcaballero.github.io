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
    name: "VandVoyage Flight Research Tool",
    type: "Academic / Team Project",
    description:
      "A flight research tool for group travellers that prioritizes overall trip fit over the cheapest fare — built for VandVoyage.com.",
    stack: "React, TypeScript, Gemini API",
    details:
      "Worked as part of a team to build a flight research tool for VandVoyage.com aimed at group travellers planning trips like all-inclusive getaways or multi-airport European itineraries. Rather than optimizing purely for price, the tool takes a more holistic approach — factoring in amenities, baggage, and trip fit — to help groups avoid the hidden trade-offs of bottom-dollar fares. Users describe their trip through guided prompts (group size, accessibility needs, travel experience, destination type) and set a checklist of must-have, nice-to-have, and unnecessary amenities (e.g. Wi-Fi, carry-on only, seatback TVs); the tool then filters and ranks flight options against those preferences, including constraints like direct-flights-only. On the frontend, I built the UI in React and integrated calls to the Google Flights API and other travel APIs for live flight data, along with the Gemini API to power AI-assisted research, using Netlify server actions to handle the backend API calls.",
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85'
    ],
    website: "",
    github: "",
  },
  {
    name: "Gravity Forms to Jobber Integration",
    type: "Freelance / Client Project (Upwork)",
    description:
      "A WordPress plugin that automatically creates requests in Jobber whenever a client submits a Gravity Forms entry, eliminating manual data entry.",
    stack: "WordPress, PHP, Gravity Forms, Jobber GraphQL API",
    details:
      "Built a custom WordPress plugin for a client whose business ran on Jobber CRM. When a customer submitted a Gravity Forms entry, the plugin used Jobber's GraphQL API to automatically create a corresponding request (or other entity) in Jobber — removing the need to manually re-enter form submissions. Also built an admin interface allowing the client to map each Gravity Forms field to its corresponding Jobber entity field, so the integration could adapt as his forms changed without needing code updates.",
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85'
    ],
    website: "",
    github: "",
  },
];