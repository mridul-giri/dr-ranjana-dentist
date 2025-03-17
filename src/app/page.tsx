"use client";
import Hero from "@/components/Hero";
import AllServices from "@/components/AllServices";
import Intro from "@/components/Intro";
import EasySteps from "@/components/EasySteps";
import Reviews from "@/components/Reviews";
import Carousels from "@/components/Carousels";

const cards = [
  {
    title: "We're here for you",
    content:
      "From the moment you step in, you're greeted with a warm smile and a relaxing, spa-like atmosphere. Every detail is designed to make you feel at ease because your smile deserves the best care.",
  },
  {
    title: "Your dental home",
    content:
      "As a locally-owned dental practice, we strive to create a welcoming, family-like environment for our patients. Your comfort is our priority as we guide you toward better oral health and a brighter, more confident smile.",
  },
  {
    title: "Exceeding expectations",
    content:
      "You and your oral health are at the heart of everything we do. With a sincere dedication to expertise, care, and modern dentistry, we aim to provide an exceptional experience beyond your wildest dental dreams.",
  },
  {
    title: "Our team's vision",
    content:
      "To be stewards of an experience that goes beyond imagination and is more than just dentistry.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousels
        heading="A trip to the dentist's office should a source of serenity, not
          anxiety"
        subHeading="Here's how Dr. Ranjana Sharma delivers a patient experience like no
          other"
        cards={cards}
      />
      <AllServices />
      <Intro />
      <EasySteps />
      <Reviews />
    </main>
  );
}
