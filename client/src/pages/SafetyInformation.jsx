import React from "react";
import { Link } from "react-router-dom";

const emergency = [
  { label: "All emergencies", number: "112" },
  { label: "Police", number: "100" },
  { label: "Fire", number: "101" },
  { label: "Ambulance", number: "102" },
  { label: "Women helpline", number: "1091" },
];

const sections = [
  {
    title: "Before you book",
    tips: [
      "Read the room page fully: room type, amenities, photos and price per night.",
      "Check that the city and property match where you plan to travel.",
      "Keep your booking details and the host's contact information saved on your phone.",
      "For late-night arrivals or remote locations, ask the host about the route and check-in process beforehand.",
    ],
  },
  {
    title: "When you arrive",
    tips: [
      "Confirm that the room matches your booking before you unpack.",
      "Locate the exits and, where available, the fire extinguisher.",
      "Check that the door lock and windows work properly.",
      "Ask the host for the nearest hospital and pharmacy, especially in hill areas.",
      "Carry a valid photo ID. Hotels usually ask for it at check-in.",
    ],
  },
  {
    title: "During your stay",
    tips: [
      "Keep valuables and documents locked away when you leave the room.",
      "Do not share your room details or booking information with strangers.",
      "Be careful with electrical appliances and heaters, and switch them off when you leave.",
      "In hilly or remote areas, check weather and road conditions before travelling.",
    ],
  },
  {
    title: "Paying safely",
    tips: [
      "Make online payments only through the payment option inside My Bookings.",
      "AtStay will never ask for your card PIN, OTP or password by phone, message or email.",
      "If someone asks you to pay outside the website for an AtStay booking, do not pay and contact us.",
      "Keep payment confirmations until your stay is over.",
    ],
  },
];

const SafetyInformation = () => {
  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Travel with a plan, stay with peace of mind.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          A few simple habits make most trips safer. Here is what to check
          before you book, when you arrive and while you stay.
        </p>
      </section>

      {/* Emergency numbers */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <div className="border-l-4 border-red-500 bg-red-50 p-6">
          <h2 className="font-playfair text-2xl md:text-3xl">
            In an emergency, call first
          </h2>
          <p className="mt-2 text-gray-700">
            If you or someone else is in danger, call local emergency services
            before contacting us.
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {emergency.map((e) => (
              <li
                key={e.label}
                className="flex items-baseline justify-between border-b border-red-200 pb-2"
              >
                <span>{e.label}</span>
                <a
                  href={`tel:${e.number}`}
                  className="font-semibold text-lg underline"
                >
                  {e.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-16 max-w-4xl space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-playfair text-2xl md:text-3xl mb-4">
              {s.title}
            </h2>
            <ul className="space-y-3">
              {s.tips.map((t) => (
                <li key={t} className="border-l-4 border-[#67c7b9] pl-4 text-gray-700 leading-relaxed">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Reporting */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-playfair text-2xl md:text-3xl">
            Report a safety concern
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            If a stay was not as described, or you felt unsafe, tell us. Send
            your booking ID, the property name and what happened, so we can
            follow up.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center shrink-0"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
};

export default SafetyInformation;