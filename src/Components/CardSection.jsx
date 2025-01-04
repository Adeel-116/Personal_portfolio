import React from "react";

const cards = [
  {
    title: "Frontend Development",
    description: "Building responsive and dynamic user interfaces using React, Tailwind CSS, and modern JavaScript frameworks.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description: "Developing secure and scalable server-side applications with Node.js, Express.js, and MongoDB.",
    icon: "🛠️",

  },
  {
    title: "Mobile Apps",
    description: "Building intuitive and high performance mobile apps for iOS and Android using React Native and Flutter.",
    icon: "📱",
  },
];

const Card = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg px-6 py-10  hover:shadow-lg transition-shadow duration-300 hover:shadow-darkGray">
    <div className="text-4xl mb-4 text-center">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 2xl:text-[16px] xl:text-[15px]">{description}</p>
  </div>
);

const CardSection = () => {
  return (
    <div className="2xl:pt-16 sm:pt-12 pt-10  bg-gray-100">
      <h2 className="sm:text-5xl text-4xl font-bold text-gray-800">
        What I Offer
      </h2>
      <div className="flex justify-center items-center bg-red-300">
        <div className="grid grid-cols-1 gap-6 pt-7 max-w-6xl sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
