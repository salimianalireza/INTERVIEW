import React from 'react';

export const Button = ({ children, className, ...props }) => {
  const defaultClasses = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const combinedClasses = `${defaultClasses} ${className || ''}`.trim();

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}; 