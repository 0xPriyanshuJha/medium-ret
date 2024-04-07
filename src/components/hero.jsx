import React from 'react';
import photo from '../assets/photo.png';

const IdeaMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="max-w-5xl py-20">
        <h1 className="text-center font-primary text-6xl text-gray-800  tracking-normal">
          Every idea needs a <span className='font-semibold'>Medium.</span> 
        </h1>
      </div>
      <hr className="h-px bg-black border-0 dark:bg-gray-700 w-screen " />
      <div className="flex justify-between items-center bg-white">
        <div className="max-w-2xl text-base w-1/2 border-r-[1.5px] border-black p-10 font-secondary">
          <p className="text-gray-600 leading-relaxed">
            The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We're an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We're creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It's an environment that's open to everyone but promotes substance and authenticity. And it's where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we're building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
          </p>
        </div>
        <div className='w-1/2 flex justify-center'>
            <img src={photo} alt="Profile" className="rounded-full h-[350px] w-[350px] object-cover" />
        </div>
      </div>
      <hr className="h-px bg-black border-0 dark:bg-gray-700 w-screen" />
    </div>
  );
};

export default IdeaMessage;