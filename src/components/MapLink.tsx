import React from "react";

export default function MapLink() {
  const latitude = 28.407803;
  const longitude = 76.963993;
  const placeName = "Dr. Ranjana Sharma Dental Clinic";

  const googleMapUrl = `https://www.google.com/maps?q=${latitude},${longitude},(${placeName})`;

  return (
    <>
      <span>
        Shop number 42, Pivotal Divaan, Sector 84, Gurgaon, Haryana, 122004
      </span>
      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium ml-2 px-5 py-0.5 border  border-color rounded-full custom-bg"
      >
        Click here to see location on map
      </a>
    </>
  );
}
