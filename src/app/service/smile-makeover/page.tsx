"use client";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Customized treatment",
    content:
      "Every smile makeover is uniquely tailored to your needs and goals.",
  },
  {
    title: "Enhanced confidence",
    content:
      "A beautiful, balanced smile can improve self-esteem and make a lasting impression.",
  },
  {
    title: "Long-lasting results",
    content:
      "Our high-quality cosmetic and restorative treatments provide a stunning, durable smile",
  },
];

export default function SmileMakeover() {
  return (
    <main>
      <PageHeader
        service="Smile Makeover"
        subHeading="Transform your smile with a customized smile makeover"
        src="/images/smile-makeover-happy-patient.jpg"
        alt="Confident patient with a radiant smile after a smile makeover"
      />
      <ServiceHero
        paragraph={[
          "Unhappy with your smile? A smile makeover at Dr. Ranjana Dental Avenue is a personalized treatment plan designed to enhance the beauty of your teeth and boost your confidence.",
          "Using advanced cosmetic and restorative techniques, we create a natural, flawless smile tailored just for you.",
        ]}
      />
      <Carousels
        heading="Why choose a smile makeover?"
        subHeading="Experience the life-changing benefits of a perfect smile."
        cards={cards}
      />
      <Reviews />
    </main>
  );
}
