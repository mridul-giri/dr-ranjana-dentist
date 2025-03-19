import Link from "next/link";

export default function BookingBtn() {
  return (
    <Link
      href="/booking"
      className="font-semibold text-lg px-8 py-3 rounded shadow-2xl button-color hover:opacity-90 transition-all duration-200 ease-in-out"
    >
      Book Now
    </Link>
  );
}
