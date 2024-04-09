import React from "react";
import Cube from "../assets/cube.png";
import Buttons from "./Buttons";

const Reward = () => {
  return (
    <div className="bg-White flex flex-col items-center justify-center">
      <div className="max-w-7xl flex w-full">
        <div className="w-1/2 border-r-[1px] border-black p-6 flex flex-col">
          <img src={Cube} alt="Mrect" className="h-[500px] w-[470px]" />
        </div>
        <div className="w-1/2 p-6">
          <p className="text-black text-7xl font-primary">
            Read, write <br />
            and expand <br /> your world.
          </p>
          <Buttons
            onClick={() => {
              console.log("Get started button clicked");
            }}
            outlineColor="border-brandGreen"
            textColor="text-white"
            bgColor="bg-brandGreen"
            text="Get Started"
            className="hover:outline-white hover:text-brandGreen hover:bg-white duration-300 mt-[150px]"
          />
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-screen" />
    </div>
  );
};

export default Reward;
