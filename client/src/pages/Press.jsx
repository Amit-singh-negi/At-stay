import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const PRESS_EMAIL = "communications@atstay.in";

// Add real coverage here when you have it. The section stays hidden while this is empty.
// Example: { outlet: "Outlet name", title: "Article headline", date: "12 Nov 2026", url: "https://..." }
const coverage = [];

const facts = [
  { label: "What we do", value: "Online booking of homestays and hotel rooms" },
  { label: "Who it is for", value: "Travellers, and hotel owners who list rooms" },
  { label: "Website", value: "atstay.in" },
];

const Press = () => {
  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Press and media.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          Writing about AtStay? Here is what you need, and who to contact for
          anything else.
        </p>
      </section>

      {/* About boilerplate */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">About AtStay</h2>
        <p className="text-gray-700 leading-relaxed border-l-4 border-[#67c7b9] pl-5">
          AtStay is an online platform for booking homestays and hotel rooms.
          Travellers can browse rooms with photos, amenities and clear nightly
          prices, filter by type, price and city, and book online. Hotel owners
          can list their rooms and manage bookings from a simple dashboard.
        </p>

        <dl className="mt-8 grid sm:grid-cols-3 gap-6">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-sm text-gray-500">{f.label}</dt>
              <dd className="mt-1 font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Coverage (only shown when there is some) */}
      {coverage.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
          <h2 className="font-playfair text-2xl md:text-3xl mb-4">
            AtStay in the news
          </h2>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {coverage.map((c) => (
              <li key={c.url} className="py-4">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline"
                >
                  {c.title}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  {c.outlet}, {c.date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Brand assets */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl mb-4">Our logo</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="bg-[#67c7b9] p-8 rounded-sm flex items-center justify-center sm:w-56">
            <img
              src={assets.logo}
              alt="AtStay logo"
              className="h-10 invert opacity-80"
            />
          </div>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Please use the AtStay logo as it appears here, without changing
            its colours, stretching it or adding effects. For logo files and
            photos, write to us and we will send them.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-playfair text-2xl md:text-3xl">
            Media enquiries
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            For interviews, quotes or images, email{" "}
            <a href={`mailto:${PRESS_EMAIL}`} className="underline break-all">
              {PRESS_EMAIL}
            </a>
            . Please mention your publication and your deadline.
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

export default Press;