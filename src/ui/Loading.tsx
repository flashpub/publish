import React from 'react';

export const Loading: React.FC<any> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-8xl animate-spin">&#x2687;</p>
      <p>LOADING...</p>
    </div>
  );
};
