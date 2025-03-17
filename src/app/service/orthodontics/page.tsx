"use client";
import EasySteps from "@/components/EasySteps";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "Boosted confidence",
    content: "A straighter smile enhances your appearance and self-esteem.",
  },
  {
    title: "Better oral health",
    content:
      "Properly aligned teeth are easier to clean, reducing the risk of cavities and gum disease.",
  },
  {
    title: "Improved bite function",
    content:
      "Correcting bite issues helps with chewing, speaking, and overall jaw comfort.",
  },
];

export default function Orthodontics() {
  return (
    <main>
      <PageHeader
        service="Orthodontics"
        subHeading="Straighten your teeth for a confident, healthy smile with orthodontic treatment"
        src="/images/orthodontics-smiling-patient.jpg"
        alt="Happy patient with perfectly aligned teeth after orthodontic treatment"
      />
      <ServiceHero
        paragraph={[
          "Do you have misaligned teeth, gaps, or bite issues? Don't worry—our expert dentist, Dr. Ranjana, offers personalized orthodontic solutions to straighten your teeth and improve your oral health.'s strength and function with high-quality dental fillings.",
          "Orthodontic treatments not only enhance your smile but also make chewing and speaking easier, ensuring long-term dental health.",
        ]}
      />
      <Carousels
        heading="Why choose orthodontic treatment?"
        subHeading="Discover the benefits of a straighter smile."
        cards={cards}
      />
      <EasySteps />
      <Reviews />
    </main>
  );
}
