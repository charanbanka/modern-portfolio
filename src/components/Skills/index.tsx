import React, { useEffect, useState } from "react";
import "./skills.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiGooglecloud,
  SiRabbitmq,
} from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

interface SkillItem {
  name: string;
  icon: TSX.Element;
}

const skillData: SkillItem[] = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <RiJavascriptFill /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <AiOutlinePython /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <DiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
];

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });
  return (
    <section className="skills" id="skills"> 
      <div>
        <h2 className="text-4xl text-center" ref={ref}>
          Skills & Technologies
        </h2>
        <div className="grid lg:grid-cols-4 gap-10 my-12 mx-4 skills-container">
          {skillData.map((skill, idx) => (
            <div
              className={`text-4xl flex flex-col items-center skill ${inView ? 'slide-up' : ''}`}
              key={idx}
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              {skill.icon}
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
