"use client";
import AllServices from "@/components/AllServices";
import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import ServiceHero from "@/components/ServiceHero";

export default function Services() {
  return (
    <main>
      <PageHeader
        service="Dental Services"
        subHeading="Let Us Help You Protect Your Smile"
        src="/images/smiling-girl.jpg"
        alt="Smiling girl"
      />
      <ServiceHero
        paragraph={[
          "At Dr. Ranjana Sharma Dental Avenue, we understand that no two patients are the same when it comes to their medical history, dental needs, and smile aspirations. That's why we avoid one-size-fits-all treatments and take the time to craft personalized treatment plans just for you.",
          "With open communication, cutting-edge technology, and a spa-like atmosphere, we work hand in hand to deliver exceptional results—going beyond what you ever imagined for your smile.",
        ]}
      />
      <AllServices />
      <Reviews />
    </main>
  );
}
