"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp } from "@/animations/motionVariants";

const content = [
  {
    title: "Restorative & Prosthetic Dentistry",
    description:
      "This focuses on repairing or replacing damaged or missing teeth. Treatments include dental fillings, crowns, bridges, dentures, and dental implants to restore function and aesthetics.",
    content: (
      <div>
        <Image
          src="/images/restorative-dentistry.jpg"
          width={500}
          height={500}
          className=""
          alt="Restorative & Prosthetic Dentistry"
        />
      </div>
    ),
  },
  {
    title: "Endodontics",
    description:
      "Endodontics deals with the inside of the tooth, primarily focusing on root canal treatments. It helps save teeth affected by deep decay, infection, or trauma by treating the pulp (nerve) and sealing the tooth to prevent further issues.",
    content: (
      <div>
        <Image
          src="/images/endodontics.jpeg"
          width={500}
          height={500}
          className=""
          alt="Endodontics"
        />
      </div>
    ),
  },
  {
    title: "Orthodontics & Smile Aesthetics",
    description:
      "This specialty corrects misaligned teeth and jaw issues using braces, clear aligners (like Invisalign), and retainers. It enhances both the appearance and function of the teeth, improving overall oral health and confidence.",
    content: (
      <div>
        <Image
          src="/images/orthodontics.jpg"
          width={500}
          height={500}
          className=""
          alt="Orthodontics & Smile Aesthetics"
        />
      </div>
    ),
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Dental care specifically for children, focusing on preventive treatments, cavity protection, and early orthodontic assessments. Pediatric dentists ensure a comfortable and positive experience for kids to establish lifelong oral hygiene habits.",
    content: (
      <div>
        <Image
          src="/images/pediatric-dentistry.jpg"
          width={500}
          height={500}
          className=""
          alt="Pediatric Dentistry"
        />
      </div>
    ),
  },
];
export default function AllServices() {
  return (
    <section className="mt-32 p-5 md:p-10">
      <motion.h3
        className="text-center text-2xl md:ext-4xl secondary-color font-bold mb-10"
        {...fadeInUp}
      >
        Your Perfect Smile Starts Here—Advanced & Gentle Dentistry.
      </motion.h3>
      <StickyScroll content={content} />
    </section>
  );
}
