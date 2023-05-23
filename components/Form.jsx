"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";


const Contact = () => {
  const [Loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    getValues,
    trigger,
    reset,
    formState: { errors,isValid },
  } = useForm({ mode: "all" });



  const onSubmit = async (e) => {
    setLoading(true);
    const isValid = await trigger();
    if (isValid) {
      setSubmitted(true);
      setTimeout(() => {
        reset({
          name: "",
          number: "",
          email: "",
          project: "",
        });
        setSubmitted(false);
        setLoading(false);
      }, 2000);
    } else {
      e.preventDefault();
    }
  };

  console.log("submitted", submitted);

  return (
    <section id="contact" className="mt-10 mb-20">
      {/* FORM  */}
      <div className="flex justify-center ">
        <Heading our="GET" afterOurText="IN TOUCH" mb="mb-5" />
      </div>
      <div className="flex justify-center gap-10 ">
        <div className="mt-0 md:mt-0 ">
          <p className="text-[#73D043] font-semibold text-center font-outfit">
            {submitted && "Successfully Submitted"}
          </p>
          <form
            method="POST"
            action="https://formsubmit.co/bsiddiqui@students.uit.edu"
            target="_blank"
            onSubmit={onSubmit}
            className="font-outfit p-1.5 max-w-[500px]"
          >
            <div>
              <label htmlFor="name" className="mb-2 font-semibold">
                Name
              </label>
              <input
                className=" rounded-lg w-full text-black  outline-0 border-2 font-semibold placeholder-opaque-black p-3 mt-2"
                type="text"
                id="name"
                placeholder="Enter Your name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <div className="mt-5">
              <label className="font-semibold" htmlFor="number">
                Number
              </label>
              <input
                className="text-black  rounded-lg w-full outline-0 border-2  bg-white font-semibold placeholder-opaque-black p-3 mt-2"
                type="number"
                id="number"
                placeholder="Enter Your phone number"
                {...register("number", {
                  required: true,
                  pattern:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                })}
              />
            </div>
            {errors.number && (
              <p className="text-red-500 mt-1 ">
                {errors.number.type === "required" && "This field is required."}
                {errors.number.type === "pattern" && "Invalid phone."}
              </p>
            )}
            <div className="mt-5">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>

              <input
                className="text-black border-2 rounded-lg w-full outline-0  bg-white font-semibold placeholder-opaque-black p-3 mt-2"
                type="text"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 ">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="project" className="font-semibold">
                Message
              </label>

              <textarea
                className="text-black rounded-lg w-full border-2 outline-0 bg-white font-semibold placeholder-opaque-black p-3 mt-2"
                placeholder="Tell us a little about your project"
                id="project"
                rows={4}
                cols={50}
                {...register("project", {
                  required: true,
                  maxLength: 2000,
                })}
              />
            </div>
            {errors.project && (
              <p className="text-red-500 mt-1 font-outfit">
                {errors.project.type === "required" &&
                  "This field is required."}
                {errors.project.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              disabled={!isValid}
              className="disabled:bg-[#cccccc] disabled:border-[#999999] disabled:text-[#666666] disabled:border-solid font-outfit font-bold mt-5 w-full text-sm xs:text-lg bg-[#73D043] text-white rounded-lg  py-3 px-5 
              hover:bg-blue  hover:bg-[#1B4845] transition duration-500"
            >
              {Loading ? "Loading..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
