import { motion } from "framer-motion";
import builder from "../assets/undraw_web-developer_ggt0.svg";

const About = () => {
  return (
    <div
  id="about"
  className="bg-secondBackground flex min-h-screen items-center justify-center gap-6 p-10 max-lg:flex-col"
>
  {/* Illustration / Image */}
  <motion.img
    src={builder}
    alt="builder"
    className="w-64 flex-1 max-lg:hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  />

  {/* About Section */}
  <section id="about" className="flex-2 text-center">
    <motion.h2
      className="text-primary mb-6 text-3xl font-bold max-md:text-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      About Me
    </motion.h2>

    {/* Main Bio */}
    <motion.p
      className="text-primaryText mx-auto max-w-2xl text-lg leading-8 tracking-wider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      I'm a self-taught{" "}
      <span className="text-primary font-semibold">frontend developer</span>{" "}
      with over 3 years of experience building{" "}
      <span className="text-primary font-semibold">React + TypeScript</span>{" "}
      applications. My specialty is creating{" "}
      <span className="text-primary font-semibold">
        internal tools for B2B SaaS operations teams
      </span>
      —dashboards, cost-optimization platforms, and workflow apps that help
      companies cut waste, save time, and make data-driven decisions.
    </motion.p>

    {/* Secondary Bio */}
    <motion.p
      className="text-primaryText mx-auto mt-4 max-w-2xl text-lg leading-8 tracking-wider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      I enjoy turning complex problems into clean, scalable interfaces using{" "}
      <span className="text-primary font-semibold">
        Supabase, GraphQL, and Tailwind CSS
      </span>
      . Recently, I built a{" "}
      <span className="text-primary font-semibold">
        SaaS Spend Dashboard
      </span>{" "}
      that simulated saving a mid-sized company{" "}
      <span className="text-primary font-semibold">$300,000 annually</span> by
      eliminating unused software licenses.
    </motion.p>

    {/* Fun Fact / Personality */}
    <motion.p
      className="text-primaryText mt-6 tracking-wider italic max-sm:text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Beyond coding, I love optimizing processes—whether that’s improving a
      workflow, fine-tuning performance for{" "}
      <span className="text-primary font-semibold">90+ Lighthouse scores</span>,
      or helping a team save hours of repetitive work.
    </motion.p>
  </section>
</div>

  );
};

export default About;
