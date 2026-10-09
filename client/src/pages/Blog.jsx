import React from "react";
import { Link, useParams } from "react-router-dom";

// Add or edit posts here. `slug` becomes the link: /blog/<slug>
// Optional: add `date: "12 Nov 2026"` and it will show under the title.
const posts = [
  {
    slug: "how-to-choose-a-homestay",
    title: "How to choose a homestay you will enjoy",
    summary:
      "Five things worth checking on a room page before you press book.",
    body: [
      "A good homestay is rarely about the fanciest photos. It is about whether the place fits the way you travel.",
      "Start with the location. Check which city or area the room is in, and think about how you will get there, especially if you arrive late or travel with luggage.",
      "Next, read the amenities list. Wi-Fi, breakfast and hot water are easy to assume and easy to miss, so confirm what is actually listed.",
      "Look at all the photos, not just the first one. Bathrooms, beds and the view from the window tell you more than the cover image.",
      "Compare the price per night with what is included. A slightly higher price with breakfast can be better value than a cheaper room that adds extras later.",
      "Finally, use the filters. Room type and price range cut a long list down quickly, so you spend your time on rooms that fit.",
    ],
  },
  {
    slug: "packing-for-a-hill-stay",
    title: "What to pack for a stay in the hills",
    summary:
      "Weather changes quickly in the mountains. A short list that covers most trips.",
    body: [
      "Hill weather can shift within a day, so pack for a range rather than one forecast.",
      "Bring layers instead of one heavy jacket: a light base layer, a warm mid layer and something windproof or waterproof on top.",
      "Carry comfortable shoes with a good grip. Paths and steps at hill stays are often uneven or steep, and can be slippery after rain.",
      "Pack a small first-aid kit, any regular medicines, a power bank and a torch. Power cuts and weak mobile signal are more common in remote areas.",
      "Keep some cash with you. Not every small shop or taxi in a hill town accepts digital payments.",
      "Finally, check road and weather conditions before you leave, and tell your host roughly when you expect to arrive.",
    ],
  },
  {
    slug: "tips-for-first-time-hosts",
    title: "Tips for first-time hosts",
    summary:
      "Simple habits that help guests book your rooms and leave happy.",
    body: [
      "If you are listing your first room, the basics matter most: honest photos, accurate details and a fair price.",
      "Take bright, clear photos of every room, including the bathroom and the view. Guests trust a listing that shows the real space.",
      "List your amenities carefully. Only mention what you actually offer, so guests are never surprised on arrival.",
      "Set a price per night you can stand behind, and keep your room's availability up to date so guests do not book dates you cannot honour.",
      "Be ready to help guests with directions, check-in time and local tips. A short, friendly message before arrival goes a long way.",
      "After each stay, note what guests asked about and update your listing so the next guest already has the answer.",
    ],
  },
];

const Blog = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Single post view
  if (slug) {
    if (!post) {
      return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-20 max-w-3xl">
          <h1 className="font-playfair text-3xl md:text-5xl">
            We couldn't find that article.
          </h1>
          <Link to="/blog" className="inline-block mt-6 underline">
            Back to all articles
          </Link>
        </div>
      );
    }

    return (
      <article className="text-gray-800 px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-20 max-w-3xl">
        <Link to="/blog" className="text-sm underline text-gray-600">
          All articles
        </Link>
        <h1 className="font-playfair text-3xl md:text-5xl leading-tight mt-4">
          {post.title}
        </h1>
        {post.date && <p className="mt-3 text-sm text-gray-500">{post.date}</p>}
        <div className="mt-8 space-y-5 text-gray-700 text-lg leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-playfair text-xl">Ready to plan your stay?</p>
          <Link
            to="/rooms"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-center"
          >
            Browse rooms
          </Link>
        </div>
      </article>
    );
  }

  // List view
  return (
    <div className="text-gray-800">
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-10 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight">
          Travel notes.
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
          Practical advice for choosing, packing for and hosting great stays.
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20 max-w-4xl">
        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="block py-6 hover:bg-[#67c7b9]/10 transition-colors px-2 -mx-2"
              >
                <h2 className="font-playfair text-2xl md:text-3xl">
                  {p.title}
                </h2>
                {p.date && (
                  <p className="mt-1 text-sm text-gray-500">{p.date}</p>
                )}
                <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
                  {p.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Blog;