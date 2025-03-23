"use client";
import { motion } from "motion/react";
import { fadeInLeft, fadeInUp } from "@/animations/motionVariants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const reviews = [
  {
    quote:
      "I had an amazing experience at Ranjana dental clinic! The staff was incredibly friendly, and the dentist took the time to explain everything in detail. The procedure was painless, and I felt very comfortable throughout. Highly recommend!🙏",
    name: "Jinita Jangid",
  },
  {
    quote:
      "I used to be afraid of going to the dentist, but Dr. Ranjana changed that completely. The clinic is clean, modern, and welcoming. They genuinely care about their patients and provide top-quality care. I’m so glad I found them!",
    name: "Praneyta Shekhawat",
  },
  {
    quote:
      "From the moment I walked in, I felt at ease. The staff is professional and courteous, and the dentist is incredibly gentle and skilled. My cleaning was thorough yet comfortable. I will definitely be coming back for my future dental needs!",
    name: "Vandana Sharma",
  },
  {
    quote:
      "My entire family visits their, and we always have a great experience. They are great with kids and make them feel safe and comfortable. If you're looking for a trustworthy and skilled dentist, look no further!",
    name: "Ritu Raghav",
  },
];

export default function Reviews() {
  return (
    <section className="mt-32 px-5 md:px-10">
      <motion.h2
        className="text-center text-3xl md:text-6xl font-bold secondary-color"
        {...fadeInUp}
      >
        Our patients love us!
      </motion.h2>
      <div className="flex justify-center gap-5">
        <motion.h3
          className="text-center text-xl md:text-2xl mt-2 primary-color"
          {...fadeInLeft}
        >
          ...and their new smiles :)
        </motion.h3>
      </div>

      <div className="flex justify-center items-center px-10 md:px-20 pt-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="secondary-bg text-white">
                  <CardContent>
                    <p className="md:text-lg">{review.quote}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="font-bold">{review.name}</span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
