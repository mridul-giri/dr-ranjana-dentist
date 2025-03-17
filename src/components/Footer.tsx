import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mt-32 p-5 md:p-10 secondary-bg text-white">
        <section className="flex justify-center items-center">
          <Image
            src="/icons/ranjana-dental-white-logo.png"
            width={100}
            height={100}
            alt=""
          />
          <span className="font-bold">
            Dr. Ranjana Sharma <br />{" "}
            <span className="text-sm">Dental Avenue</span>
          </span>
        </section>
        <div className="flex flex-col xl:flex-row justify-between gap-5 mt-10">
          <section className="w-full">
            <h3 className="text-4xl font-bold mb-6">Our Hours:</h3>
            <ul className="flex flex-col gap-1 text-xl">
              <li className="text-2xl">(Monday to Sunday)</li>
              <li>- Morning: 10:00am - 1:00pm</li>
              <li>- Evening: 4:00am - 8:00pm</li>
            </ul>
          </section>
          <section className="w-full">
            <h3 className="text-4xl font-bold mb-6">Our Location:</h3>
            <ul className="flex flex-col gap-5 text-xl">
              <li>
                <p className="mb-3">
                  Address- Shop number 42, Pivotal Divaan, Sector 84, Gurgaon,
                  Haryana, 122004
                </p>
              </li>
              <li>Call- (+91) 9599111643</li>
              <li>Email- drranjanadentalavenue@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>
      <section className="text-center bg-[#1e1e1e] text-white py-4 font-medium">
        All rights reserved, Copyright 2025 | Dr. Ranjana Sharma Dental Avenue
      </section>
    </footer>
  );
}
