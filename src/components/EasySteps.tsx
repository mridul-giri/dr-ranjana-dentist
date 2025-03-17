import { fadeInLeft, fadeInUp } from "@/animations/motionVariants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const cards = [
  { heading: "Contact Us", subHeading: "Start Your Journey Today." },
  { heading: "Consultation", subHeading: "Get advice from the best dentists." },
  {
    heading: "Treatment Plan",
    subHeading: "Receive a customized plan for a confident, radiant smile.",
  },
  {
    heading: "Smile Big",
    subHeading: "Maintain your bright smile for a lifetime of good health.",
  },
];
export default function EasySteps() {
  return (
    <section className="mt-32 px-5 md:px-10">
      <motion.h2
        className="text-3xl md:text-5xl text-center font-bold mb-10"
        {...fadeInUp}
      >
        4 Easy Steps to Get Your Dazzling Smile
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-5"
        {...fadeInLeft}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className="shadow-2xl bg-[#714c47] text-white xl:bg-white xl:text-[#714c47] hover:shadow-black hover:bg-[#714c47] hover:text-white border-none transition-all duration-300 ease-in-out "
          >
            <CardHeader>
              <CardTitle className="text-4xl">{card.heading}</CardTitle>
            </CardHeader>
            <CardContent className="">
              <span className="text-2xl">{card.subHeading}</span>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
