import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You will need a valid driver\'s license (held for at least 2 years), a passport or national ID, and a credit card in the main driver\'s name for the security deposit.'
    },
    {
      question: 'Is there a minimum age requirement?',
      answer: 'Yes, the minimum age for most luxury vehicles is 25. For certain high-performance exotic cars, the minimum age may be 30. Please check the specific vehicle requirements.'
    },
    {
      question: 'Do you offer delivery and collection services?',
      answer: 'Absolutely. We can deliver and collect your vehicle from airports, hotels, or private residences within our service areas. This service may incur an additional fee depending on the distance.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made more than 48 hours before the rental start time are fully refundable. Cancellations within 48 hours may be subject to a one-day rental fee.'
    },
    {
      question: 'Are your vehicles insured?',
      answer: 'All our rentals include comprehensive insurance with a standard excess. We also offer additional coverage options to reduce your liability to zero for total peace of mind.'
    },
    {
      question: 'Can I take the car across international borders?',
      answer: 'Cross-border travel is permitted for most European countries but must be authorized in advance. Additional insurance and fees may apply.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-slate-400">
            Everything you need to know about our luxury rental process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-display font-bold">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-accent" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 p-12 rounded-3xl bg-midnight-light border border-white/5 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="bg-white text-midnight px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
