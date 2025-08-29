export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: {
    label: string;
    icon: string;
  }[];
}

export interface Testimonial {
  name: string;
  feedback: string;
  imageUrl: string;
}


export type ApiResponse<T> =
  | { data: T; error?: never }
  | { data?: never; error: string };

