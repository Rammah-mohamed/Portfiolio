import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import developer from "../assets/undraw_developer-activity_dn7p.svg";

const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, ease: "easeOut", duration: 0.6 },
  }),
};

const Hero = () => {
  const name: string[] = "   Rammah Mohamed".split("");
  return (
    <div
      id="hero"
      className="hero-height bg-background flex items-center justify-center"
    >
      <section className="relative flex flex-2 flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="border-primary absolute top-1/2 left-0 flex -translate-y-1/2 flex-col items-center justify-center gap-5 rounded-4xl border-4 border-l-0 px-3 py-6 max-xl:px-2 max-xl:py-4 max-lg:hidden"
        >
          <motion.a
            href="https://github.com/Rammah-mohamed"
            target="_blank"
            whileHover={{
              scale: 1.2,
              rotate: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <IconBrandGithub
              className="h-9 w-9 max-xl:h-7 max-xl:w-7"
              stroke={2}
              color="#333"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rammah-mohamed"
            target="_blank"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <IconBrandLinkedin
              className="h-9 w-9 max-xl:h-7 max-xl:w-7"
              stroke={2}
              color="#0a66c2"
            />
          </motion.a>
        </motion.div>
        <motion.h1 className="text-primaryText flex space-x-1 text-5xl font-bold max-xl:text-4xl max-lg:text-3xl max-sm:text-xl">
          Hi, I'm
          {name.map((char, i) => (
            <motion.span
              key={i}
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{
                y: [0, -5, 0],
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="text-primary inline-block cursor-pointer"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="text-secondaryText mt-4 text-lg max-md:text-base max-sm:text-sm"
        >
          Frontend Developer | React | TypeScript
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-accent text-background hover:bg-primary mt-4 rounded-lg px-6 py-3 text-lg font-bold shadow-lg transition-all duration-100 max-lg:px-3 max-lg:py-1.5 max-lg:text-base max-sm:px-2 max-sm:py-1 max-sm:text-sm"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </section>
      <motion.img
        src={developer}
        alt="developer"
        className="w-64 flex-1 pr-10 max-lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Hero;
