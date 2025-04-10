import { motion } from "framer-motion";
import builder from "../assets/undraw_web-developer_ggt0.svg";

const About = () => {
  return (
    <div
      id="about"
      className="bg-secondBackground flex min-h-screen items-center justify-center gap-6 p-10 max-lg:flex-col"
    >
      <motion.img
        src={builder}
        alt="builder"
        className="w-64 flex-1 max-lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <section id="about" className="flex-2 text-center">
        <motion.h2
          className="text-primary mb-6 text-3xl font-bold max-md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-primaryText mx-auto max-w-2xl text-lg leading-8 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm a passionate{" "}
          <span className="text-primary font-semibold">frontend developer</span>{" "}
          with experience in{" "}
          <span className="text-primary font-semibold">
            React, TypeScript, GraphQL, and Tailwind CSS.
          </span>{" "}
          I love creating modern, scalable web applications that focus on
          performance and user experience. My journey into development started
          with a fascination for how websites work, leading me to build projects
          like an <span className="text-primary font-semibold">IMDb clone</span>{" "}
          that showcase my skills.
        </motion.p>
        <motion.p
          className="text-primaryText mt-4 tracking-wider italic max-sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Fun fact: I enjoy optimizing performance and recently achieved{" "}
          <span className="text-primary font-semibold">
            90+ Lighthouse scores
          </span>{" "}
          in my projects!
        </motion.p>
      </section>
    </div>
  );
};

export default About;
