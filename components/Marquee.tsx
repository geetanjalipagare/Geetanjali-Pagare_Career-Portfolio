import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-4 border-black bg-neo-yellow py-4 ${className}`}>
      <div className={`inline-block animate-[marquee_20s_linear_infinite] ${direction === 'right' ? 'animate-[marquee-reverse_20s_linear_infinite]' : ''}`}>
        {items.map((item, i) => (
          <span key={i} className="mx-8 font-display font-bold text-2xl uppercase text-black">
            {item} <span className="text-white mx-2 stroke-black" style={{ WebkitTextStroke: '1px black' }}>✦</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-8 font-display font-bold text-2xl uppercase text-black">
            {item} <span className="text-white mx-2 stroke-black" style={{ WebkitTextStroke: '1px black' }}>✦</span>
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;