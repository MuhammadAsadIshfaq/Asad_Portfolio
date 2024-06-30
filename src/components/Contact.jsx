import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import LinearGradient from "./LinearGradient";
import contactImage from "../assets/contact-image.jpeg";

const Contact = ({ setSelectedPage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("contact");
  }, [isInView]);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();

    !isValid && e.preventDefault();
  };

  return (
    <section id="contact" className=" py-48">
      {/* headings */}
      <motion.div
        className="flex justify-center text-center  md:justify-end md:text-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div ref={ref} className=" w-[70%] md:w-1/2 ">
          <p className=" font-playfair font-semibold  text-3xl sm:text-4xl ">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end justify-center my-5">
            <LinearGradient width={"w-2/3"} />
          </div>
        </div>
      </motion.div>
      {/* FORM  AND IMAGE */}
      <div className="  flex flex-col md:flex-row  md:justify-between gap-16 mt-5  w-full items-center md:items-start">
        <motion.div
          className=" w-[80%] md:w-1/2   flex justify-center h-max"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={contactImage} alt="contact-image" />
        </motion.div>

        <motion.div
          className=" w-[90%]   md:w-1/2 mt-10 md:mt-0  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            className=" flex flex-col gap-4 "
            target="_blank"
            onSubmit={onSubmit}
            action=" https://formsubmit.co/ranaasad36793@gmail.com "
            method="POST"
          >
            <input
              className="w-full border border-zinc-700  bg-transparent placeholder-[#fefae0] font-semibold p-3 text-white rounded-md "
              placeholder="NAME"
              type="text"
              {...register("name", { required: true, maxLength: 100 })}
              autoComplete="off"
            />

            {errors.name && (
              <p className=" text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}
            <input
              className="w-full border border-zinc-700 bg-transparent placeholder-[#fefae0] font-semibold p-3 text-white rounded-md "
              placeholder="EMAIL"
              type="email"
              {...register("email", {
                required: true,
              })}
              autoComplete="off"
            />
            {errors.email && (
              <p className=" text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full    border border-zinc-700 bg-transparent placeholder-[#fefae0] font-semibold p-3 text-white rounded-md "
              placeholder="MESSAGE"
              type="text"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className=" text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Maximum length exceeded."}
              </p>
            )}
            <button
              type="submit
            "
              className=" p-5 bg-yellow font-semibold mt-5 text-deep-blue rounded-md  transition duration-500 "
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
