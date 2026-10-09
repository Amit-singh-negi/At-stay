import React, { useState } from "react";
import { cities, assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const CalendarIcon = () => (
    <svg
        className="w-4 h-4 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
    </svg>
);

const inputClass =
    "rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none";

const Hero = () => {
    const { navigate, getToken, axios, setSearchedCities, user } = useAppContext();

    const [destination, setDestination] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);

    const today = new Date().toISOString().split("T")[0];

    const onSearch = async (e) => {
        e.preventDefault();
        const city = destination.trim();
        if (!city) return;

        // Build the URL safely (handles spaces and special characters)
        const params = new URLSearchParams({ destination: city });
        if (checkIn) params.set("checkIn", checkIn);
        if (checkOut) params.set("checkOut", checkOut);
        if (guests) params.set("guests", guests);
        navigate(`/rooms?${params.toString()}`);

        // Save recent search (only if signed in). Failure must not block the user.
        if (user) {
            try {
                await axios.post(
                    "/api/user/store-recent-search",
                    { recentSearchedCity: city },
                    { headers: { Authorization: `Bearer ${await getToken()}` } }
                );
            } catch (error) {
                console.error("Failed to save recent search:", error);
            }
        }

        // Keep the last 3 unique cities
        setSearchedCities((prev) => {
            const updated = [...prev.filter((c) => c !== city), city];
            return updated.slice(-3);
        });
    };

    return (
        <div
            className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${assets.heroImage})` }}
        >
            <div>
                <span className="bg-[#67c7b9]/90 px-3.5 py-1 rounded-full mt-20 inline-block">
                    The Ultimate Hotel Experience
                </span>
                <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
                    Discover Your Perfect Gateway Destination
                </h1>
                <p className="max-w-lg mt-2 text-sm md:text-base">
                    Affordable luxury and comfort await at the world's most exclusive
                    hotels and resorts. Start your journey today.
                </p>
            </div>

            <form
                onSubmit={onSearch}
                className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
            >
                <div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon />
                        <label htmlFor="destinationInput">Destination</label>
                    </div>
                    <input
                        id="destinationInput"
                        type="text"
                        list="destinations"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className={inputClass}
                        placeholder="Type here"
                        required
                    />
                    <datalist id="destinations">
                        {cities.map((city) => (
                            <option value={city} key={city} />
                        ))}
                    </datalist>
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon />
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input
                        id="checkIn"
                        type="date"
                        min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className={inputClass}
                    />
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon />
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input
                        id="checkOut"
                        type="date"
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className={inputClass}
                    />
                </div>

                <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
                    <label htmlFor="guests">Guests</label>
                    <input
                        id="guests"
                        type="number"
                        min={1}
                        max={4}
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className={`${inputClass} max-w-16`}
                    />
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
                >
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span>Search</span>
                </button>
            </form>
        </div>
    );
};

export default Hero;