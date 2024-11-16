import react from "../../../Image/react.png";
import node from "../../../Image/node.png";
import next from "../../../Image/next.png";
import express from "../../../Image/expreess.png";
import tail from "../../../Image/TailWind.png";
import html from "../../../Image/New-HTML5_Logo.png";
import css from "../../../Image/css-logo.png";
import javascript from "../../../Image/JavaScript-logo.png";
import mongoDb from "../../../Image/mongodb.png";

const Skill = () => {
    const skills = [
        { img: react, name: "React", alt: "React.js logo" },
        { img: node, name: "Node.js", alt: "Node.js logo" },
        { img: next, name: "Next.js", alt: "Next.js logo" },
        { img: mongoDb, name: "MongoDB", alt: "MongoDB logo" },
        { img: express, name: "Express.js", alt: "Express.js logo" },
        { img: javascript, name: "JavaScript", alt: "JavaScript logo" },
        { img: css, name: "CSS3", alt: "CSS3 logo" },
        { img: html, name: "HTML5", alt: "HTML5 logo" },
        { img: tail, name: "Tailwind CSS", alt: "Tailwind CSS logo" },
    ];

    return (
        <div className="mt-16">
            <h1 className="text-center mb-10 text-3xl font-bold">My Skills</h1>
            <ul className="grid lg:grid-cols-5 gap-8 text-center grid-cols-2 md:grid-cols-3">
                {skills.map((skill, index) => (
                    <li key={index} className="flex flex-col items-center">
                        <img
                            src={skill.img}
                            alt={skill.alt}
                            className="w-24 h-24 rounded-full mx-auto transition-transform duration-200 ease-in-out hover:scale-105"
                        />
                        <p className="mt-2 text-lg font-medium">{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skill;



