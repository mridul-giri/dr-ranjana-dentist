"use client";
import { heroFadeInLeft, heroFadeInUp } from "@/animations/motionVariants";
import Image from "next/image";
import { motion } from "motion/react";
import BookingBtn from "@/components/BookingBtn";

export default function Hero() {
  return (
    <section className="custom-bg">
      <div className="flex flex-col xl:flex-row gap-20 pt-32 xl:pt-40 px-5 md:px-10">
        <motion.div
          className="w-full xl:w-1/2 text-center xl:text-left"
          {...heroFadeInLeft}
        >
          <p className="text-2xl">Let us help you</p>
          <h1 className="text-4xl md:text-7xl font-bold">
            Reconnect with your smile
          </h1>
          <p className="my-10 text-xl md:text-2xl">
            Dr. Ranjana Sharma brings you a modern, calming experience that
            leaves your teeth healthy and your soul rejuvenated. <br />
            <br /> Come experience the modern, transformative way to receive
            dental care in <strong>Gurgaon</strong> and{" "}
            <strong>Delhi-NCR</strong>.
          </p>
          <BookingBtn />
        </motion.div>
        <motion.div className="w-full xl:w-1/2" {...heroFadeInUp}>
          <Image
            src="/images/woman-smiling.webp"
            width={600}
            height={600}
            alt="Woman smiling"
          />
        </motion.div>
      </div>
    </section>
  );
}
