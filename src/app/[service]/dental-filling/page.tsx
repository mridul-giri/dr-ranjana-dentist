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
      "Our tooth-colored fillings blend seamlessly with your natural teeth.",
  },
  {
    title: "Prevents further decay",
    content:
      "Fillings seal cavities, stopping bacteria from causing more damage.",
  },
  {
    title: "Durable and long-lasting",
    content:
      "Made from high-quality materials, our fillings provide lasting protection.",
  },
];

export default function DentalFillings() {
  return (
    <main>
      <PageHeader
        service="Dental Fillings"
        subHeading="Seamless, long-lasting cavity repair with dental fillings"
        src="/images/dental-fillings.jpg"
        alt="Happy patient after receiving a dental filling"
      />
      <ServiceHero
        paragraph={[
          "Do you have cavities or minor tooth damage? Don't worry—our expert dentist, Dr. Ranjana, can restore your tooth's strength and function with high-quality dental fillings.",
          "Dental fillings seal and protect your tooth, preventing further decay while maintaining a natural look.",
        ]}
      />
      <Carousels
        heading="Why choose dental fillings?"
        subHeading="Discover the benefits of restoring your tooth with a filling."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
