import Image from "next/image";
import { fadeInUp } from "@/animations/motionVariants";
import { motion } from "motion/react";

const services = [
  {
    src: "/icons/restorative-dentistry.png",
    title: "Restorative & Prosthetic Dentistry",
    info: "Replacing & Restoring Teeth",
  },
  {
    src: "/icons/endodontics.png",
    title: "Endodontics",
    info: "Root Canal Treatments & Tooth Preservation",
  },
  {
    src: "/icons/orthodontics.png",
    title: "Orthodontics & Smile Aesthetics",
    info: "Alignment & Cosmetic Enhancement",
  },
  {
    src: "/icons/pediatric-dentistry.png",
    title: "Pediatric Dentistry",
    info: "Specialized Care for Kids",
  },
  {
    src: "/icons/oral-surgery.png",
    title: "Oral & Maxillofacial Surgery",
    info: "Advanced Surgical Procedures",
  },
  {
    src: "/icons/emergency-dental-care.png",
    title: "Emergency & Urgent Dental Care",
    info: "Dental Trauma",
  },
];

export default function AllServices() {
  return (
    <section className="mt-32 p-5 md:p-10 bg-[#714c47] text-white">
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-center"
        {...fadeInUp}
      >
        Achieve your perfect smile with confidence—our expert dental services
        make it effortless.
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 text-center pt-20"
        {...fadeInUp}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 rounded-xl hover:shadow-2xl hover:rounded-md transition-all duration-300 ease-in-out border"
          >
            <Image
              src={service.src}
              width={100}
              height={100}
              alt=""
              className="justify-self-center"
            />
            <h3 className="text-2xl mt-5">{service.title}</h3>
            <h4 className="text-xl">{service.info}</h4>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
