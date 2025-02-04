import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HelpHive.io</h3>
            <p className="text-sm">
              Connecting you with trusted helpers in your area. Find babysitters, house help, and more with ease.
            </p>
          </div>
          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:underline">Careers</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Email: <a href="mailto:support@helphive.io" className="hover:underline">support@helphive.io</a>
            </p>
            <p className="text-sm">
              Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} HelpHive.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;