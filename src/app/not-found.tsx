"use client";
import { heroFadeInUp } from "@/animations/motionVariants";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      {...heroFadeInUp}
    >
      <h1 className="text-5xl font-bold secondary-color">
        404 - Page Not Found
      </h1>
      <p className="text-2xl primary-color">
        The page you are looking for does not exist.
      </p>
    </motion.div>
  );
}
