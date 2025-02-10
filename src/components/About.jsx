import Section from "./Section";
import Heading from "./Heading";
import { about1 } from "../assets";
import { about } from "../constants";
import { Gradient } from "./design/About";

const About = () => {
  return (
    <Section id="about">
      <div className="container">
        <Heading title="Team Indra" text="Project Vajra" />

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div className="lg:w-1/2 w-full max-h-[46rem] overflow-hidden rounded-3xl">
            <img
              className="w-full h-full object-cover"
              width={800}
              height={730}
              alt="About"
              src={about1}
            />
          </div>

          <div className="lg:w-1/2 w-full p-6 lg:p-8 xl:p-12 rounded-3xl bg-black/15 shadow-md">
            <h4 className="h4 mb-4">About Vajra</h4>
            <p className="body-2 mb-6 text-n-3">
            Our aim is to design, build, and launch Vajra, a high-performance sounding rocket capable of reaching 10,000 feet, pushing the frontiers of student rocketry with precision and innovation. As Team Indra, we are driven by a relentless passion for aerospace engineering, combining advanced aerodynamics, cutting-edge propulsion, and rigorous testing to achieve mission success.
            </p>
            <ul className="body-2 space-y-4">
              {about.map((item, index) => (
                <li key={index} className="flex items-start py-2 border-t border-n-6 first:border-t-0">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default About;