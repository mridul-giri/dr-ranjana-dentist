import Link from "next/link";

export default function BookingBtn() {
  return (
    <Link
      href="/booking"
      className="font-bold border text-lg px-8 py-4 rounded-full bg-[#714c47]  text-white hover:bg-white hover:text-[#714c47] transition-all duration-200 ease-in-out"
    >
      Book Now
    </Link>
  );
}
