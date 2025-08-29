const testimonials = [
  { title: 'Vases Family', type: 'Pottery', image: '/image1.png' },
  { title: 'Camel Portrait', type: 'Oil Painting', image: '/image3.png' },
  { title: 'Euforia', type: 'Abstract Painting', image: '/portrait-white-man-isolated.jpg' },
  { title: 'Classic Watch', type: 'Object Design', image: '/front-view-man-posing.jpg' },
  { title: 'White Angel', type: 'Sculpture', image: '/photo1.jpg' },
];

// Or if your images are from a remote URL or imported, replace the paths accordingly.

const TestimonialsOffer = () => {
  // Your existing timer code remains the same

  return (
    <section className="bg-[#F1F5FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and View All link remain unchanged */}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {testimonials.map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.type}</p>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer section code remains unchanged */}
    </section>
  );
};

export default TestimonialsOffer;





