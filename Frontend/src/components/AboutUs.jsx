import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center overflow-auto">
      <div className="max-w-3xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-300">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold">[ BookShelves ]</span> –
          your cozy online bookstore where stories come to life!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our journey began with a simple love for books and a dream to make
          reading accessible to everyone, everywhere. We believe in the magic of
          stories, the thrill of discovery, and the joy of holding a new book in
          your hands.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          At <span className="font-semibold">[ BookShelves ]</span>, we
          carefully curate our collection to offer a diverse selection of books
          for all ages and interests. From timeless classics and thrilling
          mysteries to inspiring self-help and everything in between, there's
          something here for everyone.
        </p>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-left text-gray-600">
          <li>
            <span className="font-semibold">Handpicked Selection</span>: Our
            books are chosen with love and care, focusing on quality, diversity,
            and relevance.
          </li>
          <li>
            <span className="font-semibold">Customer-Focused</span>: We are here
            for you. Our team is dedicated to providing a seamless shopping
            experience, fast delivery, and a personal touch.
          </li>
        </ul>
        <p className="text-lg text-gray-600 mt-6">
          Thank you for being part of our community. Dive into our collection,
          and let’s make reading an adventure again!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
