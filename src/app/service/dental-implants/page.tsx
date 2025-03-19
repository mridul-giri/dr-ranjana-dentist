"use client";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Natural-looking",
    content:
      "All of our dental implants are custom-made to match the patient's appearance.",
  },
  {
    title: "Durable",
    content:
      "They're made of durable material to last for many years and let you eat the foods you love.",
  },
  {
    title: "Permanently adhered",
    content: "Dental implants are a long-term solution to missing teeth.",
  },
];

export default function DenatlImplants() {
  return (
    <main>
      <PageHeader
        service="Dental Implants"
        subHeading="Natural-looking, natural-feeling tooth replacement with dental implants"
        src="/images/dental-implants-smiling-girl.jpg"
        alt="Young woman smiling confidently after dental implant treatment"
      />
      <ServiceHero
        paragraph={[
          "Are you missing a tooth or several and worry you'll never be the same again? Don't panic; our dentist Dr. Ranjana, can restore your teeth with expertly crafted dental implants fused to your jawbone. They're strong, durable, and act just like natural teeth.",
          "A dental implant is a permanent tooth replacement solution, so the best part is you can continue eating your favorite foods.",
        ]}
      />
      <Carousels
        heading="Why choose dental implants?"
        subHeading="Find out why patients appreciate their dental implants."
        cards={cards}
      />
      <Reviews />
    </main>
  );
}
