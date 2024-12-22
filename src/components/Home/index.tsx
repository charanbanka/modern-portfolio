import React, { useMemo, useState } from "react";
import "./home.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

import imgUrl from "./gateway-selfie.jpg";
import StaticTypingEffect from "../animations/staticTypeEffetcts/index.tsx";
import DynamicTypingEffect from "../animations/dynamicTypeEffects/dynamicTypyingEfects.tsx";

function Home() {
  const [menu, setMenu] = useState(false);
  let experience = useMemo(() => {
    // Create a Date object for March 1, 2021
    const march2021 = new Date("2021-03-01");

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in time (milliseconds)
    const timeDifference = currentDate - march2021;

    // Convert the difference from milliseconds to years
    const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25); // 365.25 accounts for leap years

    // Round to 2 decimal places
    const roundedYears = yearsDifference.toFixed(1);

    console.log(
      `The difference between March 2021 and today is approximately ${roundedYears} years.`
    );
    return roundedYears;
  }, []);

  const updateMenu = () =>{
    setMenu(false)
  }
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-header">
          <div className="main-text portfolio">Home</div>
          <div className="flex justify-around gap-4 items-center home-header-tags">
            <div className="home-header-tag">
              <a href="#experience">Experience</a>
            </div>
            <div className="home-header-tag">
              <a href="#projects">Projects</a>
            </div>
            <div className="home-header-tag">
              <a href="#skills">Skills</a>
            </div>

            <div className="home-header-tag">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="home-icon">
            <div className="relative">
              <IoMenuSharp onClick={() => setMenu(!menu)} />
              {menu && (
                <div className="absolute flex flex-col top-4 right-0 bg-orange-600 p-1 rounded-md gap-1 divide-y divide-solid" >
                  <div className="home-header-tag" onClick={updateMenu} >
                    <a href="#experience" >Experience</a>
                  </div>
                  <div className="home-header-tag" onClick={updateMenu}>
                    <a href="#projects">Projects</a>
                  </div>
                  <div className="home-header-tag" onClick={updateMenu}>
                    <a href="#skills">Skills</a>
                  </div>

                  <div className="home-header-tag" onClick={updateMenu}>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="home-left-content">
            <div className="flex flex-col text-left md:pl-20 sm:pl-2">
              <span className="text-xl hey-text">
                Hey, It's <span className="main-text">Me</span>
              </span>
              <h2 className="text-5xl main-text">
                {/* <StaticTypingEffect text="Charan Banka" textClasses="main-text" /> */}
                Charan Banka
              </h2>
              <strong className="text-xl mt-1">
                {/* I am a <span className="main-text">Full Stack Developer.</span> */}
                <DynamicTypingEffect />
              </strong>

              <div className="mt-3">
                <p className="text-sm">
                  Software engineer with <strong>{experience}+</strong> years of
                  experience in analysis, design, development, testing, and
                  implementation of various web applications
                </p>
              </div>
              <div className="mt-4 flex flex-row items-center gap-2">
                <button className="px-4 py-1 rounded downloadcv mr-4 sm:hidden">
                  Download CV <IoMdDownload />
                </button>
                <a target="_blank" href="https://github.com/charanbanka">
                  <FaGithub className="main-color cursor-pointer" size="25px" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/charan-banka-9a4589160/"
                >
                  <FaLinkedin
                    className="main-color cursor-pointer"
                    size="25px"
                  />
                </a>
                <a target="_blank" href="https://github.com/charanbanka">
                  <FaTwitterSquare
                    className="main-color cursor-pointer"
                    size="25px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="home-right-content">
            <div className="">
              <img
                src={imgUrl}
                style={{ borderRadius: "50%" }}
                alt="Image description" // It's good to provide an alt text for accessibility
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
