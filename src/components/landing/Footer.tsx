import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white py-16 px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-bold text-xl text-white">
            <Image
              src="/logo.png"
              alt="Pipepro Logo"
              width={32}
              height={32}
              className="inline-block"
            />
            <span>Pipepro</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Proin pretium sem libero, nec aliquet augue lobortis in. Phasellus nibh quam, molestie.
          </p>
          <div className="flex space-x-3 text-gray-400">
            <a href="#" className="hover:text-white">Fb</a>
            <a href="#" className="hover:text-white">Be</a>
            <a href="#" className="hover:text-white">In</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Drip Detectives</li>
            <li>Leak Stop Specialists</li>
            <li>Pipe Dream Team</li>
            <li>Rapid Repair Squad</li>
            <li>Clear Flow Plumbers</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-5">Contact Info</h3>
          <p className="text-gray-400 text-sm mb-3">
            <span className="block font-semibold">Call Now</span>
            +125 (895) 658 568
          </p>
          <p className="text-gray-400 text-sm">
            <span className="block font-semibold">Office Address</span>
            66 Broklyant, New India
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-14 pt-6 text-center text-gray-600 text-xs">
        © Pipepro 2024 | All Rights Reserved &nbsp;&nbsp;&nbsp;&nbsp;
        Privacy & Policy &nbsp;&nbsp;&nbsp;&nbsp;
        Terms and Conditions
      </div>
    </footer>
  );
}
