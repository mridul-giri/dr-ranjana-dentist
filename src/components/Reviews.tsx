"use client";
import { CardStack } from "@/components/ui/card-stack";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInLeft, fadeInUp } from "@/animations/motionVariants";

const reviews = [
  {
    id: 0,
    name: "Jinita Jangid",
    content: (
      <p>
        I had an amazing experience at Ranjana dental clinic! The staff was
        incredibly friendly, and the dentist took the time to explain everything
        in detail. The procedure was painless, and I felt very comfortable
        throughout. Highly recommend!🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Praneyta Shekhawat",
    content: (
      <p>
        I used to be afraid of going to the dentist, but Dr. Ranjana changed
        that completely. The clinic is clean, modern, and welcoming. They
        genuinely care about their patients and provide top-quality care. I’m so
        glad I found them!
      </p>
    ),
  },
  {
    id: 2,
    name: "Vandana Sharma",
    content: (
      <p>
        From the moment I walked in, I felt at ease. The staff is professional
        and courteous, and the dentist is incredibly gentle and skilled. My
        cleaning was thorough yet comfortable. I will definitely be coming back
        for my future dental needs!
      </p>
    ),
  },
  {
    id: 3,
    name: "Ritu Raghav",
    content: (
      <p>
        My entire family visits their, and we always have a great experience.
        They are great with kids and make them feel safe and comfortable. If
        you&apos;re looking for a trustworthy and skilled dentist, look no
        further!
      </p>
    ),
  },
];

export default function Reviews() {
  return (
    <section className="mt-32 px-5 md:px-10">
      <motion.h2
        className="text-center text-3xl md:text-6xl font-bold"
        {...fadeInUp}
      >
        Our patients love us!
      </motion.h2>
      <div className="flex justify-center gap-5">
        <motion.h3
          className="text-center text-xl md:text-2xl mt-2"
          {...fadeInLeft}
        >
          ...and their new smiles :)
        </motion.h3>
        <motion.div {...fadeInUp}>
          <Image
            src="/icons/curved-arrow-downward.png"
            width={100}
            height={100}
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col xl:flex-row items-center gap-32 xl:gap-36 w-full"
        {...fadeInUp}
      >
        <Image
          src="/images/teenagers-friends-having-fun-together.png"
          width={600}
          height={600}
          alt="Teenagers friends having fun together"
          className="rounded-tr-[50%] rounded-bl-3xl"
        />
        <CardStack items={reviews} />
      </motion.div>
    </section>
  );
}
