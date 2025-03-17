import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Averia_Libre } from "next/font/google";
import BottomNavbar from "@/components/BottomNavbar";

const averiaLibre = Averia_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title:
    "Best Dentist in Gurgaon | Dr Ranjana Sharma Dental Avenue in Gurgaon and Delhi-NCR",
  description:
    "Get professional dental care from experienced dentists. Book your appointment today for a healthy and confident smile!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Best Dentist in Gurgaon | Dr Ranjana Sharma Dental Avenue in Gurgaon and Delhi-NCR",
    description:
      "Get professional dental care from experienced dentists. Book your appointment today for a healthy and confident smile!",
    // images: [
    //   {
    //     url: "https://drranjanasharma.in/dental-preview.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Dr Ranjana Sharma Dental Avenue",
    //   },
    // ],
    // type: "website",
    // url: "https://drranjanasharma.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body
        className={`${averiaLibre.className} antialiased text-color overflow-x-hidden w-full pb-[91px] xl:pb-0`}
      >
        <Navbar />
        {children}
        <BottomNavbar />
        <Footer />
      </body>
    </html>
  );
}
// text-[#714c47]
