import React from 'react'
import Buttons from './Buttons';

const Create = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
 <div className="items-center max-w-7xl mx-auto">
        <div className="max-w-7xl py-10">
          <h1 className="text-center font-primary text-6xl text-white tracking-normal max-w-2xl mx-auto">
            Create the space for your thinking to take off.
          </h1>
            <p className="text-center font-secondary text-sm text-white max-w-lg mx-auto leading-relaxed p-7">
               A blank is  also a door. At medium you can walk through it. It's easy and free to share your thinking on any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.
               </p>
               <Buttons/>
             </div>
          </div>
    </div>
  )
}

export default Create;