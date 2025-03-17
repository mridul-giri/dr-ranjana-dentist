import Link from "next/link";

export default function BookingBtn() {
  return (
    <Link
      href="/booking"
      className="font-bold text-lg px-8 py-4 rounded-full bg-[#DF7599] text-color hover:opacity-90 transition-all duration-200 ease-in-out"
    >
      Book Now
    </Link>
  );
}
