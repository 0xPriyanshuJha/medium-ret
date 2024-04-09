import React from "react";
import Buttons from "./Button";

const Learn = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center border-b border-black">
      <div className=" mx-auto w-full">
        <div className="flex w-full">
          <div className="w-1/2 border-r border-black flex justify-end ">
            <h1 className="font-primary text-7xl text-black tracking-normal w-full max-w-[640px] p-6">
              Learn more <br />
              about us. Or <br /> join us.
            </h1>
          </div>
          <div className="w-1/2">
            <div className="p-7 border-b border-black">
              <h3 className="text-3xl  mb-2 font-primary">The Medium blog</h3>
              <p className="text-black font-secondary mb-24 max-w-[357px] w-full">
                Visit our company blog for the latest news, product updates, and
                tips and tricks.
              </p>
              <Buttons
                onClick={() => {
                  console.log("Read our blogs clicked");
                }}
                outlineColor="border-brandGreen"
                textColor="text-brandGreen"
                bgColor="bg-white"
                text="Read our blogs"
                className="hover:outline-brandGreen hover:text-white hover:bg-brandGreen duration-300"
              />
            </div>
            <div className="p-7">
              <h3 className="text-3xl  mb-2 font-primary">Work at Medium</h3>
              <p className="text-black font-secondary mb-24 max-w-[357px] w-full">
                Our team is home to engineers, journalists, artists, and
                creatives of all stripes.
              </p>
              <Buttons
                onClick={() => {
                  console.log("View open positions clicked");
                }}
                outlineColor="border-brandGreen"
                textColor="text-brandGreen"
                bgColor="bg-white"
                text="View open positions"
                className="hover:outline-brandGreen hover:text-white hover:bg-brandGreen duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
