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
      "Event management web app. Organizers create events, set available stands, upload event maps, and approve or reject applications. Vendors browse events and apply for specific stands, with all reservations tracked in a database to prevent double-booking. Fully responsive, with separate Organizer and Vendor workflows. Payment processing is out of scope.",
    images: ['/images/stallspot.png'],
    website: '',
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
    images: ['/images/makerteca.png'],
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
      "Built with a team for VandVoyage.com, aimed at group travellers planning trips like all-inclusive getaways or multi-airport. Rather than optimizing purely for price, it weighs amenities, baggage, and trip fit to avoid the hidden trade-offs of bottom-dollar fares. Users describe their trip through guided prompts and an amenities checklist, and the tool filters and ranks flights against those preferences. I built the React frontend, integrated the Google Flights and Gemini APIs for live data and AI-assisted research, and handled backend calls through Netlify server actions.",
    images: ['/images/vandvoyage.png'],
    website: "https://vandvoyage.netlify.app/",
    github: "https://github.com/miguelcaballero95/mohawk-vandvoyage",
  },
  {
    name: "Gravity Forms to Jobber Integration",
    type: "Freelance / Client Project (Upwork)",
    description:
      "A WordPress plugin that automatically creates requests in Jobber whenever a client submits a Gravity Forms entry, eliminating manual data entry.",
    stack: "WordPress, PHP, Gravity Forms, Jobber GraphQL API",
    details:
      "Built a custom WordPress plugin for a client whose business ran on Jobber CRM. When a customer submitted a Gravity Forms entry, the plugin used Jobber's GraphQL API to automatically create a corresponding request (or other entity) in Jobber — removing the need to manually re-enter form submissions. Also built an admin interface allowing the client to map each Gravity Forms field to its corresponding Jobber entity field, so the integration could adapt as his forms changed without needing code updates.",
    images: [],
    website: "",
    github: "",
  },
];