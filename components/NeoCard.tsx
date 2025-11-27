import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'purple' | 'white';
  title?: string;
  noPadding?: boolean;
}

const colorMap = {
  yellow: 'bg-neo-yellow',
  pink: 'bg-neo-pink',
  blue: 'bg-neo-blue',
  green: 'bg-neo-green',
  purple: 'bg-neo-purple',
  white: 'bg-neo-white',
};

const NeoCard: React.FC<NeoCardProps> = ({ 
  children, 
  className = '', 
  color = 'white', 
  title,
  noPadding = false 
}) => {
  return (
    <div className={`
      relative 
      border-4 border-black 
      shadow-neo hover:shadow-neo-hover hover:translate-x-[3px] hover:translate-y-[3px]
      transition-all duration-200
      ${colorMap[color]} 
      ${className}
    `}>
      {title && (
        <div className="border-b-4 border-black bg-black text-white p-3 font-display font-bold text-xl uppercase tracking-wider">
          {title}
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
};

export default NeoCard;