import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: "Chainshift",
    description:
      "ChainShift is a blockchain-based cybersecurity company focused on delivering cutting-edge security solutions. The project involves creating a professional and user-friendly website that showcases the company’s expertise, services, and innovations in the cybersecurity field. The website will serve as the primary digital platform for ChainShift, providing detailed information about the company’s blockchain-driven security solutions, client success stories, and industry insights. The goal is to establish a strong online presence that reflects ChainShift’s commitment to protecting digital assets with advanced blockchain technology.",
    tools: [
      "Express",
      "MongoDB",
      "OpenAI API",
      "Postgres",
      "HTML",
      "CSS",
      "JavaScript",
      "Reactjs",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "chainshift.in",
    image: crefin,
  },
  {
    id: 2,
    name: "Blockchain Based voting System",
    description:
      "A secure, transparent, and decentralized voting system built on blockchain technology (hardhat, Node, solidity, javascript etc). This repository contains the code and documentation needed to deploy a blockchain-based voting platform that ensures integrity and anonymity in the voting process.",
    tools: [
      "Solidity",
      "CSS",
      "Html",
      "Javascript",
      "HardHat",
      "Docker",
      "Ethereum",
      "NodeJs",
    ],
    role: "Blockchain Developer",
    code: "",
    demo: "https://github.com/yash-rana0101/blockchain-voting-system",
    image: travel,
  },
  {
    id: 3,
    name: "Employer Check-in Check-out System",
    description:
      "This project calculates employees' total work hours based on their check-in and check-out times, providing details like first check-in, last check-out, total out count, and total work hours. It helps organizations track and manage employee attendance efficiently.",
    tools: ["SQL", "Microsoft SQL Studio", "Database"],
    code: "",
    role: "SQL Intern",
    demo: "https://github.com/yash-rana0101/Employer-checkIn-CheckOut-System",
    image: realEstate,
  },
  {
    id: 4,
    name: "Cyber Hunter Website",
    description:
      "I am currently working on a project aimed at creating an advanced system for team management, team tracking, project management, and project tracking. This project, still under construction, is focused on developing an intuitive and efficient platform tailored to the diverse needs of teams and project managers. My contribution lies in UI/UX design and frontend development, where I am dedicated to crafting a user-friendly experience with seamless interaction and functionality. In the UI/UX phase, I design interfaces that enhance user productivity through easy navigation and clear visuals, while in frontend development, I translate these designs into responsive, efficient code using the latest technologies. My goal is to deliver a robust, scalable system that effectively supports project tracking and team collaboration, exceeding user and stakeholder expectations.",
    tools: ["ReactJS", "Tailwind Css", "Redux", "MongoDB", "RestAPI", "NodeJs",],
    code: "",
    demo: "",
    image: ayla,
    role: "Frontend Developer",
  },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },