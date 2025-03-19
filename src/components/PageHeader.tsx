"use client";
import { heroFadeInLeft, heroFadeInUp } from "@/animations/motionVariants";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import BookingBtn from "@/components/BookingBtn";

interface PageHeaderProps {
  service: string;
  subHeading: string;
  src: string | StaticImageData;
  alt: string;
}

export default function PageHeader({
  service,
  subHeading,
  src,
  alt,
}: PageHeaderProps) {
  return (
    <section className="custom-bg">
      <div className="flex flex-col xl:flex-row gap-20 pt-32 xl:pt-40 px-5 md:px-10 pb-10">
        <motion.div className="w-full xl:w-1/2" {...heroFadeInLeft}>
          <h1 className="text-3xl md:text-6xl font-bold primary-color">
            {service}
          </h1>
          <h2 className="my-10 text-4xl md:text-5xl font-bold secondary-color">
            {subHeading}
          </h2>
          <BookingBtn />
        </motion.div>
        <motion.div className="w-full xl:w-1/2 px-5 xl:px-0" {...heroFadeInUp}>
          <Image
            src={src}
            width={600}
            height={600}
            alt={alt}
            className="w-full rounded-tl-[30%] rounded custom-shadow"
          />
        </motion.div>
      </div>
    </section>
  );
}
