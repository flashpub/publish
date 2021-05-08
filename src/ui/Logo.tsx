import React from 'react';

export const Logo: React.FC<any> = ({ symbol }) => {
  return (
    <div className="flex items-center justify-center bg-gray-400 h-12 md:h-16 w-12 md:w-16 rounded-xl">
      <div className="text-3xl text-white ">{symbol}</div>
    </div>
  );
};
