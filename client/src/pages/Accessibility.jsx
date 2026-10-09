import React from "react";
import { Link } from "react-router-dom";

const commitments = [
  {
    title: "Readable pages",
    text: "We aim for clear text, enough contrast between text and background, and layouts that work when you zoom in or use a small screen.",
  },
  {
    title: "Works with a keyboard",
    text: "Pages and forms should be usable without a mouse, with a visible focus outline on buttons and links.",
  },
  {
    title: "Works with screen readers",
    text: "Images have descriptive text and form fields have labels, so assistive technology can read them out.",
  },
];

const bookingTips = [
  "Hill and heritage properties often have stairs, steep paths or uneven ground. Ask the host about step-free access before you book.",
  "Tell the host about any needs in advance, such as a ground-floor room, a walking aid, or dietary requirements.",
  "Check the photos and amenities on each room page, and write to us if something you need is not listed.",
  "If you travel with a service animal, confirm the property's policy with the host before booking.",
];

const Accessibility = () => {
  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          A website everyone can use.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          We want every traveller to be able to find and book a stay on AtStay,
          whatever device or assistive technology they use. This page explains
          what we are working towards and how to tell us when we fall short.
        </p>
      </section>

      {/* Commitments */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl mb-6">
          What we work towards
        </h2>
        <div className="space-y-6">
          {commitments.map((c) => (
            <div key={c.title} className="border-l-4 border-[#67c7b9] pl-5">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-1 text-gray-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Our goal is to follow the Web Content Accessibility Guidelines (WCAG)
          2.1, level AA. We are still improving, and some parts of the site may
          not meet that standard yet.
        </p>
      </section>

      {/* Known limits */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">
          Known limitations
        </h2>
        <ul className="space-y-3 text-gray-700 leading-relaxed">
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Room photos are uploaded by hotel owners, and not all of them have
            a written description.
          </li>
          <li className="border-l-4 border-[#67c7b9] pl-4">
            The online payment screen is provided by our payment partner, and
            we do not control how accessible it is.
          </li>
          <li className="border-l-4 border-[#67c7b9] pl-4">
            Details about step-free access or mobility features are not yet
            listed on every room page.
          </li>
        </ul>
      </section>

      {/* Booking tips */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-16">
        <div className="max-w-4xl">
          <h2 className="font-playfair text-2xl md:text-3xl mb-6">
            Booking a stay with access needs
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            {bookingTips.map((t) => (
              <li key={t} className="border-l-4 border-[#67c7b9] pl-4">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feedback */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-playfair text-2xl md:text-3xl">
            Found something hard to use?
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Tell us which page it was, what happened, and the device or
            assistive technology you were using. We read every message and use
            it to fix the problem.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center shrink-0"
        >
          Send feedback
        </Link>
      </section>
    </div>
  );
};

export default Accessibility;