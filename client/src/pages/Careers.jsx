import React from "react";

const CAREERS_EMAIL = "communications@atstay.in";

// Add real roles here. When this has items, the list shows instead of the empty message.
// Example:
// { title: "Frontend Developer", type: "Full time", location: "Remote", summary: "Build the AtStay booking experience with React." }
const openings = [];

const values = [
  {
    title: "Make booking simple",
    text: "We remove steps, jargon and surprises, for travellers and for the hotel owners who list with us.",
  },
  {
    title: "Own your work",
    text: "A small team means you see what you build go live and hear directly from the people who use it.",
  },
  {
    title: "Be straight with people",
    text: "Clear prices, honest descriptions and plain language, in the product and inside the team.",
  },
];

const Careers = () => {
  const mailto = (subject) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Help people find better stays.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          AtStay is a small team building a simpler way to book homestays and
          hotel rooms. If that sounds like work you would enjoy, read on.
        </p>
      </section>

      {/* Values */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-14 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl mb-6">
          How we work
        </h2>
        <div className="space-y-6">
          {values.map((v) => (
            <div key={v.title} className="border-l-4 border-[#67c7b9] pl-5">
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="mt-1 text-gray-600 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="bg-[#67c7b9]/15 px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-16">
        <div className="max-w-4xl">
          <h2 className="font-playfair text-2xl md:text-3xl mb-6">
            Open roles
          </h2>

          {openings.length === 0 ? (
            <div>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                We don't have any open roles right now. If you think you could
                help AtStay anyway, send us a short note about yourself, what
                you do best, and a link to your work or CV. We keep every
                message and get in touch when something fits.
              </p>
              <a
                href={mailto("General application")}
                className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Send your profile
              </a>
            </div>
          ) : (
            <ul className="divide-y divide-gray-300 border-y border-gray-300 bg-white/60">
              {openings.map((job) => (
                <li
                  key={job.title}
                  className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {job.type}, {job.location}
                    </p>
                    {job.summary && (
                      <p className="mt-2 text-gray-600 max-w-xl">
                        {job.summary}
                      </p>
                    )}
                  </div>
                  <a
                    href={mailto(`Application: ${job.title}`)}
                    className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-center shrink-0"
                  >
                    Apply
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Hotel owners */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-20 max-w-4xl">
        <h2 className="font-playfair text-2xl md:text-3xl">
          Own a hotel or homestay?
        </h2>
        <p className="mt-2 text-gray-600 leading-relaxed">
          You don't need to apply for a job to work with us. Log in and choose
          Become a Host to list your rooms on AtStay.
        </p>
      </section>
    </div>
  );
};

export default Careers;