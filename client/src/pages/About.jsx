import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="relative">
        <img
          src={assets.heroImage}
          alt="A quiet hotel room with a view"
          className="w-full h-[420px] md:h-[520px] object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-end">
          <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-12 md:pb-16 max-w-4xl">
            <h1 className="font-playfair text-4xl md:text-6xl text-white leading-tight">
              A simpler way to find a good room.
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-20">
        <h2 className="font-playfair text-3xl md:text-4xl leading-snug">
          We built AtStay for travellers who want to book without the guesswork.
        </h2>
        <div className="space-y-5 text-gray-600 leading-relaxed max-w-xl">
          <p>
            Choosing where to stay shouldn't mean opening ten tabs and
            comparing rooms that all look the same. AtStay puts real rooms from
            hotel owners in one place, with clear prices, photos and amenities,
            so you can decide quickly and book with confidence.
          </p>
          <p>
            For hotel owners, AtStay is a straightforward way to list rooms,
            manage availability and receive bookings from a dashboard that
            doesn't take a manual to understand.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
        <h2 className="font-playfair text-3xl md:text-4xl mb-10">
          What you get with AtStay
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="border-l-4 border-[#67c7b9] pl-5">
            <h3 className="font-semibold text-lg mb-2">Clear room details</h3>
            <p className="text-gray-600 leading-relaxed">
              Photos, room type, amenities and the price per night, all visible
              before you commit to anything.
            </p>
          </div>
          <div className="border-l-4 border-[#67c7b9] pl-5">
            <h3 className="font-semibold text-lg mb-2">Filters that help</h3>
            <p className="text-gray-600 leading-relaxed">
              Narrow rooms by type, price range or city, and sort by price or
              newest listings.
            </p>
          </div>
          <div className="border-l-4 border-[#67c7b9] pl-5">
            <h3 className="font-semibold text-lg mb-2">Easy for owners</h3>
            <p className="text-gray-600 leading-relaxed">
              Register your hotel, add rooms with photos and track bookings
              from one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <img
            src={assets.Shimla_Hills_1}
            alt="Hotel room"
            className="w-full h-56 object-cover rounded-sm md:row-span-2 md:h-full"
          />
          <img
            src={assets.mowgli_1}
            alt="Hotel room"
            className="w-full h-56 md:h-64 object-cover rounded-sm"
          />
          <img
            src={assets.Bhimkothi_1}
            alt="Hotel room"
            className="w-full h-56 md:h-64 object-cover rounded-sm"
          />
          <img
            src={assets.mowgli_3}
            alt="Hotel room"
            className="w-full h-56 md:h-64 object-cover rounded-sm col-span-2 md:col-span-2"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200 pt-10">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl">
              Ready to find your room?
            </h2>
            <p className="text-gray-600 mt-2">
              Questions? Write to us at{" "}
              <a href="mailto:communications@atstay.in" className="underline">
                communications@atstay.in
              </a>
              .
            </p>
          </div>
          <Link
            to="/rooms"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center"
          >
            Browse rooms
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;