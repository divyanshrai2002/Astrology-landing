const services = [
  { title: "Birth Chart Reading", desc: "Complete natal chart analysis revealing your personality, strengths, and life path.", color: "bg-yellow-400" },
  { title: "Love & Relationships", desc: "Compatibility analysis and guidance for romantic relationships and marriage.", color: "bg-pink-400" },
  { title: "Career Guidance", desc: "Professional path analysis and timing for career changes and opportunities.", color: "bg-blue-400" },
  { title: "Vedic Astrology", desc: "Traditional Indian astrology with precise calculations and remedial measures.", color: "bg-purple-400" },
  { title: "Vastu Consultation", desc: "Harmonizing your living and working spaces with cosmic energies.", color: "bg-green-400" },
  { title: "Gemstone Therapy", desc: "Personalized gemstone recommendations for enhancing positive energies.", color: "bg-violet-400" },
  { title: "Muhurta Selection", desc: "Auspicious timing selection for important life events and ceremonies.", color: "bg-cyan-400" },
  { title: "Spiritual Guidance", desc: "Meditation practices and spiritual development based on your cosmic blueprint.", color: "bg-yellow-300" },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-pink-100 via-yellow-100 to-blue-100 py-16 px-4 text-center">
      <h4 className="text-purple-500 font-semibold mb-2">Astrological Services</h4>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Comprehensive <span className="text-blue-500">Cosmic Services</span>
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        Discover a wide range of astrological services designed to illuminate your path...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white pt-6 pb-8 px-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            {/* Centered Color Dot */}
            <div className="flex justify-center mb-4">
              <div className={`w-6 h-6 rounded-lg ${service.color}`}></div>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

