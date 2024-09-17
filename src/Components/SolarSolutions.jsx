import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import solution1 from "../Images/solution-1.png";
import solution2 from "../Images/solution-2.png";

const SolarSolutions = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/S2gmpaTCtm8?si=Z9lBfkmRynp2XeHO"
  );

  // Handle video toggle between Hindi and English
  const handleVideoToggle = (language) => {
    if (language === "Hindi") {
      setVideoUrl("https://www.youtube.com/embed/hindiVideoID");
    } else {
      setVideoUrl(
        "https://www.youtube.com/embed/S2gmpaTCtm8?si=Z9lBfkmRynp2XeHO"
      );
    }
  };
  return (
    <div className="bg-[#28BB7C] py-[5%] px-[3%]">
      <div className="flex max-[1000px]:flex-col gap-3 h-full">
        <div className="w-1/2 max-[1000px]:w-full flex flex-col justify-center text-white">
          <h3 className="text-[24px] font-[700] inter">About us</h3>
          <h2 className="text-[34px] font-[600] ad mb-[1%]">
            "Simplifying Solar Solutions"
          </h2>
          <p className="text-[16px] leading-[22.4px] font-[400] mr-[14%] max-[1000px]:mr-0">
            CUSP aims to accelerate the adoption of renewable energy,
            particularly solar power, in India. We recognize the urgent need to
            shift to sustainable energy to combat climate change. However, the
            fragmented market makes it challenging for users to find reliable
            providers and for providers to reach their audience.
          </p>
          {/* <br />
          <p className="text-[16px] leading-[22.4px] font-[400] max-[1000px]:mr-0">
            Our solution is a centralized platform that simplifies this process.
            CUSP connects users and service providers, ensuring transparent
            negotiations and contracts. This approach promotes sustainable
            practices and supports users in their green energy transition. By
            bridging this gap, we contribute significantly to India's renewable
            energy goals, making solar energy accessible and beneficial for
            everyone.{" "}
          </p> */}
          <a href="/about">
            <button className="py-2 px-4 bg-[#4348BD] mt-6 text-white rounded-lg font-[700] text-[16px] transition duration-300 flex items-center">
              Read Now <FaArrowRight className="ml-2 text-white" />
            </button>
          </a>
        </div>
        {/*----first column close---*/}
        {/*---second column ---*/}
        <div className="w-1/2 max-[1000px]:w-full flex gap-3 ">
          {/* <div className="w-1/2">
            <img
              src={solution2}
              className="w-full h-auto object-cover rounded-2xl"
              alt="advtimg"
            />
          </div>
          <div className="w-1/2">
            <img
              src={solution1}
              className="w-full h-auto object-cover rounded-2xl"
              alt="advtimg"
            />
          </div> */}
          <div className="w-full h-auto">
            {/* Toggle Button */}
            <div className="flex justify-center mb-4">
              <button
                onClick={() => handleVideoToggle("English")}
                className={`px-6 py-2 mx-2 ${
                  videoUrl.includes("S2gmpaTCtm8")
                    ? "bg-[#4348BD]"
                    : "bg-gray-300"
                } text-white rounded-md`}
              >
                English
              </button>
              <button
                onClick={() => handleVideoToggle("Hindi")}
                className={`px-6 py-2 mx-2 ${
                  videoUrl.includes("hindiVideoID")
                    ? "bg-[#4348BD]"
                    : "bg-gray-300"
                } text-white rounded-md`}
              >
                Hindi
              </button>
            </div>

            {/* Embedded Video */}
            <iframe
              width="100%" // Using percentage to make it responsive
              height="100%" // Using percentage to make it responsive
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[400px] max-[1000px]:h-[300px] max-[1000px]:mt-4 rounded-3xl"
            ></iframe>
          </div>
        </div>
        {/*---second column close---*/}
      </div>
    </div>
  );
};

export default SolarSolutions;
