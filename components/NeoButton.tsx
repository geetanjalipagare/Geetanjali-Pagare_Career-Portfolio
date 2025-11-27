import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  href?: string;
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  icon,
  href,
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center gap-2 
    px-6 py-3 
    font-display font-bold uppercase tracking-wider
    border-4 border-black 
    shadow-neo active:shadow-none active:translate-x-[5px] active:translate-y-[5px]
    transition-all duration-150
    cursor-pointer
  `;

  const variants = {
    primary: 'bg-neo-blue hover:bg-neo-purple text-black',
    secondary: 'bg-neo-pink hover:bg-neo-yellow text-black',
    outline: 'bg-white hover:bg-gray-100 text-black',
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};

export default NeoButton;