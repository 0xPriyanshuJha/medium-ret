import React from "react";
import DownloadBtn from "./DownloadBtn";
import AppleImg from "../assets/apple.png";
import PlaystoreImg from "../assets/playstore.png";
import Statistics from "../assets/stats.png";

const Download = () => {
  return (
    <div className="bg-royalGreen flex flex-col items-center justify-center">
      <div className="max-w-7xl flex w-full">
        <div className="w-1/2 py-8 px-3 flex flex-col items-start space-y-8">
          <div >
            <h1 className="font-primary text-7xl text-black tracking-normal max-w-2xl mx-auto">
              Take Medium <br />
              with you.
            </h1>
            <p className="mt-8 text-sm text-left">
              Download our app so you can read wherever you <br /> are.
            </p>
          </div>
          <div className=" flex space-x-3">
            <DownloadBtn
              img={AppleImg}
              superText={"Download on the"}
              mainText="App Store"
            />
            <DownloadBtn
              img={PlaystoreImg}
              superText={"GET IT ON"}
              mainText="Google Play"
            />
          </div>
        </div>
          <div className="w-1/2 pt-5 flex justify-end mr-[100px]">
          <img src={Statistics} alt="stats" className="h-[300px] w-[280px] mt-8" />
        </div>
      </div>
      <hr className="h-px bg-white border-1 border-black dark:bg-black w-screen"/>
    </div>
  );
};

export default Download;
