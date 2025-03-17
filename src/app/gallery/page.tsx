"use client";
import { motion } from "motion/react";
import Image from "next/image";

const images = [
  "/images/clinic-reception-area.jpg",
  "/images/dentist-checkup-patient_1.jpg",
  "/images/dentist-checkup-patient_2.jpg",
  "/images/dental-clinic.jpg",
];

export default function Gallery() {
  return (
    <main className="mt-32 mx-5 lg:m-48">
      <motion.section
        className="columns columns-2 md:columns-3 gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            height={500}
            width={500}
            alt={`Dental Clinic Image ${index + 1}`}
            className="mb-5 w-full h-auto object-cover rounded-lg "
          />
        ))}
      </motion.section>
    </main>
  );
}
