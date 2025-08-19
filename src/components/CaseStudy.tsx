import { motion } from "framer-motion";

type Props = {
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    findings?: { title: string; items: string[] }[];
    impact: string[];
    techStack: string[];
};

function CaseStudy({
    title,
    subtitle,
    problem,
    solution,
    findings = [],
    impact,
    techStack,
}: Props) {
    return (
        <div className="bg-background  px-6 py-16 text-primaryText">

        <div className="max-w-5xl mx-auto">
  {/* Hero */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
    <p className="text-lg text-secondaryText">{subtitle}</p>
  </motion.div>

  {/* Problem */}
  <motion.section
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mb-12 p-6 rounded-2xl bg-secondBackground border border-border shadow-lg"
  >
    <h2 className="text-2xl font-semibold text-accent mb-4">The Problem</h2>
    <p className="text-primaryText leading-relaxed">{problem}</p>
  </motion.section>

  {/* Solution */}
  <motion.section
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mb-12 p-6 rounded-2xl bg-secondBackground border border-border shadow-lg"
  >
    <h2 className="text-2xl font-semibold text-accent mb-4">The Solution</h2>
    <p className="text-primaryText leading-relaxed">{solution}</p>
  </motion.section>


  {/* Findings */}
{findings.length > 0 && (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-6 mb-12"
  >
    {findings.map((f, idx) => (
      <div
        key={idx}
        className="p-6 rounded-2xl bg-secondBackground border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow"
      >
        <h3 className="text-xl font-semibold text-accent mb-2">{f.title}</h3>
        <ul className="list-disc list-inside text-primaryText space-y-1">
          {f.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </motion.section>
)}


  {/* Impact */}
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="mb-12 p-6 rounded-2xl bg-secondBackground border border-border shadow-lg"
  >
    <h2 className="text-2xl font-semibold text-accent mb-4">Business Impact</h2>
    <ul className="list-disc list-inside text-primaryText space-y-1">
      {impact.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.section>

  {/* Tech Stack */}
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-secondBackground border border-border shadow-lg"
  >
    <h2 className="text-2xl font-semibold text-accent mb-4">Tech Stack</h2>
    <div className="flex flex-wrap gap-3">
      {techStack.map((tech, idx) => (
        <span
          key={idx}
          className="px-4 py-2 rounded-xl bg-primary/10 border border-primary text-primary text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.section>
</div>
        </div>

    )
}

export default CaseStudy