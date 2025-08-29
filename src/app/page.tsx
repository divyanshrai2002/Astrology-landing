import { Hero, Services, Offer,Footer } from '@/components/landing';
// import Footer from '@/components/landing/Footer'; // Correct

import Stats from '@/components/landing/Stats';
import VideoWisdom from '@/components/landing/VideoWisdom';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats/>
      <Services />
      <VideoWisdom/>
      <Offer />
      
    <Footer/>
    </main>
  );
}