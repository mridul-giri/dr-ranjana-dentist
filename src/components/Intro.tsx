import Image from "next/image";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/animations/motionVariants";
import BookingBtn from "./BookingBtn";

export default function Intro() {
  return (
    <section className="pt-20 p-5 md:p-10 custom-bg">
      <motion.h2
        className="text-center text-2xl md:text-5xl font-bold"
        {...fadeInUp}
      >
        Dental Clinic in Gurgaon
      </motion.h2>
      <div className="flex flex-col xl:flex-row gap-10 mt-10">
        <div className="w-full xl:w-1/2 flex flex-col-reverse xl:flex-col gap-5 items-center xl:items-end">
          <motion.div {...fadeInUp}>
            <Image
              src="/icons/forward-arrow.png"
              width={100}
              height={100}
              alt=""
              className="hidden xl:block"
            />
            <Image
              src="/icons/curved-arrow-downward.png"
              width={100}
              height={100}
              alt=""
              className="xl:hidden"
            />
          </motion.div>

          <motion.h3 className="text-xl md:text-4xl font-bold text-color2" {...fadeInLeft}>
            If you&apos;re searching for the{" "}
            <strong>best dentist near me, the best dentist in Gurgaon,</strong>{" "}
            or a{" "}
            <strong>trusted family dentist in Gurgaon and Delhi NCR,</strong>{" "}
            you&apos;ve come to the right place.
          </motion.h3>
        </div>
        <motion.div className="w-full xl:w-1/2" {...fadeInRight}>
          <p className="text-lg mb-10">
            Dr. Ranjana’s state-of-the-art{" "}
            <strong>Dental Clinic in Gurgaon</strong> is dedicated to providing{" "}
            <strong>high-quality dental treatments</strong> in a comfortable and
            welcoming environment. If you’re searching for the{" "}
            <strong>best dental clinic near me,</strong> we offer expert care
            tailored to your needs. As a{" "}
            <strong>trusted family dentist,</strong> we prioritize your oral
            health with <strong>personalized treatments</strong> for patients of
            all ages.
            <br />
            <br />
            Since 2012, Dr. Ranjana and her skilled team have successfully
            treated over 5,000 patients, delivering premium dental care with a
            focus on excellence.
            <br />
            <br /> We specialize in{" "}
            <strong>
              painless root canals, cosmetic dentistry, pediatric dentistry,
              veneers, orthodontics, and dental implants
            </strong>{" "}
            — ensuring that every procedure is as comfortable as possible.
            <br />
            <br /> Our commitment is to provide the{" "}
            <strong>best possible treatment in Gurgaon</strong> with expertise,
            compassion, and advanced technology, making your dental experience
            stress-free and rewarding.
          </p>
          <BookingBtn />
        </motion.div>
      </div>
    </section>
  );
}
