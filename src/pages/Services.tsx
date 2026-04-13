import { motion } from 'motion/react';
import { Car, Shield, Clock, MapPin, CreditCard, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Car,
      title: 'Luxury Fleet Rental',
      desc: 'Access our curated collection of high-end vehicles, from exotic sports cars to executive sedans.'
    },
    {
      icon: Shield,
      title: 'Chauffeur Service',
      desc: 'Professional, discreet drivers available for events, business travel, or personalized tours.'
    },
    {
      icon: Clock,
      title: 'Long-term Leasing',
      desc: 'Flexible leasing options for individuals and corporations looking for premium long-term solutions.'
    },
    {
      icon: MapPin,
      title: 'Airport Transfers',
      desc: 'Punctual and comfortable transfers to and from all major airports with meet-and-greet service.'
    },
    {
      icon: CreditCard,
      title: 'Corporate Accounts',
      desc: 'Tailored solutions for businesses, including priority booking and consolidated monthly billing.'
    },
    {
      icon: Headphones,
      title: '24/7 Concierge',
      desc: 'Dedicated support for all your travel needs, including restaurant bookings and event access.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
            Bespoke <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We go beyond simple car rentals. Our comprehensive suite of services is designed to provide a seamless, luxury travel experience tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl group hover:border-accent/30 transition-all"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-midnight transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose <span className="text-gradient">Us</span></h2>
            <p className="text-slate-400">The Autoswiftride advantage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Exclusive Fleet', desc: 'We offer vehicles that you won\'t find at standard rental agencies, including limited editions and custom specs.' },
              { title: 'No Hidden Fees', desc: 'Transparent pricing with all insurance and taxes included upfront. No surprises at the counter.' },
              { title: 'Global Network', desc: 'With partners in over 50 cities, we can arrange your luxury travel wherever your journey takes you.' },
              { title: 'Bespoke Experience', desc: 'Every rental is tailored to your preferences, from your favorite music to specific cabin scents.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-accent font-display font-black text-4xl opacity-20 shrink-0">0{idx + 1}</div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Highlight */}
        <div className="mt-32 rounded-[40px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Service"
            className="w-full h-[500px] object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight to-transparent flex items-center px-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-bold mb-6">Experience the Difference</h2>
              <p className="text-lg text-slate-300 mb-8">
                Our team is dedicated to providing you with the most seamless luxury travel experience. Contact us directly for personalized arrangements.
              </p>
              <a 
                href="mailto:jonaissabel528@gmail.com"
                className="inline-block bg-accent text-midnight px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
              >
                Email Our Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
