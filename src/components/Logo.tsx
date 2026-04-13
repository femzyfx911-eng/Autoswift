import { motion } from 'motion/react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-accent/30 rounded-full"
        />
        {/* Inner Diamond/Shield Shape */}
        <div className="w-6 h-6 border-2 border-accent rotate-45 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-accent/10 -rotate-45 flex items-center justify-center">
            <span className="text-accent font-logo font-black text-[10px] tracking-tighter">ASR</span>
          </div>
        </div>
        {/* Accents */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(222,225,254,0.8)]" />
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-2xl font-logo font-black tracking-[0.15em] text-white">
          AUTOSWIFTRIDE
        </span>
        <span className="text-[8px] font-sans font-bold tracking-[0.4em] text-accent uppercase ml-1">
          Premium Concierge
        </span>
      </div>
    </div>
  );
}
