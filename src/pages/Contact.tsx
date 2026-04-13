import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Have a specific request or need assistance with your booking? Our concierge team is available 24/7 to ensure your experience is flawless.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: 'Email Us', value: 'jonaissabel528@gmail.com', sub: 'Response within 2 hours' },
                { icon: MapPin, title: 'Visit Us', value: '1456 Oakwood Dr, Austin, TX 78701', sub: 'Mon-Sat: 9am - 8pm' },
                { icon: MessageSquare, title: 'Zangi ID', value: '1427846641', sub: 'Instant messaging' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl font-display font-bold text-white mb-1">{item.value}</p>
                    <p className="text-sm text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 rounded-[40px]"
          >
            <h3 className="text-3xl font-display font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-midnight border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-midnight border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <select className="w-full bg-midnight border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Chauffeur Service</option>
                  <option>Corporate Account</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-midnight border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-accent text-midnight font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
