import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

function FAQ() {
  const [hidden, setHidden] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const data = [
    {
      question: "What is Portfolify",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nam quod optio corporis, pariatur error a aspernatur iure magnam amet officiis! Eaque dolor ipsam ipsum atque ex saepe voluptas consectetur vitae? Quas ratione et nemo reiciendis numquam ab unde, adipisci corporis voluptates magnam accusantium aliquam tenetur amet autem, veritatis blanditiis.",
    },
    {
      question: "What is Portfolify",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nam quod optio corporis, pariatur error a aspernatur iure magnam amet officiis! Eaque dolor ipsam ipsum atque ex saepe voluptas consectetur vitae? Quas ratione et nemo reiciendis numquam ab unde, adipisci corporis voluptates magnam accusantium aliquam tenetur amet autem, veritatis blanditiis.",
    },
    {
        question: "What is Portfolify",
        answer:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nam quod optio corporis, pariatur error a aspernatur iure magnam amet officiis! Eaque dolor ipsam ipsum atque ex saepe voluptas consectetur vitae? Quas ratione et nemo reiciendis numquam ab unde, adipisci corporis voluptates magnam accusantium aliquam tenetur amet autem, veritatis blanditiis.",
      },
      {
        question: "What is Portfolify",
        answer:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nam quod optio corporis, pariatur error a aspernatur iure magnam amet officiis! Eaque dolor ipsam ipsum atque ex saepe voluptas consectetur vitae? Quas ratione et nemo reiciendis numquam ab unde, adipisci corporis voluptates magnam accusantium aliquam tenetur amet autem, veritatis blanditiis.",
      },
      {
        question: "What is Portfolify",
        answer:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nam quod optio corporis, pariatur error a aspernatur iure magnam amet officiis! Eaque dolor ipsam ipsum atque ex saepe voluptas consectetur vitae? Quas ratione et nemo reiciendis numquam ab unde, adipisci corporis voluptates magnam accusantium aliquam tenetur amet autem, veritatis blanditiis.",
      },
  ];

  const toggleHidden = (index) => {
    setHidden((prev) => {
      if (prev === index) {
        setActiveColor(null);
        return null;
      } else {
        setActiveColor("#78aba8");
        return index;
      }
    });
  };

  return (
    <div className="w-full h-auto flex flex-col gap-y-6">
      {data.map((item, index) => {
        const isActive = hidden === index;
        const color = isActive ? activeColor : "#000000";

        return (
          <div
            key={index}
            className="w-full h-auto flex flex-col border-[1px] sm:px-8 sm:py-8 p-3 transition-colors duration-800 ease-in-out"
            style={{ borderColor: color }}
          >
            <div className="w-full flex flex-row justify-between items-center">
              <div
                className="w-[90%] flex items-center transition-colors duration-800 ease-in-out"
                style={{ color: color }}
              >
                <div
                  className="p-[3px] rounded-full bg-iconGray flex transition-colors duration-800 ease-in-out"
                  style={{ backgroundColor: color }}
                >
                  <svg
                    stroke="currentColor"
                    fill="#fafafa"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    height="0.9rem"
                    width="0.9rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium px-2">{item.question}</span>
              </div>
              <div
                className="w-[10%] h-auto flex justify-end text-[1.7rem] cursor-pointer transition-colors duration-800 ease-in-out"
                onClick={() => toggleHidden(index)}
                style={{ color: color }}
              >
                {isActive ? <FiMinus /> : <IoAddOutline />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: isActive ? "200px" : "0px",
                opacity: isActive ? "1" : "0",
                transitionDelay: isActive ? "0s" : "0.2s", 
              }}
            >
              <p className="py-2 text-lg text-gray-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
