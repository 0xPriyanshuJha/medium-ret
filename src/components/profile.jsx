import React from 'react';

const profile = () => {
  return (
    <div style={{ backgroundColor: '#f7d3bb' }}>
      <div className='flex flex-col items-center'>
        <div className="max-w-5xl py-20">
          <h1 className="text-center font-primary text-6xl text-gray-800 tracking-normal max-w-lg mx-auto">
            A living networks of curious minds.
          </h1>
          <p className='text-center font-secondary text-sm text-gray-800 max-w-lg mx-auto leading-relaxed p-4'>
            Anyone can write on medium. Thought-leaders, journalists, experts, and individuals with unique perspectives share their thinking here. You'll find pieces by independent writers from around the globe, stories we feature and leading authors, and smart takes on our own suite of blogs and publications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default profile;