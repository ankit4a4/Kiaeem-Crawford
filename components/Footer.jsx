import Link from 'next/link';
import { Instagram, Timer as Vimeo, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-bebas text-3xl tracking-wider mb-4">
              Kiaeem  Crawford
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Premium cinematic film production company specializing in commercial, narrative, 
              and documentary filmmaking. Creating visual stories that resonate and inspire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Vimeo size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-xl tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bebas text-xl tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-white/70 text-sm">
                <Mail size={16} className="mr-2" />
                niicellc@aol.com
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Phone size={16} className="mr-2" />
                   7083073201
              </li>
              <li className="flex items-start text-white/70 text-sm">
                <MapPin size={16} className="mr-2 mt-0.5" />
                1836 Dewey St. Apt 4Hollywood Fl 33020
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2025 Kiaeem  Crawford. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                  
              </Link>
              <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
                  
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;