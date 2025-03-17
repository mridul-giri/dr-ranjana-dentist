"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Kid-friendly approach",
    content:
      "We create a fun and comforting environment to ease dental anxiety.",
  },
  {
    title: "Early cavity prevention",
    content:
      "Regular checkups and preventive care help protect your child's teeth from decay.",
  },
  {
    title: "Lifelong healthy habits",
    content:
      "We educate kids on proper brushing, flossing, and oral hygiene from an early age.",
  },
];

export default function PediatricDentistry() {
  return (
    <main>
      <PageHeader
        service="Pediatric Dentistry"
        subHeading="Healthy smiles start early with expert pediatric dental care"
        src="/images/pediatric-dentistry-happy-kid.jpg"
        alt="Happy child with a bright smile after a pediatric dental checkup"
      />
      <ServiceHero
        paragraph={[
          "Looking for a gentle and friendly dentist for your child? At Dr. Ranjana Dental Avenue, we specialize in pediatric dentistry to ensure your little one has a comfortable and stress-free experience..",
          "From regular checkups to cavity prevention, we focus on building healthy habits that last a lifetime.",
        ]}
      />
      <Carousels
        heading="Why choose pediatric dentistry?"
        subHeading="Gentle, stress-free dental care for your child’s healthy smile."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
