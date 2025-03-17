"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Pain relief",
    content:
      "Root canal treatment removes infection and eliminates severe tooth pain.",
  },
  {
    title: "Natural appearance",
    content:
      "Your treated tooth is restored to look and function just like a natural tooth.",
  },
  {
    title: "Tooth preservation",
    content:
      "A root canal saves your natural tooth, preventing the need for extraction.",
  },
];

export default function Rct() {
  return (
    <main>
      <PageHeader
        service="Root Canal Treatment(RCT)"
        subHeading="Pain-free, natural tooth restoration with root canal treatment"
        src="/images/rct-tooth-pain-girl.jpg"
        alt="Young woman suffering from tooth pain"
      />
      <ServiceHero
        paragraph={[
          "Are you suffering from severe tooth pain or sensitivity and worried you might lose your tooth? Don't worry—our expert dentist, Dr. Ranjana, can save your natural tooth with a precise and painless root canal treatment. This procedure removes infection, relieves pain, and restores the tooth's strength.",
          "A root canal treatment preserves your natural smile, so you can continue eating comfortably and confidently.",
        ]}
      />
      <Carousels
        heading="Why choose root canal treatment?"
        subHeading="Discover the benefits of saving your natural tooth."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
