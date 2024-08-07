"use client";
import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Image from "@/Components/Image";

const Contact = () => {
  // const host = process.env.HOST;
  const host = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const host = "http://localhost:3000"
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, phone, desc };
    console.log({ name, email, phone, desc });

    try {
      const storeUserDetails = await fetch(`${host}/api/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (storeUserDetails.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");

        alert("Thanku you for the contacting us");
      }
    } 
    catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <Image />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-gray-400 mb-4 text-center max-w-md">
          Feel free to reach out to us with any questions or feedback you may
          have. We look forward to hearing from you!
        </p>
        <form
          className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
