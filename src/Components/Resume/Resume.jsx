import React from "react";
import Button from "../Button";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Picture from "../../assets/profile2.jpg";

// Data for dynamic rendering
const profile = {
  name: "Daniela Vezzi",
  title: "Senior Software Engineer",
  contact: {
    phone: "0123 4567 8901",
    email: "Daniela@gmail.com",
    website: "www.Danieladev.com",
    location: "New York, USA",
  },
  about:
    "Passionate Senior Software Engineer with 8+ years of experience building scalable web applications and leading development teams. Expertise in modern JavaScript frameworks, cloud architecture, and agile methodologies. Proven track record of delivering high-quality solutions that drive business growth and improve user experience.",
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Google",
    duration: "2023 - Present",
    description: [
      "Lead development of high-traffic web applications serving millions of users daily",
      "Architected microservices infrastructure reducing system latency by 40%",
      "Mentored junior developers and established coding standards for the team",
      "Collaborated with product managers to define technical requirements and roadmaps"
    ],
  },
  {
    title: "Lead Software Developer",
    company: "Apple",
    duration: "2020 - 2023",
    description: [
      "Managed a team of 6 developers building customer-facing mobile applications",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Developed RESTful APIs handling 10M+ requests per day",
      "Led migration from monolithic to microservices architecture"
    ],
  },
  {
    title: "Software Developer",
    company: "Microsoft",
    duration: "2018 - 2020",
    description: [
      "Built responsive web applications using React and Node.js",
      "Optimized database queries improving application performance by 35%",
      "Participated in code reviews and maintained high code quality standards",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces"
    ],
  },
];

const skills = {
  technical: [
    "JavaScript, TypeScript, React, Vue.js",
    "Python, Java, C#, Node.js",
    "AWS, Docker, Kubernetes, Jenkins",
    "PostgreSQL, MongoDB, Redis",
    "Git, Agile, Scrum, TDD"
  ],
  professional: [
    "Team Leadership & Mentoring",
    "Project Management",
    "Technical Architecture Design",
    "Cross-functional Collaboration",
    "Problem Solving & Critical Thinking"
  ],
};

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "University College London",
    year: "2018",
  },
  {
    degree: "BSc in Software Engineering",
    institution: "Imperial College London",
    year: "2016",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    type: "Personal Project",
    description: "Built a full-stack e-commerce platform using React, Node.js, and PostgreSQL. Implemented payment processing, inventory management, and real-time notifications."
  },
  {
    title: "Task Management System",
    type: "Open Source",
    description: "Developed a collaborative task management tool with real-time updates, file sharing, and team communication features. Used by 500+ developers worldwide."
  },
  {
    title: "Data Visualization Dashboard",
    type: "Freelance",
    description: "Created an interactive dashboard for financial data analysis using D3.js and Python. Helped client make data-driven decisions resulting in 20% revenue increase."
  },
];

const awards = [
  "Employee of the Year 2023 - Google",
  "Best Innovation Award 2022 - Apple",
  "Technical Excellence Award 2021 - Apple"
];

const languages = ["English (Native)", "Spanish (Professional)", "French (Conversational)"];

const interests = ["Rock Climbing", "Photography", "Open Source Contributing", "Tech Blogging", "Travel"];

function Resume() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-50">
      {/* Header Section */}
      <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px] bg-white">
        <div className="w-[75%] mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
          <h1 className="text-[2.1rem] font-bold text-black">Online Resume</h1>
          <div className="w-[250px] gap-2 mt-1.5">
            <Button
              buttonText={"Download PDF version"}
              buttonIcon={<IoIosSend />}
            />
          </div>
        </div>
      </section>

      {/* Main Resume Content */}
      <div className="2xl:w-[80%] lg:w-[85%] sm:w-[83%] w-[90%] xl:mt-14 lg:mt-10 bg-lightWhite px-8 lg:px-20 rounded-xl h-auto overflow-hidden flex flex-col gap-y-8 mb-20">
        
        {/* Profile Header */}
        <section className="w-full h-auto mt-8 py-6 border-b-[1px] border-iconGray flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0">
          <div className="flex-grow">
            <h1 className="text-lightGreen font-semibold text-[2.5rem] lg:text-[3.5rem] leading-tight">
              {profile.name}
            </h1>
            <h3 className="text-lg lg:text-xl font-medium text-black mt-2">
              {profile.title}
            </h3>
          </div>
          
          <div className="w-full lg:basis-1/3 lg:border-l-[1px] border-iconGray">
            <div className="w-full h-auto flex flex-col py-4 gap-3">
              <div className="w-full h-auto flex items-center py-1 px-0 lg:px-4">
                <div className="flex justify-center items-center text-lightGreen mr-3">
                  <FaPhoneAlt size={16} />
                </div>
                <p className="text-sm text-black">{profile.contact.phone}</p>
              </div>

              <div className="w-full h-auto flex items-center py-1 px-0 lg:px-4">
                <div className="flex justify-center items-center text-lightGreen mr-3">
                  <FaEnvelope size={16} />
                </div>
                <p className="text-sm text-black">{profile.contact.email}</p>
              </div>

              <div className="w-full h-auto flex items-center py-1 px-0 lg:px-4">
                <div className="flex justify-center items-center text-lightGreen mr-3">
                  <FaGlobe size={16} />
                </div>
                <p className="text-sm text-black">{profile.contact.website}</p>
              </div>

              <div className="w-full h-auto flex items-center py-1 px-0 lg:px-4">
                <div className="flex justify-center items-center text-lightGreen mr-3">
                  <FaMapMarkerAlt size={16} />
                </div>
                <p className="text-sm text-black">{profile.contact.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full  flex flex-col lg:flex-row h-auto py-8 gap-6">
          <div className="w-full lg:w-auto h-auto flex justify-center lg:justify-start items-start">
            <img src={Picture} alt="Profile" className="rounded-full w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] object-cover shadow-lg"/>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-lightGreen mb-4">About Me</h2>
            <p className="text-sm lg:text-base text-black leading-relaxed">
              {profile.about}
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="w-full flex flex-col lg:flex-row gap-8 pb-8">
          
          {/* Left Column - Main Content */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-semibold text-lightGreen mb-6 border-b-2 border-lightGreen pb-2">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-black">{exp.title}</h3>
                      <span className="text-sm text-iconGray font-medium">{exp.duration}</span>
                    </div>
                    <h4 className="text-base font-medium text-lightGreen mb-3">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-sm text-black flex items-start">
                          <span className="text-lightGreen mr-2 mt-1.5">•</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-semibold text-lightGreen mb-6 border-b-2 border-lightGreen pb-2">
                Key Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                      <span className="text-sm text-iconGray font-medium">{project.type}</span>
                    </div>
                    <p className="text-sm text-black leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-8">
            
            {/* Skills Section */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <span className="text-sm text-black">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Skills */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Professional Skills
              </h2>
              <div className="space-y-2">
                {skills.professional.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-lightGreen mr-2">•</span>
                    <span className="text-sm text-black">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-base font-semibold text-black">{edu.degree}</h3>
                    <p className="text-sm text-black">{edu.institution}</p>
                    <p className="text-sm text-black">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Awards & Recognition
              </h2>
              <div className="space-y-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-lightGreen mr-2 mt-1">•</span>
                    <span className="text-sm text-black leading-relaxed">{award}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Languages
              </h2>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-lightGreen mr-2">•</span>
                    <span className="text-sm text-black">{language}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests Section */}
            <section>
              <h2 className="text-xl font-semibold text-lightGreen mb-4 border-b-2 border-lightGreen pb-2">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="bg-lightGreen text-black text-xs px-3 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;