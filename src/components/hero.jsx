import { Typewriter } from "react-simple-typewriter";
import photo from "../assets/me.png";
import React from "react";

function IdeaMessage() {
  return (
    <div className="pt-[90px] flex flex-col items-center justify-center bg-hola w-full md:w-screen">
      <div className="max-w-7xl flex flex-col md:flex-row justify-center items-center  w-full">
        <div className="text-base w-full md:w-1/2  p-5 md:p-10 font-secondary">
          <h1 className="text-3xl md:text-8xl text-white font-sans font-bold">
            Hi,
          </h1>
          <h1 className="text-3xl md:text-7xl text-white font-sans font-bold">
            Priyanshu Jha
          </h1>
          <br />
          <div className="text-gray-300 text-2xl">
            <Typewriter
              words={["Eat", "Sleep", "Code", "Repeat!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt="Profile"
            className="h-[250px] md:h-[350px] w-[250px] md:w-[450px] object-cover"
          />
        </div>
      </div>
      <hr className="h-px bg-black border-0 dark:bg-gray-700 w-full md:w-screen" />
    </div>
  );
}

export default IdeaMessage;
