import React from 'react';

export const Button: React.FC<any> = ({
  disabled,
  onClick,
  label,
  className,
  labelClassName,
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center border-2 px-4 py-2 rounded-lg hover:bg-blue-100 hover:border-blue-300 disabled:bg-gray-200 disabled:text-gray-300 disabled:border-gray-200 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
    >
      <span className={`${labelClassName}`}>{label}</span>
    </button>
  );
};
