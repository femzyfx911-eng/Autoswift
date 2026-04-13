import { motion } from 'motion/react';
import { Shield, Users, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
            Our <span className="text-gradient">Legacy</span> of Excellence
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Founded with a passion for automotive perfection, Autoswiftride has grown into the premier destination for luxury car rentals, serving a global clientele with uncompromising standards.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Showroom"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { label: 'Vehicles', value: '500+' },
            { label: 'Happy Clients', value: '10k+' },
            { label: 'Locations', value: '25+' },
            { label: 'Years Experience', value: '15+' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-6xl font-display font-extrabold text-accent mb-2">{stat.value}</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            {
              icon: Shield,
              title: 'Uncompromising Safety',
              desc: 'Every vehicle undergoes a rigorous 100-point inspection before every rental to ensure your absolute safety.'
            },
            {
              icon: Users,
              title: 'Personalized Service',
              desc: 'Our dedicated concierge team works around the clock to tailor every aspect of your rental experience.'
            },
            {
              icon: Award,
              title: 'Premium Quality',
              desc: 'We only source the latest models from the world\'s most prestigious automotive manufacturers.'
            }
          ].map((value, idx) => (
            <div key={idx} className="space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* History Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our <span className="text-gradient">Journey</span></h2>
            <p className="text-slate-400">A timeline of luxury and innovation.</p>
          </div>
          <div className="space-y-12">
            {[
              { year: '2010', title: 'The Beginning', desc: 'Autoswiftride was founded with just 5 luxury sedans and a vision to redefine the rental experience.' },
              { year: '2015', title: 'Global Expansion', desc: 'Opened our first international branch and expanded our fleet to include exotic sports cars.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched our instant booking platform and personalized concierge app for seamless travel.' },
              { year: '2024', title: 'The Future', desc: 'Continuing to lead the industry with sustainable luxury and autonomous vehicle integration.' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-3xl font-display font-extrabold text-accent shrink-0 w-24">{item.year}</div>
                <div className="pt-1">
                  <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Meet the <span className="text-gradient">Experts</span></h2>
            <p className="text-slate-400">The passionate individuals behind our world-class service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'James Sterling', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Elena Rodriguez', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
              { name: 'Marcus Thorne', role: 'Head of Concierge', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sophia Chen', role: 'Fleet Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-display font-bold">{member.name}</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
