"use client";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  heroFadeInLeft,
} from "@/animations/motionVariants";
import Image from "next/image";
import { motion } from "motion/react";
import BookingBtn from "@/components/BookingBtn";
import Reviews from "@/components/Reviews";
import AllServices from "@/components/AllServices";

const cards = [
  {
    title: "Transparency",
    paragraphOne:
      "The best patient is an educated patient. We'll make sure you know why you are being prescribed a treatment and the precise cost of every procedure before it begins. And your treatment doesn't end until you are fully satisfied with the care you've received and  given us the thumbs up.",
    paragraphTwo:
      "We'll make sure you know why you are being prescribed a treatment and the precise cost of every procedure before it begins. And your treatment doesn't end until you are fully satisfied with the care you've received and  given us the thumbs up.",
    src: "/icons/search-icon.png",
  },
  {
    title: "Seamless Service",
    paragraphOne:
      "A trip to the dentist’s office should be a source of serenity, not anxiety.",
    paragraphTwo:
      "We’ve cut out the paperwork and streamlined the entire dentist experience. Book your appointments and complete your forms online.",
    src: "/icons/check-icon.png",
  },
  {
    title: "Excellence",
    paragraphOne:
      "You deserve exceptional dental care, so we tackle every treatment with our full attention and expertise. Our state-of-the-art dental equipment allows us to better diagnose your specific needs, and treat them quickly and painlessly.",
    paragraphTwo:
      "And you'll be in good hands. Our doctors complete hundreds of hours of additional training each year, perfecting their skills and incorporating the latest developments in dental medicine.",
    src: "/icons/badge-icon.png",
  },
  {
    title: "Mindfulness",
    paragraphOne:
      "Beautiful smiles begin on the inside, which is why our commitment to exceptional dentistry demands we honor your soul as well.",
    paragraphTwo:
      "Our spaces are designed to be calm and relaxing, with modern style and quiet areas to help you feel peaceful and mindful.",
    src: "/icons/mindfulness-icon.png",
  },
];

export default function About() {
  return (
    <main>
      <section className="custom-bg pt-32 xl:pt-40 px-5 md:px-10 pb-10 h-max">
        <motion.div className="text-center" {...heroFadeInLeft}>
          <p className="text-3xl md:text-5xl font-bold secondary-color">
            An oasis of calm, compassion and tranquility
          </p>
          <p className="my-10 text-xl md:text-2xl">
            Every member of our team is focused on ensuring you receive clear,
            compassionate, and delightful treatments - and on making sure you
            feel at home. <br /> <br /> Receive dental care in our
            state-of-the-art offices designed by experts to serve as places of
            comfort and relaxation.
          </p>
          <BookingBtn />
        </motion.div>
      </section>

      <section className="mt-32 px-5 md:px-32 pb-20">
        <div className="flex flex-col xl:flex-col justify-center items-center">
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-center secondary-color"
            {...fadeInLeft}
          >
            Hi! I am Dr. Ranjana Sharma
          </motion.h1>
        </div>

        <div className="flex flex-col xl:flex-row gap-20 mt-10 md:mt-20">
          <motion.div className="w-full xl:w-1/2" {...fadeInLeft}>
            <h2 className="text-2xl md:text-3xl font-bold py-5">BDS & Implantologist</h2>
            <p>
              I am a highly skilled dental professional with 12 years of
              clinical experience. I completed my BDS from IDST College, Meerut,
              in 2011 and I have been dedicated to providing exceptional dental
              care ever since.
              <br />
              <br /> I am Specializing in a wide range of treatments, Such as
              root canal treatments (RCTs), crowns and bridges, extractions,
              esthetic fillings, tooth whitening, kids’ dental treatments,
              dental implants, and full-mouth rehabilitation. My expertise in
              these areas has helped countless patients achieve healthy and
              confident smiles.
              <br />
              <br /> As a dedicated practitioner, I am committed to offering
              personalized, high-quality dental care in a patient-friendly
              environment, ensuring comfort and precision in every treatment.
            </p>
          </motion.div>
          <motion.div className="w-full xl:w-1/2 px-5 xl:px-0" {...fadeInRight}>
            <Image
              src="/images/dr-ranjana-sharma.jpg"
              width={400}
              height={400}
              alt="Dr Ranjana Sharma"
              className="custom-shadow"
            />
          </motion.div>
        </div>
      </section>

      <section className="m-5 xl:m-10 p-5 xl:p-10 primary-bg rounded-xl shadow shadow-black hover:shadow hover:shadow-[#c1713b] transition-all duration-100 ease-in-out border-t border-gray-500">
        <motion.h3
          className="text-center text-4xl md:text-6xl font-bold mb-20 secondary-color"
          {...fadeInUp}
        >
          What we’re striving for
        </motion.h3>
        <div className="grid xl:grid-cols-2 gap-16">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <motion.div className="w-full md:w-[30%] " {...fadeInLeft}>
                <Image
                  src={card.src}
                  width={100}
                  height={100}
                  alt={card.title}
                />
              </motion.div>
              <div className="w-full">
                <h4 className="text-2xl font-extrabold mb-2 primary-color">
                  {card.title}
                </h4>
                <p>{card.paragraphOne}</p>
                <br />
                <p>{card.paragraphTwo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AllServices />
      <Reviews />
    </main>
  );
}
