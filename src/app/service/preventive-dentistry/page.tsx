"use client";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Early problem detection",
    content:
      "Regular exams help catch cavities, gum disease, and other issues before they worsen.",
  },
  {
    title: "Saves time & money",
    content:
      "Preventive care reduces the need for costly and extensive treatments in the future.",
  },
  {
    title: "Stronger, healthier smile",
    content:
      "Maintain optimal oral health with professional cleanings and protective treatments.",
  },
];

export default function PreventiveDentistry() {
  return (
    <main>
      <PageHeader
        service="Preventive Dentistry"
        subHeading="Healthy teeth for life with expert preventive care"
        src="/images/preventive-dentistry-checkup.jpg"
        alt="Patient receiving a routine dental checkup for preventive care"
      />
      <ServiceHero
        paragraph={[
          "A healthy smile starts with prevention! At Dr. Ranjana Dental Avenue, we offer comprehensive preventive dentistry services to keep your teeth and gums in top condition.",
          "Regular checkups, cleanings, and preventive treatments help detect issues early, saving you from costly and painful dental problems.",
        ]}
      />
      <Carousels
        heading="Why choose preventive dentistry?"
        subHeading="Stay ahead of dental problems with proactive care."
        cards={cards}
      />
      <Reviews />
    </main>
  );
}
