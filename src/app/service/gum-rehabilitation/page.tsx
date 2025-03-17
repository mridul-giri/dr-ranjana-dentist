"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Stronger gums",
    content: "Restore gum health to provide a solid foundation for your teeth.",
  },
  {
    title: "Prevents tooth loss",
    content:
      "Treating gum disease early helps keep your teeth strong and intact.",
  },
  {
    title: "Improved oral health",
    content:
      "Healthy gums reduce bad breath, inflammation, and infection risks.",
  },
];

export default function GumRehabilitation() {
  return (
    <main>
      <PageHeader
        service="Gum Rehabilitation"
        subHeading="Healthy gums for a strong foundation with expert gum rehabilitation"
        src="/images/gum-rehabilitation-smiling-patient.jpg"
        alt="Confident patient after successful gum rehabilitation treatment"
      />
      <ServiceHero
        paragraph={[
          "Are you experiencing swollen, receding, or bleeding gums? Healthy gums are the foundation of a beautiful smile, and our expert dentist, Dr. Ranjana, offers specialized gum rehabilitation treatments to restore and protect your oral health.",
          "With advanced periodontal care, we help prevent gum disease, strengthen your gums, and maintain a healthy, confident smile.",
        ]}
      />
      <Carousels
        heading="Why choose gum rehabilitation?"
        subHeading="Protect your teeth and smile with healthier gums."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
