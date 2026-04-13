import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, Zap, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury Sedan',
      price: '$250',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Range Rover Autobiography',
      type: 'Luxury SUV',
      price: '$300',
      image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Porsche 911 Carrera',
      type: 'Sportscar',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      rating: 5.0,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Car"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              Premium Car Rental
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              Drive the <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Experience the pinnacle of automotive luxury. From sleek sedans to powerful SUVs, our curated fleet is ready for your next journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-accent text-midnight px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all group"
              >
                Explore Fleet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar Section */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent text-midnight rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold">Direct Inquiry</h3>
                <p className="text-slate-400 text-sm">Get a personalized quote within minutes</p>
              </div>
            </div>
            <a 
              href="mailto:jonaissabel528@gmail.com"
              className="w-full md:w-auto bg-white text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-3"
            >
              jonaissabel528@gmail.com
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-midnight-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose <span className="text-gradient">Autoswiftride</span></h2>
            <p className="text-slate-400">Setting the gold standard in luxury vehicle rentals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive coverage for total peace of mind.' },
              { icon: Clock, title: '24/7 Support', desc: 'Our concierge team is always available for you.' },
              { icon: Zap, title: 'Instant Booking', desc: 'Seamless reservation process in under 2 minutes.' },
              { icon: Star, title: 'Premium Quality', desc: 'Meticulously maintained vehicles for every ride.' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <feature.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It <span className="text-gradient">Works</span></h2>
            <p className="text-slate-400">Three simple steps to your extraordinary journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Select Vehicle', desc: 'Choose from our curated collection of premium luxury vehicles.' },
              { step: '02', title: 'Confirm Booking', desc: 'Quick verification and seamless payment process.' },
              { step: '03', title: 'Enjoy the Ride', desc: 'Delivery to your doorstep or pickup from our showroom.' },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-8xl font-display font-black text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-midnight-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Client <span className="text-gradient">Experiences</span></h2>
            <p className="text-slate-400">What our discerning clients have to say about us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alexander Wright', role: 'CEO, TechCorp', text: 'The service was impeccable. From the moment I booked to the return of the vehicle, everything was handled with extreme professionalism.' },
              { name: 'Sarah Jenkins', role: 'Fashion Designer', text: 'Autoswiftride is my go-to for every event. Their fleet is always in pristine condition and the concierge team is simply the best.' },
              { name: 'Michael Chen', role: 'Investment Banker', text: 'Seamless, luxury, and efficient. They understand the value of time and provide a service that is truly world-class.' },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-3xl italic text-slate-300 relative"
              >
                <div className="text-5xl text-accent/20 absolute top-6 left-6 font-serif">"</div>
                <p className="mb-8 relative z-10">{testimonial.text}</p>
                <div className="not-italic">
                  <p className="font-display font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-accent uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-display font-black tracking-tighter">MERCEDES-BENZ</span>
            <span className="text-2xl font-display font-black tracking-tighter">PORSCHE</span>
            <span className="text-2xl font-display font-black tracking-tighter">RANGE ROVER</span>
            <span className="text-2xl font-display font-black tracking-tighter">BENTLEY</span>
            <span className="text-2xl font-display font-black tracking-tighter">ROLLS-ROYCE</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to start your <span className="text-gradient">journey</span>?</h2>
          <p className="text-lg text-slate-400 mb-12">
            Contact us today and experience luxury like never before. Our team is ready to assist you via email or Zangi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:jonaissabel528@gmail.com"
              className="bg-accent text-midnight px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all"
            >
              Email Us Now
            </a>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-12 py-5 rounded-full font-bold text-xl">
              Zangi: 1427846641
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
