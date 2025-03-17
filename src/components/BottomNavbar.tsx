import React from "react";
import Link from "next/link";

export default function BottomNavbar() {
  return (
    <nav>
      <section
        className="xl:hidden fixed bottom-0 left-0 w-full z-50 button-color border-t font-bold
      flex justify-between items-center gap-5 px-4 py-5"
      >
        <Link
          href="/booking"
          className="border px-4 py-3 w-1/2 text-center rounded-full"
        >
          Book Now
        </Link>
        <span className="text-xl w-1/2 text-center">(+91) 9599111643</span>
      </section>
    </nav>
  );
}
