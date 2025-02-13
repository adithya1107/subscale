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


export const about = [
  "10,000 feet",
  "Advanced tech",
  "Seamless Integration",
];
export const subsystem = [
  {
    id: "0",
    title: "Aerodynamics",
    text: "Aerodynamics subsystem ensures that the rocket follows the correct trajectory and has optimum efficiency. It involves designing fins, nose cone and performing CFD simulations to analyse the aerodynamic forces, flow pattern and stability of the rocket. Major experimental projects include supersonic simulations, air brakes, and designing active control surfaces.",
    colorful: true,
  },
  {
    id: "1",
    title: "Avionics",
    text: "The Avionics subsystem develops the flight computer for our rocket. It involves programming a multitude of sensors to track live rocket data. We also develop systems like air brakes and reaction control systems. We are further looking into data compression and video telemetry. We are working on an autonomous antenna tracker system to track our rocket in flight.",
  },
  {
    id: "2",
    title: "Payload",
    text: "Payload and Research is an interdisciplinary subsystem which develops the payload and research on various aspects of rocketry and beyond. Research into Radial Deployment of our Payloads, Supersonic Aerodynamic Profiles, Optimization of CFD using Deep Learning and Optimization of Apogee Prediction Algorithms using Machine Learning is underway.",
  },
  {
    id: "3",
    title: "Propulsion",
    text: "The Propulsion Subsystem develops the rocket engine. We plan to build the first student developed Liquid Rocket Engine in India. Research into Solid Rocket Fuel, Ignitors, Design Optimization, Thrust Vector Control and Reaction Control System Design is underway.",
    colorful: true,
  },
  {
    id: "4",
    title: "Structures",
    text: "Structures is responsible for the design of the rocket exterior and interior. We perform composite and structural simulations of the rocket airframe and internal components. Structures is responsible for the structural stability and safety of the rocket. We are also working on a static motor ground testing rig.",
    colorful:true,
  },
  {
    id: "5",
    title: "Management",
    text: "Management is responsible for the smooth functioning of the entire team. Finance & Sponsorship monitors the Team’s budget and plans and executes successful strategies for sponsorship. We make sure that our team gets all the materials required. We also manage our website and social media handles.",

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
    url: "https://x.com/ThrustMIT",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/thrustmit/",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/search/top?q=thrust%20mit",
  },
];
