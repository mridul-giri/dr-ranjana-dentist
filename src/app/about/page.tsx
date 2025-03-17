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
import EasySteps from "@/components/EasySteps";
import Reviews from "@/components/Reviews";

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
          <p className="text-3xl md:text-5xl font-bold">
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
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-center"
            {...fadeInLeft}
          >
            Our Providers
          </motion.h1>
          <motion.div {...fadeInUp}>
            <Image
              src="/icons/curved-arrow-downward.png"
              width={100}
              height={100}
              alt=""
            />
          </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row gap-20">
          <motion.div className="w-full xl:w-1/2" {...fadeInLeft}>
            <h2 className="text-3xl font-bold py-5">BDS & Implantologist</h2>
            <p>
              Dr. Ranjana Sharma is a highly skilled dental professional with 12
              years of clinical experience. She completed her BDS from IDST
              College, Meerut, in 2011 and has been dedicated to providing
              exceptional dental care ever since.
              <br />
              <br /> Specializing in a wide range of treatments, Dr. Ranjana
              Sharma excels in root canal treatments (RCTs), crowns and bridges,
              extractions, esthetic fillings, tooth whitening, kids’ dental
              treatments, dental implants, and full-mouth rehabilitation. Her
              expertise in these areas has helped countless patients achieve
              healthy and confident smiles.
              <br />
              <br /> As a dedicated practitioner, Dr. Ranjana Sharma is
              committed to offering personalized, high-quality dental care in a
              patient-friendly environment, ensuring comfort and precision in
              every treatment.
            </p>
          </motion.div>
          <motion.div className="w-full xl:w-1/2" {...fadeInRight}>
            <Image
              src="/images/dr-ranjana-sharma.jpg"
              width={400}
              height={400}
              alt="Dr Ranjana Sharma"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        className="secondary-bg text-white m-5 xl:m-10 p-5 xl:p-10 rounded-4xl border border-color"
        {...fadeInUp}
      >
        <h3 className="text-center text-4xl md:text-6xl font-bold mb-20">
          What we’re striving for
        </h3>
        <div className="grid xl:grid-cols-2 gap-16">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[30%]">
                <Image
                  src={card.src}
                  width={100}
                  height={100}
                  alt={card.title}
                />
              </div>
              <div className="w-full">
                <h4 className="text-2xl font-bold mb-2">{card.title}</h4>
                <p>{card.paragraphOne}</p>
                <br />
                <p>{card.paragraphTwo}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <EasySteps />
      <Reviews />
    </main>
  );
}
