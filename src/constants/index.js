import {
  adithya,
  dhruv,
  facebook,
  instagram,
  krishanu,
  rudra,
  shaunak,
  shaurya,
  swara,
  tharun,
  tushit,
  twitter,
  vansh,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Subsystems",
    url: "#subsystems",
  },
  {
    id: "2",
    title: "Team",
    url: "#team",
  },
];

export const subsystem = [
  {
    id: "0",
    title: "Aerodynamics",
    text: "The aerodynamics subsystem ensures the rocket’s efficiency and trajectory by conducting CFD simulations to analyze stability and aerodynamic forces. It also designs the fins and nosecone for flight stability. The fins consist of four trapezoidal structures with a 2.7mm thickness and rounded cross-section, while the nosecone follows a tangent Ogive profile with a 3:1 fineness ratio.",
    colorful: true,
  },
  {
    id: "1",
    title: "Avionics",
    text: "The avionics subsystem develops and integrates the rocket’s flight computer, using sensors to monitor real-time flight data. Custom algorithms process this data for precise decision-making, including recovery system deployment for controlled descent. It also designs the ignition system for static motor tests and a live data visualization system for enhanced monitoring and analysis.",
  },
  {
    id: "2",
    title: "Payload",
    text: "The payload subsystem focuses on developing mission-defining experiments or technologies. This year’s payload features a GIMBAL-controlled platform structurally attached to CANSAT with springs, designed to withstand rocket-induced vibrations. An onboard microcontroller actively adjusts the platform to keep a PYRAMID object within the camera’s center frame, ensuring precise tracking and capturing the entire process.",
  },
  {
    id: "3",
    title: "Propulsion",
    text: "The propulsion subsystem designs and develops the solid rocket motor (SRM), selecting and mixing propellants, creating reliable igniters, and conducting tests to ensure proper ignition and consistent thrust. Simulations and practical tests refine performance, ensuring safe and effective operation during flight.",
    colorful: true,
  },
  {
    id: "4",
    title: "Structures",
    text: "The structures subsystem handles the 3D design, manufacturing, and assembly of rocket components in a robust manner. It ensures structural integrity through simulations and design optimizations, enhancing overall rocket performance.",
    colorful:true,
  },
  {
    id: "5",
    title: "Management",
    text: "The management team ensures smooth operations by overseeing finances, sponsorships, and resource procurement. The finance and sponsorship department handles budgeting, sponsorship plans, and acquisitions. They also manage thrustMIT’s social media presence and website. Meanwhile, the design team creates promotional materials like posters and brochures, crafting visually appealing content that represents Indra’s initiatives.",

  }
];

export const team = [
  {
    id: "0",
    title: "Shaurya Mittal",
    text: "Aerodynamics Member",
    backgroundUrl: "./src/assets/team/card-1.svg",
    profile: shaurya,
  },
  {
    id: "1",
    title: "Shaunak Purkayastha",
    text: "Propulsion Member",
    backgroundUrl: "./src/assets/team/card-2.svg",
    light: true,
    profile: shaunak,
  },
  {
    id: "2",
    title: "Tushit Chatterjee",
    text: "Structures Member",
    backgroundUrl: "./src/assets/team/card-3.svg",
    profile: tushit,
  },
  {
    id: "3",
    title: "Krishanu Dey",
    text: "Avionics Member",
    backgroundUrl: "./src/assets/team/card-4.svg",
    light: true,
    profile: krishanu,
  },
  {
    id: "4",
    title: "Dhruv Phalod",
    text: "Avionics Member",
    backgroundUrl: "./src/assets/team/card-5.svg",
    profile: dhruv,
  },
  {
    id: "5",
    title: "Vanshdeep Trivedi",
    text: "Avionics Member",
    backgroundUrl: "./src/assets/team/card-6.svg",
    profile: vansh,
  },
  {
    id: "6",
    title: "Mutra Sai Tharun",
    text: "Payload Member",
    backgroundUrl: "./src/assets/team/card-7.svg",
    light: true,
    profile: tharun,
  },
  {
    id: "7",
    title: "Rudra Rajpurohit",
    text: "Payload Member",
    backgroundUrl: "./src/assets/team/card-8.svg",
    profile: rudra,
  },
  {
    id: "8",
    title: "Swaraa Sule",
    text: "Management Member",
    backgroundUrl: "./src/assets/team/card-9.svg",
    light: true,
    profile: swara,
  },
  {
    id: "10",
    title: "Adithya Adiga",
    text: "Management Member",
    backgroundUrl: "./src/assets/team/card-10.svg",
    profile: adithya,
  },
];

export const footer = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
