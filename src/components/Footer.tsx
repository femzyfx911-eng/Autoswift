import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-midnight-light border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Redefining luxury travel with a curated fleet of premium vehicles and personalized concierge services for the discerning traveler.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-midnight transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-midnight transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-midnight transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-accent text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-accent text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-accent text-sm transition-colors">Services</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-accent text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-accent text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>1456 Oakwood Dr,<br />Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>jonaissabel528@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="text-accent font-bold text-[10px] uppercase tracking-tighter w-5">ZNG</span>
                <span>1427846641</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to receive exclusive offers and luxury travel updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="w-full bg-accent text-midnight font-bold py-3 rounded-lg hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} AUTOSWIFTRIDE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
