export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role?: string;
}

export interface PosterData {
  id: number;
  title: string;
  subtitle: string;
  theme: 'blue' | 'green' | 'dark';
  icon: string;
  imageUrl?: string;
}