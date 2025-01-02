import React from "react";

const skills = [
  { name: "ReactJS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "Git", level: 85 },
  { name: "VS Code", level: 90 },
  { name: "Postman", level: 80 },
  { name: "React Native", level: 100 },
  { name: "Java", level: 90 },
  { name: "Python", level: 100 },
];

const SkillCard = ({ skills }) => {
  return (
    <div className="p-4 flex justify-center flex-wrap gap-8">
      {skills.map((skill) => (
        <div key={skill.name} className="w-[280px]">
          <div className="flex justify-between mb-2">
            <span className="text-gray-800 font-medium">{skill.name}</span>
            <span className="text-gray-500 text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-lightGreen h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div className="w-full mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        Technical Skills
      </h2>
      <SkillCard skills={skills} />
    </div>
  );
};

export default TechnicalSkills;
