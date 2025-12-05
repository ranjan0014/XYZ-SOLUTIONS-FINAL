import { Testimonial, Feature, PosterData } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aman Verma",
    role: "Fleet Operation Manager",
    feedback: "Latiyal Nexus Solutions has transformed the way we track our delivery vehicles. The real-time monitoring system has reduced delays by almost 40%. Highly reliable services."
  },
  {
    name: "Shristhi Malhotra",
    role: "Logistics Head",
    feedback: "The dashboard insights help us detect route inefficiencies instantly. Our team relies on Latiyal Nexus every day. The accuracy is unmatched."
  },
  {
    name: "Rahul Singh",
    role: "Small Business Owner",
    feedback: "I used to worry about the safety of my transport vehicles but their anti-theft alerts gave me complete peace of mind. Absolutely worth it."
  },
  {
    name: "Neha Prasad",
    role: "Transportation Supervisor",
    feedback: "Fuel usage tracking helped us cut unnecessary expenses significantly. Latiyal Nexus provides real value for money."
  },
  {
    name: "Vikram Rao",
    role: "Delivery Fleet Lead",
    feedback: "The system is simple, modern and very intuitive. Even our drivers found it easy to adapt. Excellent support from the team as well."
  }
];

export const FEATURES: Feature[] = [
  {
    title: "GPS Vehicle Tracking",
    description: "Pinpoint accuracy for your assets, anywhere on the globe.",
    iconName: "MapPin"
  },
  {
    title: "Live Route Monitoring",
    description: "Real-time dashboard to visualize fleet movement instantaneously.",
    iconName: "Activity"
  },
  {
    title: "Anti-Theft Alerts",
    description: "Instant notifications and engine immobilization protocols.",
    iconName: "ShieldAlert"
  },
  {
    title: "Fleet Analytics",
    description: "Deep data insights to optimize performance and reduce costs.",
    iconName: "BarChart3"
  },
  {
    title: "Driver Safety",
    description: "Monitor behavior, speed, and braking for a safer journey.",
    iconName: "UserCheck"
  },
  {
    title: "Fuel Tracking",
    description: "Precise consumption logs to eliminate wastage and theft.",
    iconName: "Fuel"
  }
];

export const POSTERS: PosterData[] = [
  {
    id: 1,
    title: "TOTAL CONTROL",
    subtitle: "XYZ SOLUTIONS",
    theme: "blue",
    icon: "Globe"
  },
  {
    id: 2,
    title: "SECURE FLEET",
    subtitle: "ANTI-THEFT PROTOCOL",
    theme: "green",
    icon: "Lock"
  },
  {
    id: 3,
    title: "SMART DATA",
    subtitle: "REAL-TIME ANALYTICS",
    theme: "dark",
    icon: "Cpu"
  }
];
