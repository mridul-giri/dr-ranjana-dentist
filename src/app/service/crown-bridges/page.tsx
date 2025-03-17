"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Natural appearance",
    content:
      "Custom-made to match the color, shape, and size of your natural teeth.",
  },
  {
    title: "Restored function",
    content: "Eat, speak, and smile confidently without discomfort or gaps.",
  },
  {
    title: "Durable & long-lasting",
    content:
      "Made from high-quality materials to ensure strength and longevity.",
  },
];

export default function CrownsBridges() {
  return (
    <main>
      <PageHeader
        service="Crowns & Bridges"
        subHeading="Strong, natural-looking solutions for damaged or missing teeth"
        src="/images/crowns-bridges-smiling-patient.jpg"
        alt="Confident patient after receiving dental crowns and bridges"
      />
      <ServiceHero
        paragraph={[
          "Do you have damaged or missing teeth affecting your smile and chewing ability? At Dr. Ranjana Dental Avenue, we offer high-quality dental crowns and bridges to restore your teeth’s strength, function, and appearance.",
          "Our expertly crafted restorations blend seamlessly with your natural teeth, ensuring a durable and aesthetically pleasing solution.",
        ]}
      />
      <Carousels
        heading="Why choose crowns & bridges?"
        subHeading="Discover the benefits of long-lasting dental restorations."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
