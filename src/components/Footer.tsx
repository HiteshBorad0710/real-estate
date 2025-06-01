import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Real Estate App</h3>
            <p className="mb-4">Your trusted partner in finding the perfect home. We make real estate simple and accessible for everyone.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=apartments" className="hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=houses" className="hover:text-white transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villas" className="hover:text-white transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/properties?type=luxury" className="hover:text-white transition-colors">
                  Luxury Homes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Address:</span>
                  123 Real Estate Ave, Miami, FL 33101
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  (555) 123-4567
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  info@realestateapp.com
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Hours:</span>
                  Mon-Fri: 9AM-6PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Real Estate App. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 