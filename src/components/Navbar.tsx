import React, { useState } from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { IconMenu4 } from "@tabler/icons-react";
const navText = ["Hero", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className={`${show ? "text-background bg-accent" : "text-primary bg-background"} border-b-accent flex h-20 items-center justify-between border-b-2 px-10 py-6 transition-all duration-700 ease-in-out`}
    >
      <div className="flex items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-5xl max-lg:text-4xl max-md:text-3xl"
        >
          R
        </motion.h1>
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
            className="h-7 w-7 lg:hidden"
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
            className="h-7 w-7 lg:hidden"
            stroke={2}
            color="#0a66c2"
          />
        </motion.a>
      </div>

      <div
        className={`relative z-50 cursor-pointer ${show ? "text-background" : "text-primary"} transition-all duration-700 ease-in-out`}
      >
        <IconMenu4
          className={`relative z-10 h-10 w-10 max-md:h-7 max-md:w-7 ${show ? "rotate-90" : "rotate-0"} transition-transform duration-500 ease-in-out`}
          stroke={2}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setShow(!show);
          }}
        />
        <div
          className={`bg-accent text-background absolute -top-6 -right-10 flex h-screen ${show ? "translate-x-0" : "translate-x-full"} flex-col items-center justify-center gap-10 px-20 py-14 text-2xl font-bold transition-all duration-700 ease-in-out max-lg:gap-8 max-lg:px-16 max-lg:py-10 max-lg:text-xl max-md:gap-6 max-md:px-12 max-md:py-8 max-md:text-lg`}
        >
          {navText.map((t) => (
            <motion.a
              onClick={() => setShow(false)}
              whileHover={{ scale: 1.3 }}
              className="transition-transform duration-75 ease-out"
              href={`#${t.toLowerCase()}`}
            >
              {t}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
