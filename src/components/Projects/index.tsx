import React, { useRef, useState } from "react";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

import whatsAppClone from "../../assets/images/projects/whatsapp_clone.jpg";
import foodDelivery from "../../assets/images/projects/food_delivery.jpg";
import taskManagement from "../../assets/images/projects/Task-Management-Dashboard.jpg";
import ottClone from "../../assets/images/projects/OTT-Platform-Website-landing.jpg";
import fraudBuster from "../../assets/images/projects/Registration-Form.jpg";
import stories from "../../assets/images/projects/stories.jpg";



interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  imageLink: string | StaticImageData;

}

const projectsData: ProjectItem[] = [
  {
    title: "Real Time Chat Application",
    description:
      "A real-time chat application with automatic notifications powered by WebSockets, ensuring instant alerts whenever a user sends a message.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl:
      "https://private-user-images.githubusercontent.com/79981696/331781128-e5059daa-e282-4a4d-9b39-3969a0aa782d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ2MDk0MjEsIm5iZiI6MTczNDYwOTEyMSwicGF0aCI6Ii83OTk4MTY5Ni8zMzE3ODExMjgtZTUwNTlkYWEtZTI4Mi00YTRkLTliMzktMzk2OWEwYWE3ODJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE5VDExNTIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUwMDNmNWZlOTZkNzA0NzQwZTY4MDUxNzY2OWRlNzhmNmEwMWQ3YmJkNDY5ZDAxOWNlY2Q4N2I5YWVmYTdlOTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ly64zOm3ty8isxOCCxiWFbCeV7hJD9W1whhi9Elnixs",
    link: "https://github.com/charanbanka/chatApp",
    imageLink: whatsAppClone,
  },
  {
    title: "SmartQ Food Delivery",
    description:
      "A full-featured online food delivery platform with menu browsing, payment, and order tracking.",
    technologies: ["React", "Redux", "thunk", "Bootstrap"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/158038735-8fe661ad-0969-4c77-ba72-858005679bc6.png",
    link: "https://github.com/charanbanka/SmartQ",
    imageLink: foodDelivery,

  },

  {
    title: "Task Management App",
    description:
      "An advanced issue-tracking application designed to streamline project management by enabling teams to create, assign, and resolve issues efficiently.",
    technologies: ["Ruby on Rails", "Javascrip", "Postgres"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/167020911-10bad00e-9193-4a17-9632-a631ddec1e39.png",
    link: "https://github.com/charanbanka/capstone_project",
    imageLink: taskManagement,

  },
  {
    title: "Stories",
    description:
      "A social media platform that allows users to create, edit, delete posts, and like content, fostering seamless interaction and engagement.",
    technologies: ["React", "Node", "Express", "MongoDB"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/153139244-29679360-2619-47bc-baac-040c9e5c37a2.png",
    link: "https://github.com/charanbanka/stories",
    imageLink: stories,

  },
  {
    title: "Fraud Buster",
    description:
      "Fraud-Buster allows users to register with email confirmation upon submission. It integrates country, state, and city lists via API for easy location selection.",
    technologies: ["React", "Node", "Nodemailer"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/158993607-597840da-d0f6-4635-973c-45328f56c6d3.png",
    link: "https://github.com/charanbanka/Fraud-Buster",
    imageLink: fraudBuster,

  },
  {
    title: "OTT Clone",
    description:
      "An OTT clone offering seamless streaming of movies and TV shows, with user authentication and content categorization.",
    technologies: ["React", "Node.js", "PostgresSql"],
    imageUrl:
      "https://private-user-images.githubusercontent.com/79981696/309470023-ea9580b4-7a92-4e2a-9cb4-121ff6e3da11.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ2MTA1NTgsIm5iZiI6MTczNDYxMDI1OCwicGF0aCI6Ii83OTk4MTY5Ni8zMDk0NzAwMjMtZWE5NTgwYjQtN2E5Mi00ZTJhLTljYjQtMTIxZmY2ZTNkYTExLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE5VDEyMTA1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFlNzFmOGUyNWZjODM2YTE4YTdhNWY1M2YxMmYzZWRiMGQxNWMwMTFiMWE1MGUwOTY1ZDVlN2EwZTg0NTVjMDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4HbCTvIbtMVOE5pKDHgdEd60clwyVziaOOqXptwF_Dc",
    link: " https://github.com/charanbanka/OTT-Clone",
    imageLink: ottClone,

  },
];

function Projects() {
  const [show, setShow] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling

  const handleClick = () => {
    setShow(!show);

    // Scroll to the target section based on the 'show' state
    if (scrollRef.current) {
      if (!show) {
        // Scroll up when 'show' is true
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Scroll down when 'show' is false
        scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };
  return (
    <section className="projects" id="projects">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
          {projectsData.map((project, idx) => {
            if (!show && idx > 2) return;
            return (
              <div
                key={idx}
                className="project-card bg-white shadow-md rounded-lg text-center"
              >
                <div className="project-image bg-gray-200 h-40 w-full rounded">
                  <img  src={typeof project.imageLink === "string" ? project.imageLink : project.imageUrl}></img>
                  
                </div>
                <div className="project-content text-left px-4 mt-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className=" text-sm text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((skill) => {
                      return (
                        <span className="text-sm bg-green-100 rounded-xl px-2 py-1">
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-blue-500 font-medium hover:text-blue-700 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="20px" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="project-show-more" ref={scrollRef}>
          <button className="" onClick={handleClick}>
            Show {show ? "Less" : "More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
