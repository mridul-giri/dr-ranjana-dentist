"use client";
import Hero from "@/components/Hero";
import AllServices from "@/components/AllServices";
import Intro from "@/components/Intro";
import Reviews from "@/components/Reviews";
import Carousels from "@/components/Carousels";
import MapLink from "@/components/MapLink";
import { motion } from "motion/react";
import { fadeInUp } from "@/animations/motionVariants";

const cards = [
  {
    title: "We're here for you",
    content:
      "From the moment you step in, you're greeted with a warm smile and a relaxing, spa-like atmosphere. Every detail is designed to make you feel at ease because your smile deserves the best care.",
  },
  {
    title: "Your dental home",
    content:
      "As a locally-owned dental practice, we strive to create a welcoming, family-like environment for our patients. Your comfort is our priority as we guide you toward better oral health and a brighter, more confident smile.",
  },
  {
    title: "Exceeding expectations",
    content:
      "You and your oral health are at the heart of everything we do. With a sincere dedication to expertise, care, and modern dentistry, we aim to provide an exceptional experience beyond your wildest dental dreams.",
  },
  {
    title: "Our team's vision",
    content:
      "To be stewards of an experience that goes beyond imagination and is more than just dentistry.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-28 px-5 md:px-10 xl:px-32 ">
        <motion.h2
          className="secondary-color text-4xl md:text-6xl font-bold text-center"
          {...fadeInUp}
        >
          Visit our dental office
        </motion.h2>
        <div className="grid xl:grid-cols-3 gap-5 md:gap-10 secondary-bg text-white mt-10 p-5 md:p-10 items-center text-center rounded-tl-4xl  rounded-br-4xl">
          <div className="border-b xl:border-r xl:border-b-0 font-bold h-full p-5">
            <h3 className="text-2xl pb-2">Our Address:</h3>
            <h4 className="pb-2">
              Shop number 42, Pivotal Divaan, Sector 84, Gurgaon, Haryana,
              122004
            </h4>
            <MapLink />
          </div>
          <div className="border-b xl:border-r xl:border-b-0  font-bold h-full p-5">
            <h3 className="text-2xl pb-2">Phone:</h3>
            <h4 className="text-xl">(+91) 9599111643</h4>
          </div>
          <div className="font-bold h-full p-5">
            <h3 className="text-2xl pb-2">Hours:</h3>
            <h4 className="text-xl pb-1">(Monday - Sunday)</h4>
            <ul>
              <li>Morning: 10:00am - 1:00pm</li>
              <li>Evening: 4:00pm - 8:00pm</li>
            </ul>
          </div>
        </div>
      </section>
      <Intro />
      <Carousels
        heading="A trip to the dentist's office should a source of serenity, not
          anxiety"
        subHeading="Here's how Dr. Ranjana Sharma delivers a patient experience like no
          other"
        cards={cards}
      />
      <AllServices />
      <Reviews />
    </main>
  );
}
