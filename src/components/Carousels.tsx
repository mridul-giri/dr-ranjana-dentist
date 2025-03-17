import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { fadeInUp } from "@/animations/motionVariants";

interface Card {
  title: string;
  content: string;
}

interface CarouselProps {
  heading: string;
  subHeading: string;
  cards: Card[];
}

export default function Carousels({
  heading,
  subHeading,
  cards,
}: CarouselProps) {
  return (
    <section className="mt-32">
      <div className="px-5 md:px-20">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center"
          {...fadeInUp}
        >
          {heading}
        </motion.h2>
        <motion.h3
          className="text-xl md:text-2xl text-center pt-5"
          {...fadeInUp}
        >
          {subHeading}
        </motion.h3>
      </div>

      <motion.div
        className="flex justify-center items-center px-14 md:px-20 pt-20"
        {...fadeInUp}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-4xl">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="">
                    <span className="text-xl">{card.content}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}
