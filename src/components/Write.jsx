import React from "react";
import photo from "../assets/Jackie.png";

const Write = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <div className="max-w-7xl flex w-full">
        <div className="w-1/2 border-r-[1.5px] border-white p-6 font-secondary">
          <p className="text-white font-primary text-7xl leading-none ">
            Over 100 <br /> million <br /> readers and <br /> growing.
          </p>
        </div>
        <div className="w-1/2 p-9">
          <img
            src={photo}
            alt="Profile"
            className=" h-[120px] object-cover mb-10"
          />
          <p className="text-white mb-5">
            "Medium is a great place to read and learn from a <br />
            wide reange of authors. It's not muddied by ads. <br /> It feels
            like one of the few pure place to go online."
          </p>
          <p className="text-white font-primary">Jackie Colburn</p>
        </div>
      </div>
      <hr className="h-px bg-white border-1 dark:bg-white w-screen " />
    </div>
  );
};

export default Write;
