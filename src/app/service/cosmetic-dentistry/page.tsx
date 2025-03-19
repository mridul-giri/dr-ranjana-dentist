"use client";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Brighter, whiter teeth",
    content:
      "Professional teeth whitening removes stains and discoloration for a dazzling smile.",
  },
  {
    title: "Perfectly shaped teeth",
    content:
      "Veneers and reshaping treatments enhance the symmetry and look of your teeth.",
  },
  {
    title: "Boosted confidence",
    content:
      "A beautiful smile can improve self-esteem and make a lasting impression.",
  },
];

export default function CosmeticDentistry() {
  return (
    <main>
      <PageHeader
        service="Cosmetic Dentistry"
        subHeading="Transform your smile with personalized cosmetic dentistry"
        src="/images/cosmetic-dentistry-happy-patient.jpg"
        alt="Confident patient with a bright, beautiful smile after cosmetic dental treatment"
      />
      <ServiceHero
        paragraph={[
          "Do you wish for a brighter, more confident smile? At Dr. Ranjana Dental Avenue, we offer a range of cosmetic dentistry treatments designed to enhance the appearance of your teeth and boost your self-confidence.",
          "From teeth whitening to smile makeovers, our expert care ensures you achieve the perfect smile you’ve always wanted.",
        ]}
      />
      <Carousels
        heading="Why choose cosmetic dentistry?"
        subHeading="Discover the benefits of a radiant and confident smile."
        cards={cards}
      />
      <Reviews />
    </main>
  );
}
