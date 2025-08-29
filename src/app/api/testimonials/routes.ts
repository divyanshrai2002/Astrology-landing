import { NextResponse } from 'next/server';
import { Testimonial } from '@/types';

export async function GET() {
  const testimonials: Testimonial[] = [
    {
      name: "Sophia Lee",
      feedback: "The session was life-changing! I got so much clarity about my career path and personal growth.",
      imageUrl: "/images/client1.jpg"
    },
    {
      name: "David Kim",
      feedback: "Accurate predictions and very professional approach. The insights were incredibly valuable.",
      imageUrl: "/images/client2.jpg"
    },
    {
      name: "Emma Watson",
      feedback: "I feel more confident about my future now. Amazing experience with deep spiritual guidance!",
      imageUrl: "/images/client3.jpg"
    },
    {
      name: "Michael Chen",
      feedback: "The birth chart analysis revealed so many hidden aspects of my personality. Truly enlightening!",
      imageUrl: "/images/client4.jpg"
    }
  ];

  return NextResponse.json(testimonials);
}