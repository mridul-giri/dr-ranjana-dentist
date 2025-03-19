"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import BookingBtn from "./BookingBtn";
import Image from "next/image";
import { useState } from "react";

const services: { title: string; href: string }[] = [
  {
    title: "Dental Implants",
    href: "/service/dental-implants",
  },
  {
    title: "Root Canal Treatment",
    href: "/service/root-canal-treatment",
  },
  {
    title: "Dental Filling",
    href: "/service/dental-filling",
  },
  {
    title: "Orthodontics",
    href: "/service/orthodontics",
  },
  {
    title: "Pediatric Dentistry/Kids Dentistry",
    href: "/service/pediatric-dentistry",
  },
  {
    title: "Cosmetic Dentistry",
    href: "/service/cosmetic-dentistry",
  },
  {
    title: "Smile Makeover",
    href: "/service/smile-makeover",
  },
  {
    title: "Full Mouth Rehabilitation",
    href: "/service/full-mouth-rehabilitation",
  },
  {
    title: "Gum Rehabilitation",
    href: "/service/gum-rehabilitation",
  },
  {
    title: "Crown and Bridges",
    href: "/service/crown-bridges",
  },
  {
    title: "Preventive Dentistry",
    href: "/service/preventive-dentistry",
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <nav className="hidden lg:flex justify-between items-center py-2 px-8 fixed w-[100%] top-0 left-0 z-50 bg-white shadow">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/ranjana-dental-logo.png"
              width={70}
              height={70}
              alt=""
            />
            <span className="font-bold text-xl">
              Dr. Ranjana Sharma <br />{" "}
              <span className="text-sm">Dental Avenue</span>
            </span>
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-10">
          <li>
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-semibold hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="p-0">
                    <NavigationMenuLink
                      href="/service"
                      className="font-semibold hover:underline p-0"
                    >
                      Our Services
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid gap-3 p-2 grid-cols-2 lg:w-[400px]">
                      {services.map((item, index) => (
                        <NavigationMenuLink
                          href={item.href}
                          key={index}
                          className="font-semibold hover:underline p-1"
                        >
                          {item.title}
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <Link href="/gallery" className="font-semibold hover:underline">
              Gallery
            </Link>
          </li>
          <li>
            <BookingBtn />
          </li>
        </ul>
      </nav>

      {/* Small screen navbar */}
      <nav className="xl:hidden flex justify-between items-center py-4 px-4 md:px-8 fixed w-[100%] top-0 left-0 z-50 bg-white shadow">
        <div className="flex justify-center items-center">
          <Link
            href="/"
            onClick={() => setVisible(false)}
            className="flex items-center"
          >
            <Image
              src="/icons/ranjana-dental-logo.png"
              width={70}
              height={70}
              alt=""
            />
            <span className="font-bold">
              Dr. Ranjana Sharma <br />{" "}
              <span className="text-sm">Dental Avenue</span>
            </span>
          </Link>
        </div>

        {visible ? (
          <Image
            width={100}
            height={100}
            alt=""
            onClick={() => setVisible(!visible)}
            className="cursor-pointer xl:hidden w-10 border border-black p-2"
            src="/icons/close-icon.png"
          />
        ) : (
          <Image
            width={100}
            height={100}
            alt=""
            onClick={() => setVisible(!visible)}
            className="cursor-pointer xl:hidden w-10 border border-black p-2"
            src="/icons/menu-icon.png"
          />
        )}
        <div
          className={`absolute top-[88px] right-0 pb-4 shadow-2xl
          secondary-bg text-white xl:hidden
          transition-all duration-300 ease-in-out  ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <ul className="flex flex-col gap-3 p-3">
            <li>
              <Link
                href="/"
                onClick={() => setVisible(false)}
                className="font-semibold hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setVisible(false)}
                className="font-semibold hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              {visible && (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="p-0">
                        <NavigationMenuLink
                          href="/service"
                          onClick={() => setVisible(false)}
                          className="font-semibold hover:underline p-0"
                        >
                          Our Services
                        </NavigationMenuLink>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white text-[#1e1e1e] max-h-80 overflow-y-auto">
                        <ul className="grid w-[300px] gap-1 md:gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((item, index) => (
                            <NavigationMenuLink
                              href={item.href}
                              key={index}
                              onClick={() => setVisible(false)}
                              className="font-bold text-color hover:underline p-1"
                            >
                              {item.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </li>
            <li>
              <Link
                href="/gallery"
                onClick={() => setVisible(false)}
                className="font-semibold hover:underline"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
