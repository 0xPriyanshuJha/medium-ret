import React from 'react';
import mrect from '../assets/mrect.png';
import mfount from '../assets/mfount.png';

const Reward = () => {
  return (
    <div className="bg-brandGreen flex flex-col items-center justify-center">
      <div className="max-w-7xl flex w-full">
        <div className="w-1/2 border-r-[1.5px] border-black p-6 flex flex-col">
          <p className="text-black font-primary text-4xl leading-none ">
            Read as much as you want.
          </p>
          <img src={mrect} alt="Mrect" className='h-[150px] w-[250px] mt-6'/>
          <p className='pt-8 text-xs'>Enjoy unlimited access to every story across all of your devices.</p>
        </div>
        <div className="w-1/2 p-6">
          <p className="text-black mb-5 text-4xl font-primary">Reward quality content.</p>
          <img src={mfount} alt="Mfount" className='h-[130px] w-[250px] mt-12'/>
          <p className='pt-6 text-xs'>Your membership helps us to pay our writers, and keep your experience ad-free.</p>
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-screen"/>
    </div>
  );
};

export default Reward;