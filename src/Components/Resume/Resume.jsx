import React from "react";
import Button from "../Button";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Picture from "../../assets/profilePicture/Picture.png";
// Data for dynamic rendering
const profile = {
  name: "Chris Evans",
  title: "Senior Software Engineer",
  contact: {
    phone: "0123 4567 890",
    email: "Evans@yourwebsite.com",
    location: "New York",
  },
  about:
    "Summarize your career here. You can make a PDF version of your resume using our free Sketch template here.",
};

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Google",
    duration: "2023 - Present",
    description: [
      "Lorem ipsum dolor sit amet.",
      "Aenean commodo ligula eget dolor.",
      "Etiam ultricies nisi vel augue.",
    ],
  },
  {
    title: "Lead Software Developer",
    company: "Apple",
    duration: "2016 - 2019",
    description: [
      "Lorem ipsum dolor sit amet.",
      "Aenean commodo ligula eget dolor.",
      "Etiam ultricies nisi vel augue.",
    ],
  },
  // Add more experiences as needed
];

const skills = {
  technical: [
    "JavaScript/React/Vue",
    "Python/Ruby/PHP",
    "Node.js/ASP.NET",
    "PostgreSQL/MySQL",
  ],
  professional: [
    "Effective communication",
    "Team player",
    "Strong problem solver",
    "Good time management",
  ],
};

const education = [
  {
    degree: "MSc in Computer Science",
    institution: "University College London",
    year: "2019",
  },
  {
    degree: "BSc in Maths and Physics",
    institution: "Imperial College London",
    year: "2017",
  },
];

const projects = [
  {
    title: "Project Lorem Ipsum",
    type: "Open Source",
    description:
      "You can use this section for your side projects. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Project Sed Fringilla",
    type: "Open Source",
    description:
      "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
  },
];

const awards = ["Award Lorem Ipsum", "Award Donec Sodales Oracle Aenean"];

const languages = ["English (Native)", "Spanish (Professional)"];

const interests = ["Climbing", "Snowboarding", "Photography", "Travelling"];

function Resume() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <section className="w-full flex justify-center items-center h-auto border-darkGray border-b-[1px]">
        <div className="w-[75%] mt-10 flex flex-col gap-y-2.5 justify-center items-center h-auto py-12">
          <h1 className="text-[2.1rem] font-bold">Online Resume</h1>
          <div className="w-[250px] gap-2 mt-1.5">
            <Button
              buttonText={"Download PDF version"}
              buttonIcon={<IoIosSend />}
            />
          </div>
        </div>
      </section>

      <div className="2xl:w-[80%]  lg:w-[85%] sm:w-[83%] w-[90%] xl:mt-14 lg:mt-20 bg-lightWhite px-20 rounded-xl h-auto overflow-hidden flex flex-col lg:gap-y-6">
        <section className="w-full h-auto  mt-2 py-6 border-b-[1px] border-iconGray flex items-center">
          <div className="grow  ">
            <h1 className="text-lightGreen font-semibold text-[3.5rem]">
              Chris Evans
            </h1>
            <h3 className="text-xl font-medium ">Senior Software Engineer</h3>
          </div>
          <div className="basis-1/4 grow-1 border-l-[1px] border-iconGray ">
           
            <div className="w-full h-auto flex flex-col py-4">

              <div className="w-full h-auto flex py-1 px-4">
                <div className=" flex justify-center items-center">
                <FaPhoneAlt />
                </div>
                <p className="px-2">0300 5252689</p>
              </div>


              <div className="w-full h-auto flex py-1 px-4">
                <div className=" flex justify-center items-center">
                <FaEnvelope />
                </div>
                <p className="px-2">adeel@gmail.com</p>
              </div>



              <div className="w-full h-auto flex py-1 px-4">
                <div className=" flex justify-center items-center">
                <FaGlobe />
                </div>
                <p className="px-2">www.google.com</p>
              </div>


              <div className="w-full h-auto flex py-1 px-4">
                <div className=" flex justify-center items-center">
                <FaMapMarkerAlt />
                </div>
                <p className="px-2">New York</p>
              </div>
              
            </div>
          </div>
        </section>

        <section className="w-full border-b-[1px] border-iconGray flex h-auto py-5">
          <div className="w-auto h-auto flex items-center p-2">
            <img src={Picture} alt="" className="rounded-full w-[200px] h-auto"/>
          </div>
          <div className="w-full flex items-center px-7 text-sm">
            <p>Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
          </div>
        </section>

        <div className="w-full bg-red-600 flex h-[300px]">
          <div className="grow bg-yellow-500"></div>
          <div className="basis-1/4 grow-1 bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
