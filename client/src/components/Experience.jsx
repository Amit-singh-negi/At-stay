import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const moments = [
  {
    title: "Wake up slowly",
    text: "Stays chosen for their surroundings, so mornings start with a view and a cup of tea, not an alarm.",
    image: assets.Shimla_Hills_2,
  },
  {
    title: "Eat what the place eats",
    text: "Breakfasts and home-style meals where hosts offer them, so you taste the region instead of a generic menu.",
    image: assets.mowgli_2,
  },
  {
    title: "Rest properly",
    text: "Comfortable beds, clean rooms and quiet evenings. The kind of stay you don't need a holiday to recover from.",
    image: assets.Bhimkothi_2,
  },
];

const Experience = () => {
  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-12 md:pb-16 max-w-5xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Stay somewhere that feels like somewhere.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          A good trip is made of small moments: the first look out of the
          window, a meal you didn't plan, a night of proper sleep. This is what
          we want every AtStay booking to include.
        </p>
      </section>

      {/* Moments */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-16 md:pb-24 space-y-14 md:space-y-20">
        {moments.map((m, i) => (
          <div
            key={m.title}
            className={`flex flex-col gap-6 md:gap-12 md:items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <img
              src={m.image}
              alt={m.title}
              className="w-full md:w-1/2 h-64 md:h-96 object-cover rounded-sm"
            />
            <div className="md:w-1/2 max-w-lg">
              <h2 className="font-playfair text-2xl md:text-4xl">{m.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Practical info */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
        <h2 className="font-playfair text-3xl md:text-4xl mb-8">
          Before you book
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-16 gap-y-5 text-gray-700 max-w-4xl">
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Check the amenities on each room page. Breakfast and Wi-Fi are
            listed there when the host offers them.
          </li>
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Prices shown are per night, so you can compare stays easily.
          </li>
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Use the filters to pick room type and budget before you scroll.
          </li>
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Read our{" "}
            <Link to="/refund-policy" className="underline">
              refund policy
            </Link>{" "}
            before confirming your dates.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="font-playfair text-2xl md:text-3xl">
          Find a stay that fits your trip.
        </h2>
        <Link
          to="/rooms"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center"
        >
          Browse rooms
        </Link>
      </section>
    </div>
  );
};

export default Experience;