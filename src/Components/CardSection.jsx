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
    title: "Mobile Application Development",
    description: "Building intuitive and high-performance mobile applications for iOS and Android using React Native and Flutter.",
    icon: "📱",
  },
];

const Card = ({ title, description, icon }) => (
  <div className="bg-white shadow-md  rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 hover:shadow-darkGray">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CardSection = () => {
  return (
    <div className="pt-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800">
        What I Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 max-w-6xl mx-auto">
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
  );
};

export default CardSection;
