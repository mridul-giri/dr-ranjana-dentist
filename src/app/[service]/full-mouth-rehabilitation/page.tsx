"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Restored function",
    content:
      "Eat, speak, and smile comfortably with strong, well-aligned teeth.",
  },
  {
    title: "Aesthetic improvement",
    content:
      "Enhance your smile’s appearance with a combination of restorative and cosmetic treatments.",
  },
  {
    title: "Long-term oral health",
    content:
      "Address underlying dental issues to maintain a healthier smile for years to come.",
  },
];

export default function FullMouthRehabilitation() {
  return (
    <main>
      <PageHeader
        service="Full Mouth Rehabilitation"
        subHeading="Comprehensive smile restoration with full mouth rehabilitation"
        src="/images/full-mouth-rehabilitation-patient.jpg"
        alt="Confident patient after a successful full mouth rehabilitation"
      />
      <ServiceHero
        paragraph={[
          "Struggling with multiple dental issues affecting your smile and oral health? Our expert dentist, Dr. Ranjana, offers full mouth rehabilitation to restore the function, strength, and beauty of your teeth.",
          "This treatment combines advanced restorative and cosmetic procedures to give you a fully functional and aesthetically pleasing smile.",
        ]}
      />
      <Carousels
        heading="Why choose full mouth rehabilitation?"
        subHeading="Discover the life-changing benefits of a complete smile transformation."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
