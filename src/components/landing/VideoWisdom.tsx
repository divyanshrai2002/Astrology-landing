'use client';

const VideoWisdom = () => {
  return (
    <section className="bg-[#F1F5FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Label */}
        <div className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
          ▶️ Video Content
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
          Video Wisdom
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore the mysteries of astrology through our comprehensive video library, 
          featuring detailed explanations and practical guidance for your spiritual journey.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-[#5A50FF] hover:bg-[#4b44e6] text-white font-semibold px-6 py-2 rounded-lg shadow-md inline-flex items-center gap-2 transition duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 16.5l6-4.5-6-4.5v9z" />
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z" />
            </svg>
            Trending Video
          </button>
          <button className="bg-[#5A50FF] hover:bg-[#4b44e6] text-white font-semibold px-6 py-2 rounded-lg shadow-md inline-flex items-center gap-2 transition duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Popular Video
          </button>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              {/* Thumbnail Placeholder */}
              <div className="h-40 bg-gray-200 relative flex items-center justify-center">
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                  15:32
                </span>
              </div>

              {/* Video Info */}
              <div className="p-4 text-left">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Understanding Your Birth Chart
                </h3>
                <div className="text-sm text-gray-500 flex items-center gap-4">
                  <span>👁️ 25K</span>
                  <span>⏱️ 15:32</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoWisdom;

