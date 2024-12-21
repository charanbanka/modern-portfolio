import React, { useState } from "react";
import "./experience.css";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  website: string;
  type: "experience" | "education";
}

const timelineData: TimelineItem[] = [
  {
    year: "2022 APR - Present",
    title: "Software Engineer",
    organization: "Idfy Technology",
    website: "https://idfy.com",
    description:
      "The project is designed to help clients make informed decisions by performing comprehensive background checks on companies, vendors, and hospitals.",
    type: "experience",
  },
  {
    year: "2021 MAR - 2021 DEC",
    title: "Associate Software Engineer",
    organization: "ACS Solutions",
    website: "https://www.innovasolutions.com/",

    description:
      "Developed responsive web applications and e-commerce solutions",
    type: "experience",
  },
  {
    year: "2016 - 2020",
    title: "Bachelor of Computer Science",
    organization: "lakireddy bali reddy college of engineering",
    website: "https://lbrce.ac.in/",
    description: "Foundation in Computer Science and Programming",
    type: "education",
  },
];

export function Experience() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="timeline"
      id="experience"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-4">
        <h1
          className={`text-4xl font-bold mb-6 ${
            isHovered ? "animate-slide-in" : ""
          }`}
        >
          Experience & Education
        </h1>

        <div className="relative m-2">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" /> */}
          <div className="verticle-line" />

          {timelineData.map((item, idx) => {
            return (
              <div
                className={`mt-8 relative flex ${
                  idx % 2 == 0 ? "justify-end" : "justify-start"
                }`}
                key={idx}
              >
                <div
                  className={`timeline-item ${
                    idx % 2 == 0 ? "text-right" : "text-left"
                  }  `}
                >
                  <span>
                    <span className={`${item.type}`}>{item.year}</span>
                  </span>
                  <h2 className="title">{item.title}</h2>
                  <h3 className="organization">
                    <a href={item.website} target="_blank">
                      {item.organization}
                    </a>
                  </h3>

                  <p className="description">{item.description}</p>
                </div>
                <div className="project-card-dot" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
