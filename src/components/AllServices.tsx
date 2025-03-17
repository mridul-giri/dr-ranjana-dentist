import Image from "next/image";
import { fadeInUp } from "@/animations/motionVariants";
import { motion } from "motion/react";

const services = [
  {
    src: "/images/restorative-dentistry.jpg",
    title: "Restorative & Prosthetic Dentistry",
    info: "Replacing & Restoring Teeth",
  },
  {
    src: "/images/endodontics.jpeg",
    title: "Endodontics",
    info: "Root Canal Treatments & Tooth Preservation",
  },
  {
    src: "/images/orthodontics.jpg",
    title: "Orthodontics & Smile Aesthetics",
    info: "Alignment & Cosmetic Enhancement",
  },
  {
    src: "/images/pediatric-dentistry.jpg",
    title: "Pediatric Dentistry",
    info: "Specialized Care for Kids",
  },
  {
    src: "/images/oral-surgery.jpg",
    title: "Oral & Maxillofacial Surgery",
    info: "Advanced Surgical Procedures",
  },
  {
    src: "/images/emergency-dental-care.jpg",
    title: "Emergency & Urgent Dental Care",
    info: "Dental Trauma",
  },
];

export default function AllServices() {
  return (
    <section className="mt-32 p-5 md:p-10 secondary-bg text-white">
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
            className="p-5 rounded-4xl hover:shadow-2xl hover:rounded-2xl transition-all duration-300 ease-in-out border"
          >
            <Image
              src={service.src}
              width={500}
              height={500}
              alt=""
              className="w-full justify-self-center rounded-4xl"
            />
            <h3 className="text-2xl mt-5">{service.title}</h3>
            <h4 className="text-xl">{service.info}</h4>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
