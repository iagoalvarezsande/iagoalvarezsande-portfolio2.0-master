// Importing necessary dependencies and data
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { skillsList, images } from "./skills";

// SkillContainer Component
const SkillContainer = ({ title, description }) => {
  return (
    <div className="lg:px-4 mb-4 md:mb-0">
      <div className="p-3 rounded-lg">
        {/* Title */}
        <h3 className="px-2 text-xl font-semibold">{title}</h3>
        {/* Description */}
        <ul className="px-2 py-1">{description}</ul>
      </div>
    </div>
  );
};

// SkillCard Component
const SkillCard = ({ skill, onClick }) => (
  <div
    className="flex flex-col gap-4 justify-center items-center"
    onClick={onClick}
  >
    {/* Image representing the skill */}
    <div className="m-auto" style={{ cursor: "pointer" }}>
      <Image src={images[skill.img]} width="64" height="64" alt={skill.name} />
    </div>
    {/* Skill name */}
    <div className="flex flex-col items-center justify-center">
      <h3>{skill.name}</h3>
    </div>
  </div>
);

// SelectedSkillInfo Component
const SelectedSkillInfo = ({ selectedSkill }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Increment the key to trigger a re-render and apply the animation
    setAnimationKey((prevKey) => prevKey + 1);
  }, [selectedSkill]);

  return (
    <div
      key={animationKey}
      className="md:flex items-center flex-col md:flex-row animate-cascade transform translate-y-0 duration-500 transition-all transition-delay-100 mb-8 md:mb-0"
    >
      {/* Image representing the selected skill */}
      <div className="md:ml-8 mb-4 md:mb-0 w-full md:w-1/4 flex justify-center">
        <Image src={images[selectedSkill.img]} width="128" height="64" />
      </div>
      {/* Text content for the selected skill */}
      <div className="px-8 flex flex-col items-center md:items-start">
        <p className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left">
          {selectedSkill.name}
        </p>
        <div className="flex flex-col items-center md:items-start">
          <p className="py-1 text-center md:text-left">
            &#8226; {selectedSkill.description}
          </p>
          <p className="py-1 text-center md:text-left">
            &#8226; {selectedSkill.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  // State to track the selected skill for detailed information
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Function to handle clicks on a skill card
  const handleSkillClick = (skill) => {
    setSelectedSkill((prevSkill) => (prevSkill === skill ? null : skill));
  };

  return (
    <div id="skills" className="px-10 w-full py-16">
      {/* Main container for skills section */}
      <div className=" md:px-40 max-w-[1240px] m-auto md:flex flex-col gap-8">
        <div className="flex-col">
          {/* Section heading for skills */}
          <p className="uppercase text-xl tracking-widest">Skills</p>
          <h2 className="py-4">What I Can Do</h2>
          {/* Horizontal scrollable container for skill cards */}
          <div className="overflow-hidden">
            <div className="horizontal-scroll-content py-6 mb-8 gap-16 grid grid-cols-2 md:flex md:gap-24">
              {/* Mapping through skillsList to create SkillCard components */}
              {skillsList.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onClick={() => handleSkillClick(skill)}
                />
              ))}
            </div>
          </div>
          {/* Render SelectedSkillInfo component if a skill is selected */}
          {selectedSkill && <SelectedSkillInfo selectedSkill={selectedSkill} />}
        </div>
        <div className="md:grid grid-cols-2 ">
          {/* SkillContainer components for displaying detailed skill descriptions */}
          <SkillContainer
            title="Project Management"
            description={
              <ul className="ml-4 items-center text-xs text-gray-300 list-disc space-y-1">
                <li>End-to-end solution orchestration</li>
                <li>Meticulous strategic roadmap planning</li>
                <li>Proficient in Agile and Scrum</li>
                <li>Efficient and adaptive project delivery</li>
              </ul>
            }
          />
          <SkillContainer
            title="Pharmaceutical Industry"
            description={
              <ul className="ml-4 text-xs text-gray-300 list-disc space-y-1">
                <li>Clinical Trials Management and Clinical Data</li>
                <li>Quality Management and Safety</li>
                <li>Regulatory Process and Product Registration</li>
                <li>Medical Content and Customer Engagement</li>
              </ul>
            }
          />
          <SkillContainer
            title="Code"
            description={
              <ul className="ml-4 text-xs text-gray-300 list-disc space-y-1">
                <li>Python </li>
                <li>HTML and CSS</li>
                <li>Foundations of JavaScript (React)</li>
                <li>SQL</li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

// Exporting the Skills component as the default export
export default Skills;
