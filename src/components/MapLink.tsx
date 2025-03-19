import React from "react";

export default function MapLink() {
  const latitude = 28.407803;
  const longitude = 76.963993;
  const placeName = "Dr. Ranjana Sharma Dental Clinic";

  const googleMapUrl = `https://www.google.com/maps?q=${latitude},${longitude},(${placeName})`;

  return (
    <>
      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium ml-2 px-5 border rounded-full custom-bg"
      >
        Get Directions
      </a>
    </>
  );
}
