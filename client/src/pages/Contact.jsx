import React, { useState } from "react";
import { Link } from "react-router-dom";

const EMAIL = "communications@atstay.in";

const topics = [
  "Booking help",
  "Payment or refund",
  "List my hotel",
  "Website problem",
  "Something else",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `${form.topic} - ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#67c7b9] focus:ring-2 focus:ring-[#67c7b9]/40 bg-white";

  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Talk to us.
        </h1>
        <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-2xl">
          Questions about a booking, a payment, or listing your hotel? Send us
          a message and tell us what you need help with.
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-16 md:pb-24 grid md:grid-cols-5 gap-10 md:gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1.5">
              What is this about?
            </label>
            <select
              id="topic"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className={inputClass}
            >
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Include your booking ID if you have one."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Send message
          </button>
          <p className="text-sm text-gray-500">
            This opens your email app with the message ready to send.
          </p>
        </form>

        {/* Side info */}
        <aside className="md:col-span-2 space-y-10">
          <div className="border-l-4 border-[#67c7b9] pl-5">
            <h2 className="font-playfair text-2xl mb-2">Email us directly</h2>
            <a
              href={`mailto:${EMAIL}`}
              className="underline break-all text-gray-800"
            >
              {EMAIL}
            </a>
          </div>

          <div className="border-l-4 border-[#67c7b9] pl-5">
            <h2 className="font-playfair text-2xl mb-3">Quick answers</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/my-bookings" className="underline">
                  Check your bookings
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="underline">
                  Refund policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="underline">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
