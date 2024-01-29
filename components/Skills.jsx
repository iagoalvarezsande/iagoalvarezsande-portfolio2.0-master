// Importing necessary dependencies and data
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { skillsList, images } from "./skills";

// SkillContainer Component
const SkillContainer = ({ title, description }) => {
  // State to track the visibility of the description
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  // Function to toggle the visibility of the description
  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="w-full lg:px-4 mb-4 md:mb-0">
      <div className="p-3 rounded-lg items-center cursor-pointer">
        {/* Title and arrow icon for toggling the description visibility */}
        <div className="flex items-center" onClick={toggleDescription}>
          <h3
            className={`px-2 text-xl font-semibold transition-all ${
              isDescriptionVisible ? "text-blue-500 mb-2" : ""
            }`}
          >
            {title}
          </h3>
          <IoIosArrowDown
            className={`text-xl transition-all transform ${
              isDescriptionVisible ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {/* Description with conditional styling based on visibility */}
        <p
          className={`px-2 py-1 transition-all duration-700 max-h-0 overflow-hidden justify-evenly ${
            isDescriptionVisible ? "max-h-screen opacity-100 mb-2" : "opacity-0"
          }`}
        >
          {description}
        </p>
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
    <div
      className="m-auto md:grayscale hover:grayscale-0"
      style={{ cursor: "pointer" }}
    >
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
    <div id="skills" className="px-10 w-full lg:h-screen pt-32">
      {/* Main container for skills section */}
      <div className=" md:px-40 max-w-[1240px] m-auto md:flex flex-col gap-8">
        <div className="flex-col">
          {/* Section heading for skills */}
          <p className="uppercase text-xl tracking-widest text-[#6b6b57]">
            Skills
          </p>
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
        <div className="flex flex-col">
          {/* SkillContainer components for displaying detailed skill descriptions */}
          <SkillContainer
            title="Project Management"
            description="Orchestration of end-to-end solutions, meticulous strategic roadmap planning, and the seamless execution of dynamic workshops. 
            Proficient in Agile frameworks and Scrum methodologies, I ensure the delivery of projects that are both efficient and adaptive to evolving requirements."
          />
          <SkillContainer
            title="Pharmaceutical Industry"
            description="With a nuanced understanding of intricate business processes, specialized knowledge in clinical trials regulatory processes, and a comprehensive grasp of quality and manufacturing intricacies, I am adept at implementing cutting-edge SaaS applications tailored precisely to sophisticated processes."
          />
          <SkillContainer
            title="Coding"
            description="With a foundational grasp of Python and JavaScript, I leverage coding skills to enhance data analysis, automate processes, and contribute to projects in laboratory research and data migration. I also enjoy doing some design with CSS for landing pages."
          />
        </div>
      </div>
    </div>
  );
};

// Exporting the Skills component as the default export
export default Skills;
