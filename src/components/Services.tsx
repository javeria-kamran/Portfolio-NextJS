import React from 'react';
import ServicesCard from './ServicesCard';

const serviceTitles = {
  "01": "React.js Website",
  "02": "Next.js Website",
  "03": "Fullstack Website",
  "04": "Node.js API",
  "05": "MERN WebApp",
  "06": "Bug Fixing"
};

const serviceDescriptions = {
  "01": "ReactJS is a powerful JavaScript library for building user interfaces...",
  "02": "Next.js is a React framework that enables server-side rendering and static site generation...",
  "03": "A Fullstack Website uses both frontend and backend technologies to deliver a complete application...",
  "04": "Node.js API development allows creating backend services using JavaScript on the server...",
  "05": "MERN WebApp development combines MongoDB, Express.js, React, and Node.js for fullstack applications...",
  "06": "Bug Fixing services to diagnose, troubleshoot, and fix issues in your existing applications..."
};

const Services = () => {
  return (
    <div id="services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center">
        <p className="heading_mini">Premium Offerings</p>
        <h1 className="heading_primary">
          Igniting<span className="text-cyan-600"> Growth </span>through Innovative Development
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {Object.keys(serviceTitles).map((num) => (
          <div key={num} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={parseInt(num) * 200}>
            <ServicesCard title={serviceTitles[num as keyof typeof serviceTitles]} num={num} description={serviceDescriptions[num as keyof typeof serviceDescriptions]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
