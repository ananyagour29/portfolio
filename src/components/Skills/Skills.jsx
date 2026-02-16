// src/components/Skills/Skills.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        // { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[15vw] bg-skills-gradient font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-5 text-lg">
          My Full Stack Development Stack
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skillsData.map((category, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
          >
            <div
              className="bg-gray-900 border border-gray-700
              rounded-2xl p-8
              shadow-[0_0_20px_rgba(130,69,236,0.25)]
              hover:shadow-[0_0_30px_rgba(130,69,236,0.5)]
              transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills Inside Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  // <div
                  //   key={i}
                  //   className="flex items-center gap-3 
                  //   rounded-xl px-4 py-3
                  //   hover:scale-105 transition-all duration-300
                  //   w-full"
                  // >
                  //   <div className="text-xl flex-shrink-0">
                  //     {skill.icon}
                  //   </div>

                  //   <p className="text-gray-300 text-sm font-medium break-words">
                  //     {skill.name}
                  //   </p>
                  // </div>
                  <div
  key={i}
  className="flex items-center justify-center gap-2
  rounded-xl px-4 py-3
  hover:scale-105 transition-all duration-300
  w-full text-center"
>
  <div className="text-xl">
    {skill.icon}
  </div>

  <p className="text-gray-300 text-sm font-medium break-words">
    {skill.name}
  </p>
</div>

                ))}
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
