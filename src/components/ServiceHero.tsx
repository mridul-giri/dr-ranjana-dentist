import Image from "next/image";
import { motion } from "motion/react";
import { fadeInLeft, fadeInUp } from "@/animations/motionVariants";
import BookingBtn from "@/components/BookingBtn";

interface ServiceHeroProps {
  paragraph: string[];
}

export default function ServiceHero({ paragraph }: ServiceHeroProps) {
  return (
    <section className="mt-32 px-10 md:px-20 flex flex-col justify-center items-center">
      <motion.div {...fadeInUp}>
        <Image
          src="/icons/curved-arrow-downward.png"
          width={150}
          height={150}
          alt=""
        />
      </motion.div>

      <motion.div className="text-xl font-semibold text-center my-5 secondary-color" {...fadeInLeft}>
        <p>
          {paragraph.map((line, index) => (
            <span key={index}>
              <i>{line}</i>
              <br />
              <br />
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div {...fadeInUp}>
        <BookingBtn />
      </motion.div>
    </section>
  );
}
