import React, { useState } from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Booking a room",
    faqs: [
      {
        q: "How do I book a room?",
        a: "Open Homestay, pick a room, choose your check-in and check-out dates and the number of guests, then confirm. You need to be logged in to book.",
      },
      {
        q: "Why can't I book my dates?",
        a: "The check-out date must be after the check-in date. If the dates are fine, the room may already be booked for them. Try different dates or another room.",
      },
      {
        q: "Where can I see my bookings?",
        a: "Log in and open My Bookings from the menu. All your reservations and their payment status are listed there.",
      },
    ],
  },
  {
    title: "Payments",
    faqs: [
      {
        q: "Do I have to pay when I book?",
        a: "Bookings are confirmed with the Pay At Hotel option, so you can pay when you arrive. If you prefer to pay online, open My Bookings and use the payment option on that booking.",
      },
      {
        q: "My online payment failed. What should I do?",
        a: "Go to My Bookings and check the booking's payment status first. If money was deducted but the booking still shows unpaid, write to us with your booking details and we will look into it.",
      },
    ],
  },
  {
    title: "Cancellations and refunds",
    faqs: [
      {
        q: "How do I ask for a refund?",
        a: "Contact us with your booking details and the reason for the request. Eligibility depends on the booking terms shown at the time of reservation.",
      },
      {
        q: "How long do refunds take?",
        a: "Approved refunds go back to your original payment method within 7 to 14 business days.",
      },
    ],
  },
  {
    title: "Your account",
    faqs: [
      {
        q: "How do I log in or sign up?",
        a: "Use the Login button at the top of any page. You can sign in again at any time to see your bookings.",
      },
      {
        q: "How is my data used?",
        a: "We use your details only to run your bookings and support you. Read the Privacy Policy for the full details.",
      },
    ],
  },
  {
    title: "For hotel owners",
    faqs: [
      {
        q: "How do I list my hotel?",
        a: "Log in and choose Become a Host. Fill in your hotel's name, address, contact and city. Once registered, a Dashboard button appears in the menu.",
      },
      {
        q: "How do I add a room?",
        a: "Open Dashboard, then Add Room. Choose the room type, set the price per night, select amenities and upload at least one photo.",
      },
      {
        q: "Can I register more than one hotel?",
        a: "Each account can register one hotel. Contact us if you need help with more properties.",
      },
    ],
  },
];

const HelpCenter = () => {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const visible = topics
    .map((t) => ({
      ...t,
      faqs: t.faqs.filter(
        (f) =>
          !q ||
          f.q.toLowerCase().includes(q) ||
          f.a.toLowerCase().includes(q)
      ),
    }))
    .filter((t) => t.faqs.length > 0);

  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          How can we help?
        </h1>
        <label htmlFor="help-search" className="sr-only">
          Search help articles
        </label>
        <input
          id="help-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search, for example: refund, payment, dates"
          className="mt-8 w-full max-w-xl border border-gray-300 rounded-full px-6 py-3 outline-none focus:border-[#67c7b9] focus:ring-2 focus:ring-[#67c7b9]/40"
        />
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-16 md:pb-20 max-w-4xl space-y-12">
        {visible.length === 0 && (
          <p className="text-gray-600">
            Nothing matches "{query}". Try a different word, or{" "}
            <Link to="/contact" className="underline">
              contact us
            </Link>
            .
          </p>
        )}

        {visible.map((t) => (
          <div key={t.title}>
            <h2 className="font-playfair text-2xl md:text-3xl mb-4">
              {t.title}
            </h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {t.faqs.map((f) => (
                <details key={f.q} className="group py-4" open={!!q}>
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="text-xl text-[#3a9a8c] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still need help */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="font-playfair text-2xl md:text-3xl">
            Didn't find your answer?
          </h2>
          <p className="mt-2 text-gray-600">
            Send us your question along with your booking ID, if you have one.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center"
        >
          Contact us
        </Link>
      </section>
    </div>
  );
};

export default HelpCenter;