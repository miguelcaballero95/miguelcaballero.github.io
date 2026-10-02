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
    description: "Event management platform for organizing markets fairs, and other outdoor events, with role-based workflows.",
    stack: "Laravel, Inertia, Pest, Laravel Cloud",
    details: "Role-based access control separates Organizer and Vendor permissions: organizers create events, define stand inventory, upload event maps, and approve or reject vendor applications; vendors browse events and apply to specific stands. A relational schema tracks events, stands, and applications to prevent double-booking at the database level. Payment processing is intentionally out of scope — the focus is the application and management workflow.",
    images: [
      '/images/stallspot/home.webp',
      '/images/stallspot/register.webp',
    ],
    website: '',
    github: 'https://github.com/miguelcaballero95/capstone-project'
  },
  {
    name: "Makerteca",
    type: "Client Project",
    description: "Online platform with a wide catalog of maker activities tied to the school curriculum, organized by subject and grade level to make it quick and easy to run Maker/STEAM classes.",
    stack: "WordPress, PHP, React Native (Expo), Next.js",
    details: "Ongoing work across Makerteca's full stack: maintaining and modernizing a custom WordPress theme and plugin, building and supporting a React Native mobile app with Expo, and developing a new Next.js frontend.",
    images: [
      '/images/makerteca/home.webp',
      '/images/makerteca/login.webp',
      '/images/makerteca/activities.webp',
      '/images/makerteca/curso.webp',
      '/images/makerteca/profile.webp',
    ],
    website: 'https://makerteca.com',
    github: ''
  },
  {
    name: "VandVoyage Trip Tool",
    type: "Academic / Team Project",
    description: "A Trip tool for group travellers that prioritizes overall trip fit over the cheapest fare.",
    stack: "React, TypeScript, Netlify",
    details: "Built with a school team. Rather than optimizing purely for price, it weighs amenities, baggage, and trip fit to avoid the hidden trade-offs of bottom-dollar fares. Users describe their trip through guided prompts and an amenities checklist, and the tool filters and ranks flights against those preferences. I built the React frontend, integrated APIs for live data and AI-assisted research, and handled backend calls through Netlify server actions.",
    images: [
      '/images/vandvoyage/home.webp',
      '/images/vandvoyage/login.webp',
      '/images/vandvoyage/results.webp',
      '/images/vandvoyage/single.webp',
      '/images/vandvoyage/filters.webp',
    ],
    website: "https://vandvoyage.netlify.app/",
    github: "https://github.com/miguelcaballero95/mohawk-vandvoyage",
  },
  {
    name: "Gravity Forms to Jobber Integration",
    type: "Client Project",
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