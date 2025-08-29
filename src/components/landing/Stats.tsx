const Stats = () => {
  return (
    <section className="bg-white py-20 px-4 text-center relative z-10">
      {/* Tagline */}
      <h5 className="text-purple-600 font-medium mb-2">
        ● Master Rajesh Sharma – Vedic Astrologer & Spiritual Guide
      </h5>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Meet Your <span className="text-purple-600">Cosmic Guide</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        With over 15 years of experience in Vedic Astrology, I have dedicated my life to helping individuals discover their true potential through the ancient wisdom of the stars. My journey began in the sacred temples of India, where I studied under renowned masters of astrological sciences.
      </p>

      {/* Badges */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        <span className="bg-purple-100 text-purple-700 text-sm px-4 py-1 rounded-full">15+ Years Experience</span>
        <span className="bg-blue-100 text-blue-700 text-sm px-4 py-1 rounded-full">Certified Astrologer</span>
        <span className="bg-yellow-100 text-yellow-700 text-sm px-4 py-1 rounded-full">Vedic Expert</span>
      </div>

      {/* Stats */}
      <div className="flex justify-center flex-wrap gap-10 text-center">
        <div>
          <p className="text-3xl font-bold text-purple-600">2000+</p>
          <p className="text-sm text-gray-600">Happy Clients Guided</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-500">4.9★</p>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">25+</p>
          <p className="text-sm text-gray-600">Countries Served</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
