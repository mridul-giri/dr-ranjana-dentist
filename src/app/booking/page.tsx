"use client";
import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { heroFadeInUp, fadeInUp } from "@/animations/motionVariants";
import MapLink from "@/components/MapLink";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    message: "",
    time: "",
  });

  const handleCall = () => {
    window.location.href = "tel:+919599111643";
  };

  const dentistPhoneNo = "+919599111643";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = `Hey Ranjana, I would like to book an appointment:
    - Name: ${formData.name}
    - Phone: ${formData.phone}
    - Day: ${formData.day}
    - Time: ${formData.time}
    - Message: ${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    try {
      // Redirect to WhatsApp
      window.open(
        `https://wa.me/${dentistPhoneNo}?text=${encodedMessage}`,
        "_blank"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <motion.section
        className="mt-40 text-center p-5 md:p-0"
        {...heroFadeInUp}
      >
        <h1 className="text-5xl md:text-7xl font-bold secondary-color">
          Book an Appointment
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">
          When you are in need, our compassionate team is here to help
        </h2>
        <div className="mt-10">
          <span
            onClick={handleCall}
            className="py-4 px-5 rounded-full button-color cursor-pointer font-bold transition-all duration-200 ease-in-out"
          >
            Call Now: (+91) 9599111643
          </span>
        </div>
      </motion.section>

      <div className="flex flex-col-reverse xl:flex-row px-5 md:px-10 gap-20 mt-28 secondary-color">
        <section className="flex flex-col gap-10 xl:w-1/2">
          <motion.div {...fadeInUp}>
            <p className="font-bold text-4xl mb-3 primary-color">
              Our official hours are:
            </p>
            <ul className="flex flex-col gap-1 font-medium text-xl">
              <li className="text-2xl font-semibold">(Monday to Sunday)</li>
              <li>- Morning: 10:00am - 1:00pm</li>
              <li>- Evening: 4:00am - 8:00pm</li>
              <li className="text-lg md:text-xl font-bold pt-5">
                <span className="primary-color">Email id:- </span>{" "}
                drranjanadentalavenue@gmail.com
              </li>
            </ul>
          </motion.div>
          <motion.div {...fadeInUp}>
            <h3 className="text-4xl font-bold mb-3 primary-color">
              Our address:
            </h3>
            <p>
              <span className="mb-3 text-xl font-bold">
                Shop number 42, Pivotal Divaan, Sector 84, Gurgaon, Haryana,
                122004
              </span>
              <br />
              <MapLink />
            </p>
          </motion.div>
        </section>

        <motion.section
          className="border xl:w-1/2 p-5 md:p-10 rounded-2xl secondary-color "
          {...heroFadeInUp}
        >
          <h4 className="text-3xl text-center font-bold mb-10">
            Appointment Form
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 font-semibold"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border py-3 px-3 rounded-lg outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="border py-3 px-3 rounded-lg outline-none"
            />
            <select
              name="day"
              className="border py-3 px-3 rounded-lg outline-none"
              required
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormData((prev) => ({ ...prev, day: e.target.value }))
              }
            >
              <option value="" disabled>
                Preferred day of the week
              </option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <input
              type="time"
              name="time"
              defaultValue="10:00"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, time: e.target.value }))
              }
              className="border py-3 px-3 rounded-lg outline-none w-full"
            />
            <textarea
              name="message"
              placeholder="Additional Message"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="border py-3 px-3 rounded-lg outline-none"
            />
            <button
              type="submit"
              className="border py-4 px-5 rounded-lg bg-green-700 cursor-pointer
              text-white hover:opacity-80 transition-all duration-100"
            >
              Book via WhatsApp
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
}
