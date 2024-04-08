import React from "react";
import Person from "./Person.jsx";

const profile = () => {
  const persons = [
    ["https://dummyimage.com/80x80", "Erica Dhawan"],
    ["https://dummyimage.com/88x88", "Devon Price"],
    ["https://dummyimage.com/88x88", "GEN"],
    ["https://dummyimage.com/90x90", "Scott Galloway"],
    ["https://dummyimage.com/94x94", "Kaki Okumura"],
    ["https://dummyimage.com/98x98", "Hal H. Harris"],
    ["https://dummyimage.com/100x90", "OneZero"],
    ["https://dummyimage.com/104x94", "Carvell Wallace"],
    ["https://dummyimage.com/108x98", "Elemental"],
    ["https://dummyimage.com/108x98", "Sarah Cottrell"],
    ["https://dummyimage.com/108x98", "Forge"],
    ["https://dummyimage.com/108x98", "LEVEL"],
  ];

  return (
    <div className="bg-[#fccfb1] pb-12">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="max-w-7xl py-10">
          <h1 className="text-center font-primary text-6xl text-gray-800 tracking-normal max-w-xl mx-auto">
            A living networks of curious minds.
          </h1>
          <p className="text-center font-secondary text-sm text-gray-800 max-w-lg mx-auto leading-relaxed p-4">
            Anyone can write on medium. Thought-leaders, journalists, experts,
            and individuals with unique perspectives share their thinking here.
            You'll find pieces by independent writers from around the globe,
            stories we feature and leading authors, and smart takes on our own
            suite of blogs and publications.
          </p>
        </div>
        <div className="w-full p-5 grid grid-flow-row grid-cols-3 gap-x-5">
          {persons.map(([picture, name], index) => {
            return <Person picture={picture} name={name} className={index > 8 && "border-b-[1.5px]" }/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default profile;
