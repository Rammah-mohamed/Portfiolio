import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <IconBrandHtml5 stroke={2} className="text-[#E34F26]" />,
      level: 95,
      color: "bg-[#E34F26]",
    },
    {
      name: "CSS3",
      icon: <IconBrandCss3 stroke={2} className="text-[#1572B6]" />,
      level: 95,
      color: "bg-[#1572B6]",
    },
    {
      name: "JavaScript/ES6",
      icon: <IconBrandJavascript stroke={2} className="text-[#F7DF1E]" />,
      level: 90,
      color: "bg-[#F7DF1E]",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript stroke={2} className="text-[#3178C6]" />,
      level: 80,
      color: "bg-[#3178C6]",
    },
    {
      name: "React",
      icon: <IconBrandReact stroke={2} className="text-[#61DAFB]" />,
      level: 90,
      color: "bg-[#61DAFB]",
    },
    {
      name: "Redux",
      icon: <IconBrandRedux stroke={2} className="text-[#764ABC]" />,
      level: 90,
      color: "bg-[#764ABC]",
    },
    {
      name: "GraphQL",
      icon: <IconBrandGraphql stroke={2} className="text-[#E10098]" />,
      level: 95,
      color: "bg-[#E10098]",
    },
    {
      name: "MongoDB",
      icon: <IconBrandMongodb stroke={2} className="text-[#47A248]" />,
      level: 70,
      color: "bg-[#47A248]",
    },
    {
      name: "Node.js",
      icon: <IconBrandNodejs stroke={2} className="text-[#339933]" />,
      level: 80,
      color: "bg-[#339933]",
    },
    {
      name: "Tailwind CSS",
      icon: <IconBrandTailwind stroke={2} className="text-[#38B2AC]" />,
      level: 85,
      color: "bg-[#38B2AC]",
    },
    {
      name: "Jest/Vitest",
      icon: <IconBrandVite stroke={2} className="text-[#C21325]" />,
      level: 70,
      color: "bg-[#C21325]",
    },
    {
      name: "Git",
      icon: <IconBrandGit stroke={2} className="text-[#F05032]" />,
      level: 90,
      color: "bg-[#F05032]",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-background min-h-screen p-10 text-center"
    >
      <motion.h2
        className="text-primary mb-6 text-3xl font-bold max-md:text-xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        className="text-secondaryText mx-auto mb-6 max-w-4xl leading-6 tracking-wider max-md:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I build high-performance, scalable web apps with React, TypeScript,
        GraphQL, Tailwind CSS, and MongoDB, focusing on clean architecture,
        state management, and optimization. Skilled in Vitest testing,
        full-stack deployment, and image optimization, I craft seamless user
        experiences with robust performance.
      </motion.p>

      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-secondBackground flex flex-col gap-2 rounded-lg p-2 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl max-md:text-xl">{skill.icon}</span>
              <p className="text-primaryText text-lg font-semibold max-md:text-base">
                {skill.name}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-secondaryText h-3 w-full overflow-hidden rounded-lg">
              <motion.div
                className={`h-full rounded-lg ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Percentage Display */}
            <p className="text-primaryText font-semibold max-md:text-sm">
              {skill.level}% Proficiency
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
