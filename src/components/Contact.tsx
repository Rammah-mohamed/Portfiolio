import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import pic from "../assets/undraw_visionary-technology_6ouq.svg";

type Form = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

type Field = "name" | "subject" | "email";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const inputVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send the message. Error: " + error.text);
        },
      );
  };
  return (
    <section id="contact" className="bg-background min-h-screen p-10">
      <motion.h2
        className="text-primary mb-8 text-center text-3xl font-bold max-md:text-xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-secondaryText mx-auto mb-6 max-w-4xl text-center leading-6 tracking-wider max-md:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        I'm always open to new opportunities, freelance work, or just connecting
        with like-minded developers. Whether you have a project in mind, want to
        collaborate, or simply want to say hello — I’d love to hear from you!
        Drop me a message using the form below, or reach out directly via email
        or LinkedIn.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-8 lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="flex-1 max-lg:hidden" variants={imageVariant}>
          <img src={pic} alt="contact" className="w-full object-cover" />
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex h-full w-full flex-1 flex-col items-center justify-center gap-6"
          variants={containerVariants}
        >
          {(["name", "subject", "email"] as Field[]).map((field) => (
            <motion.input
              key={field}
              name={field}
              value={formData[field]} // no more error!
              onChange={handleChange}
              type={field === "email" ? "email" : "text"}
              placeholder={`Enter Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="text-primaryText border-border focus:border-accent hover:border-accent w-3/4 cursor-pointer rounded-xl border-2 px-4 py-2 text-lg font-bold transition-colors duration-200 outline-none max-md:w-full"
              required
              variants={inputVariant}
            />
          ))}

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            className="scrollbar-hide text-primaryText border-border focus:border-accent hover:border-accent h-64 w-3/4 cursor-pointer resize-none overflow-y-scroll rounded-xl border-2 px-4 py-2 text-lg font-bold transition-colors duration-200 outline-none max-md:w-full"
            required
            variants={inputVariant}
          />

          <motion.button
            type="submit"
            className="text-primary border-border hover:text-primaryText hover:bg-primary cursor-pointer rounded-md border-2 px-4 py-2 text-lg font-bold transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={inputVariant}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
