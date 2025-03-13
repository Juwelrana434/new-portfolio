import { motion } from "framer-motion";
import react from "../../../Image/react.png";
import node from "../../../Image/node.png";
import next from "../../../Image/next.png";
import express from "../../../Image/expreess.png";
import tail from "../../../Image/TailWind.png";
import html from "../../../Image/New-HTML5_Logo.png";
import css from "../../../Image/css-logo.png";
import javascript from "../../../Image/JavaScript-logo.png";
import mongoDb from "../../../Image/mongodb.png";

const skills = [
  { img: next, name: "Next.js", alt: "Next.js logo" },
  { img: react, name: "React", alt: "React.js logo" },
  { img: node, name: "Node.js", alt: "Node.js logo" },
  { img: mongoDb, name: "MongoDB", alt: "MongoDB logo" },
  { img: express, name: "Express.js", alt: "Express.js logo" },
  { img: javascript, name: "JavaScript", alt: "JavaScript logo" },
  { img: css, name: "CSS3", alt: "CSS3 logo" },
  { img: html, name: "HTML5", alt: "HTML5 logo" },
  { img: tail, name: "Tailwind CSS", alt: "Tailwind CSS logo" },
];

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-16 px-6"
    >
      <h1 className="text-center mb-10 text-3xl font-bold text-gray-800">
        My Skills
      </h1>
      <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 text-center">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white"
          >
            <img
              src={skill.img}
              alt={skill.alt}
              className="w-24 h-24 rounded-full transition-transform duration-200 ease-in-out"
            />
            <p className="mt-2 text-lg font-medium text-gray-700">
              {skill.name}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skill;
