'use client';
import React, { useEffect, useState } from 'react';
import { Calendar, Phone, Users, Target, Star } from 'lucide-react';
import { HeroData } from '@/types';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </div>
  );
};

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hero')
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-12 flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-purple-500 rounded-full border-b-transparent"></div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fff5e6] via-[#fffbe6] to-[#f3e8ff] py-12">
      {/* Decorative floating stars/moon/sun */}
      <div className="absolute top-10 left-10 text-orange-400 text-2xl animate-pulse">⭐</div>
      <div className="absolute top-24 right-16 text-yellow-500 text-xl animate-float">✨</div>
      <div className="absolute bottom-20 left-20 text-purple-400 text-xl animate-pulse">🌙</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium select-none">
              Certified Vedic Astrologer
            </div>

            <div className="space-y-3 max-w-md">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
                Unlock Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Cosmic
                </span>{' '}
                Destiny
              </h1>
              <p className="text-gray-600 text-lg">
                {heroData?.subtitle ??
                  'Discover personalized readings, cosmic guidance, and spiritual insights that illuminate your life’s journey.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-shadow duration-300">
                <Calendar size={16} />
                Book Now
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-300">
                <Phone size={16} />
                Call Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mt-6">
              <div>
                <div className="text-indigo-600 font-bold text-xl">1B+</div>
                <div className="text-gray-700 text-xs">Followers social media</div>
              </div>
              <div>
                <div className="text-indigo-600 font-bold text-xl">800k</div>
                <div className="text-gray-700 text-xs">Registration booked</div>
              </div>
              <div>
                <div className="text-indigo-600 font-bold text-xl">25y</div>
                <div className="text-gray-700 text-xs">Years of experience</div>
              </div>
            </div>
          </div>

          {/* Right Circular Image */}
          <div className="relative flex justify-center">
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] rounded-full overflow-hidden border-4 border-indigo-200 shadow-xl">
              <img
                src="/Divyanshphoto.jpeg"
                alt="Astrologer"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-purple-500 rounded-full p-3 shadow-lg animate-bounce">
              <span className="text-white text-lg">🌙</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce delay-1000">
              <span className="text-gray-900 text-lg">☀️</span>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ServiceCard
            icon={<Star className="w-6 h-6 text-purple-600" />}
            title="Birth Chart Analysis"
            description="Complete personality analysis and life path guidance through your cosmic blueprint."
          />
          <ServiceCard
            icon={<Target className="w-6 h-6 text-blue-600" />}
            title="Gemstone Therapy"
            description="Personalized gemstone recommendations to enhance positive energies and well-being."
          />
          <ServiceCard
            icon={<Users className="w-6 h-6 text-green-600" />}
            title="Vastu Consultation"
            description="Harmonize your spaces with ancient principles for prosperity and peace."
          />
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

