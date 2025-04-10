import { motion } from "framer-motion";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import imdb from "../assets/IMDB.webp";
import youtube from "../assets/Youtube.webp";
import name from "../assets/naming.webp";
import check from "../assets/name_check.webp";
import key from "../assets/key.webp";
import quiz from "../assets/quiz.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "IMDb Clone",
    description:
      "A full-featured IMDb clone using React, TypeScript, GraphQL, and MongoDB.",
    github: "https://github.com/Rammah-mohamed/IMDB-Clone",
    live: "https://imdb-clone-eta-three.vercel.app/",
    image: imdb,
  },
  {
    title: "Youtube Clone",
    description:
      "A modern Youtube UI clone with React, REST API, and Material UI.",
    github: "https://github.com/Rammah-mohamed/Youtube-Clone",
    live: "https://youtube-clone-virid-zeta.vercel.app/",
    image: youtube,
  },
  {
    title: "Quiz App",
    description:
      "A lightweight quiz app built with HTML, CSS, and TypeScript using the Open Trivia API.",
    live: "https://quiz-app-one-pearl.vercel.app/",
    github: "https://github.com/Rammah-mohamed/Quiz-App",
    image: quiz,
  },
  {
    title: "Fix: Prevent Duplicate Folder/Request Names",
    description:
      "Prevented duplicate folder names when users used hyphens or spaces. Improved data integrity for request naming.",
    github: "https://github.com/EXXETA/trufos/pull/297",
    image: check,
  },
  {
    title: "Enhancement: Keyboard Accessibility in Modal",
    description:
      "Improved modal accessibility by adding ESC key support to close or cancel modal actions for better UX.",
    github: "https://github.com/EXXETA/trufos/pull/292",
    image: key,
  },
  {
    title: 'Bugfix: Empty Input Field Always Showing "Folder"',
    description:
      "Fixed logic to correctly differentiate between folder and request placeholders in the input field.",
    github: "https://github.com/EXXETA/trufos/pull/296",
    image: name,
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-secondBackground min-h-screen p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <div>
          <motion.h2
            className="text-primary mb-8 text-center text-3xl font-bold max-md:text-xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-secondaryText mx-auto mb-6 max-w-4xl text-center leading-6 tracking-wider max-md:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Here's a selection of projects I've built to sharpen my skills and
            solve real-world problems. Each project showcases my ability to
            craft responsive, user-friendly interfaces using modern front-end
            technologies like React, TypeScript, Tailwind CSS, and more...
          </motion.p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card imageUrl={project.image} className="shadow-lg">
                  <CardContent>
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm tracking-wide text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        href={project.github}
                      >
                        <IconBrandGithub /> GitHub
                      </Button>
                      <Button
                        className="flex items-center gap-2"
                        href={project.live}
                      >
                        <IconExternalLink /> Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2
            className="text-primary mb-8 text-center text-3xl font-bold max-md:text-xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Open Source Contributions
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(3).map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card imageUrl={project.image} className="shadow-lg">
                  <CardContent>
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm tracking-wide text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        href={project.github}
                      >
                        <IconBrandGithub /> GitHub
                      </Button>
                      <Button
                        className="flex items-center gap-2"
                        href={project.live}
                      >
                        <IconExternalLink /> Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
