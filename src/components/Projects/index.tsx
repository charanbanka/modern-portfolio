import React, { useRef, useState } from "react";
import "./projects.css";
import { FaGithub } from "react-icons/fa";

import whatsAppClone from "../../assets/images/projects/whatsapp_clone.jpg";
import foodDelivery from "../../assets/images/projects/food_delivery.jpg";
import taskManagement from "../../assets/images/projects/Task-Management-Dashboard.jpg";
import ottClone from "../../assets/images/projects/OTT-Platform-Website-landing.jpg";
import fraudBuster from "../../assets/images/projects/Registration-Form.jpg";
import stories from "../../assets/images/projects/stories.jpg";
import folderStructure from "../../assets/images/projects/folder-structure.png";
import searchComments from "../../assets/images/projects/search-comments-1.png";



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
      "A real-time chat application built for seamless and instant communication. Powered by WebSockets to ensure low-latency message delivery. Users receive automatic notifications whenever a message is sent.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "System Design",
    ],
    imageUrl:
      "https://private-user-images.githubusercontent.com/79981696/331781128-e5059daa-e282-4a4d-9b39-3969a0aa782d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ2MDk0MjEsIm5iZiI6MTczNDYwOTEyMSwicGF0aCI6Ii83OTk4MTY5Ni8zMzE3ODExMjgtZTUwNTlkYWEtZTI4Mi00YTRkLTliMzktMzk2OWEwYWE3ODJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjE5VDExNTIwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUwMDNmNWZlOTZkNzA0NzQwZTY4MDUxNzY2OWRlNzhmNmEwMWQ3YmJkNDY5ZDAxOWNlY2Q4N2I5YWVmYTdlOTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ly64zOm3ty8isxOCCxiWFbCeV7hJD9W1whhi9Elnixs",
    link: "https://github.com/charanbanka/chatApp",
    imageLink: whatsAppClone,
  },
  {
    title: "SmartQ Food Delivery",
    description:
      "A comprehensive online food delivery platform offering menu browsing, secure payments, and real-time order tracking. Designed to provide a seamless and convenient food ordering experience for users.",
    technologies: [
      "React",
      "React Hooks",
      "Redux",
      "thunk",
      "Bootstrap",
      "System Design",
    ],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/158038735-8fe661ad-0969-4c77-ba72-858005679bc6.png",
    link: "https://github.com/charanbanka/SmartQ",
    imageLink: foodDelivery,
  },
  {
    title: "Folder & Document Management System",
    description:
      "A comprehensive folder and document management system that enables users to create folders, upload documents, and manage them efficiently within a hierarchical structure.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgresSql",
      "System Design",
    ],
    imageUrl:
      "https://private-user-images.githubusercontent.com/79981696/422648129-8c459c8f-0262-4ac0-905d-f34cfe60b573.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM5NDc4OTMsIm5iZiI6MTc0Mzk0NzU5MywicGF0aCI6Ii83OTk4MTY5Ni80MjI2NDgxMjktOGM0NTljOGYtMDI2Mi00YWMwLTkwNWQtZjM0Y2ZlNjBiNTczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA2VDEzNTMxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2ZmQ1ODllZjAyYTJlMDM2NmI2ZDU5OTE0ODA5NmQxZGQyYjM3YzYwZDNkNzBmZTJiZDIzNjljZTJjZDk4ZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.lkV-cAVGuLCD__O84E3T5GEsveBp01VvO_9gjp1rbyo",
    link: "https://github.com/charanbanka/Folder-Structure-NSM",
    imageLink: folderStructure,
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
    technologies: ["React", "Node", "Express", "MongoDB", "System Design"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/153139244-29679360-2619-47bc-baac-040c9e5c37a2.png",
    link: "https://github.com/charanbanka/stories",
    imageLink: stories,
  },
  {
    title: "Fraud Buster",
    description:
      "Fraud-Buster allows users to register with email confirmation upon submission. It integrates country, state, and city lists via API for easy location selection.",
    technologies: ["React", "Node", "Nodemailer", "System Design"],
    imageUrl:
      "https://user-images.githubusercontent.com/79981696/158993607-597840da-d0f6-4635-973c-45328f56c6d3.png",
    link: "https://github.com/charanbanka/Fraud-Buster",
    imageLink: fraudBuster,
  },
  {
    title: "Search Comments",
    description:
      "It allows users to search comments from a public JSON API with a typeahead feature and displays up to 20 relevant results.",
    technologies: ["React", "Typescript", "React Hooks", "Vite project"],
    imageUrl:
      "https://private-user-images.githubusercontent.com/79981696/430711975-ebc71077-0d37-42a3-9de4-221042710b54.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM5NTAwNDQsIm5iZiI6MTc0Mzk0OTc0NCwicGF0aCI6Ii83OTk4MTY5Ni80MzA3MTE5NzUtZWJjNzEwNzctMGQzNy00MmEzLTlkZTQtMjIxMDQyNzEwYjU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA2VDE0MjkwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTczYTRhYTRhNTdkNWY5MWM3YmM3NjcxYTdkNGM5MzdiZmY0ZTNlNDViOGZlZjVmNWNmMGMzMDE1OTFjYTI5MTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6RZEAi1VCrd90Mskf4RodvEDc1Fgf4e2URqqhIKS7aI",
    link: " https://github.com/charanbanka/search-comments-react",
    imageLink: searchComments,
  },
  {
    title: "OTT Clone",
    description:
      "An OTT clone offering seamless streaming of movies and TV shows, with user authentication and content categorization.",
    technologies: ["React", "Node.js", "PostgresSql", "System Design"],
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
    const isExpanding = !show;

    if (!isExpanding) {
      // Scroll to the top of the projects section before hiding
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setShow(isExpanding);

    if (isExpanding && scrollRef.current) {
      // Scroll to bottom after expanding
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <div className=" grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
          {projectsData.map((project, idx) => {
            if (!show && idx > 2) return;
            return (
              <div
                key={idx}
                className="project-card bg-white shadow-md rounded-lg text-center"
              >
                <div className="project-image bg-gray-200 h-40 w-full rounded">
                  <img
                    src={
                      typeof project.imageLink === "string"
                        ? project.imageLink
                        : project.imageUrl
                    }
                  ></img>
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
                    className="flex items-center gap-2 text-sm text-blue-500 font-medium hover:text-blue-700 transition-all duration-300 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="20px" />
                    <span className="">View on GitHub</span>
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
