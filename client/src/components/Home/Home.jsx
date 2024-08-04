/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../../Pages/Quiz";
import Faqs from "../../Pages/Faqs";
import axios from "axios";

function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setMessage(" 🥳Congratulations! You have Registered");
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setMessage("");
    }, 4000);
  };

  const baseUrl = "http://localhost:5000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: "EcoVatika - Say Hello!",
      message: `Subject: 🌟 Welcome to the EcoVatika Community! 🌿
Dear Eco Enthusiast,

Thank you for subscribing to the EcoVatika newsletter! We're thrilled to have you join our vibrant community dedicated to promoting sustainability and eco-friendly living.

Here’s what you can look forward to:

🌱 Sustainable Living Tips: Receive regular insights on how to reduce your carbon footprint and make greener choices every day.

🛒 Eco-Friendly Product Highlights: Discover and shop the best sustainable products available on our EcoStore marketplace.

💡 Innovative Green Ideas: Stay informed about the latest trends and innovations in sustainability.

We're excited to embark on this journey with you and work together to make a positive impact on our planet.

If you have any questions, suggestions, or stories to share, feel free to reach out to us at ecovatika@gmail.com .

Thank you for being a part of EcoVatika. Let's make sustainability a way of life!

Warm regards,

The EcoVatika Team
By Vivek and Vranda`,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
  return (
    <div className="dark:bg-black bg-white pb-10">
      {/* ///////////////Landing page///////////////////// */}
      <div className="h-lvh relative pt-20 md:pt-16 dark:bg-black">
        <div className="w-full h-[85vh] grid place-content-center relative mb-5 py-10">
          <img
            src="/bg.jpg"
            alt="Background"
            className="object-cover w-[80vw] h-[80vh] md:h-[75vh] rounded-3xl"
          />
          <div className="">
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-6xl font-bold dark:text-black">
              EcoVatika
            </h1>
          </div>
        </div>
      </div>

      {/* ///////////////////About us///////////////////////// */}
      <div className="mb-20 md:mb-0 mt-10 sm:h-[90vh] justify-center text-center grid placeholder-shown: place-content-center dark:bg-black">
        <div className="w-[70vw] md:w-[50vw] text-center md:text-left flex flex-col place-content-center gap-2 md:gap-12">
          <div className="grid place-content-center gap-2">
            <h1 className="text-2xl md:text-5xl font-bold text-[#191A23] text-center dark:text-[#7cd136]">
              About Us
            </h1>
            <div className="h-[3px] w-28 md:h-[6px] md:w-64 bg-[#78b829] dark:bg-[#487a1f] rounded-md"></div>
          </div>
          <div className="text-[15px] md:text-2xl text-[#8A868C] dark:text-gray-200 flex flex-col gap-4 md:gap-3">
            <p>
              🌱 we're dedicated to fostering a sustainable future by offering a
              curated marketplace of eco-friendly products.
            </p>

            <p>
              🌵 Our platform empowers our community with tools like a Carbon
              Calculator, sustainability quiz, and a Recycle Item Search Bar to
              support greener living.
            </p>

            <p>
              ☘️ Join us in making a positive impact on our planet, one
              eco-friendly choice at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/about">
              <button className="bg-[#78b829] p-1 md:p-2 px-3 md:px-5 text-sm md:text-xl rounded-lg hover:bg-[#56841e]">
                Know More <span className="text-white">&#8599;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* /////////////////Features/////////////////////////// */}
      <div className="md:px-16 flex flex-col px-8 gap-16 mb-11 dark:bg-black">
        <div className="md:flex bg-gray-200 dark:bg-green-900 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-black md:border-none ">
          <div className="flex-1 grid place-content-center">
            <img
              src="/EcoScore.png"
              className="h-36 md:h-72 rounded-3xl my-3"
            />
          </div>
          <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-2">
            <h1 className="text-green-800 font-bold text-3xl dark:text-white dark:md:text-[#7cd136]">
              <span className="md:block">🍂</span>EcoScore
            </h1>
            <h3 className="text-black md:text-xl font-semibold dark:text-gray-100">
              Easy-to-use calculator estimates your carbon footprint
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
              It offers a straightforward way to understand your impact on the
              environment. By entering details about your travel habits, energy
              consumption, and waste generation, you can gain valuable insight.
              This awareness empowers you to make informed choices and reduce
              your carbon footprint.
            </p>
            <Link to="/EcoScore">
              <button className="bg-green-500 font-semibold px-3 text-sm md:text-base p-1 md:p-2 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700">
                Calculate
              </button>
            </Link>
          </div>
        </div>

        <div className="md:flex bg-gray-200 dark:bg-green-900 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-black md:border-none ">
          <div className="flex-1 grid place-content-center md:hidden">
            <img src="/recycle_item.png" className="h-36 md:h-72 rounded-3xl" />
          </div>
          <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-2">
            <h1 className="text-green-800 font-bold text-3xl dark:text-white dark:md:text-[#7cd136]">
              <span className="md:block">🍃</span>Recycle item SearchBar
            </h1>
            <h3 className="text-black md:text-xl font-semibold dark:text-gray-100">
              Easy-to-use calculator estimates your carbon footprint
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
              Recycle Item Search Bar simplifies recycling. Simply enter the
              item's name, and the platform will provide comprehensive
              information on its material composition, recyclability, and proper
              disposal methods. Additionally, you'll find local recycling
              guidelines to ensure responsible waste management.
            </p>
            <Link to="/ItemFinder">
              <button className="bg-green-500 font-semibold text-sm md:text-base  p-2 md:px-6 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700">
                Find
              </button>
            </Link>
          </div>
          <div className="flex-1 md:grid place-content-center hidden">
            <img src="/recycle_item.png" className="h-36 md:h-72 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* ///////////////////////////Quiz////////////////////////// */}

      <Quiz />
      <div className="md:flex bg-gray-200 dark:bg-green-900 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-black md:border-none ">
        <div className="flex-1 grid place-content-center md:hidden">
          <img src="/newsLetter.png" className="h-36 md:h-72 rounded-3xl" />
        </div>
        <div className="flex-1 md:grid place-content-center hidden">
          <img src="/newsLetter.png" className="h-36 md:h-72 rounded-3xl" />
        </div>
        <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-2">
          <h1 className="text-green-800 font-bold text-3xl dark:text-white dark:md:text-[#7cd136]">
            <span className="md:block">📧</span>Subscribe to our News Letter
          </h1>
          <h3 className="text-gray-500 md:text-xl font-semibold dark:text-gray-100">
            subscribe to our newsletter and stay updated
          </h3>

          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 relative top-[11px] left-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="text"
              placeholder="Your Email"
              className="pl-[60px] p-[20px] border-2 border-gray-500 h-[40px] rounded w-full relative bottom-[22px] bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-green-500 font-semibold text-sm md:text-base  p-2 md:px-6 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700"
              onClick={(e) => {
                sendEmail(email);
                handleClick();
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        {show && (
          <div className="fixed bottom-4 right-4 p-3 bg-green-700 text-white rounded-lg shadow-lg transition-opacity duration-500 opacity-100 font-medium">
            {message}
          </div>
        )}
      </div>

      {/* ///////////////////////Features 2//////////////////////////// */}
      <div className="md:px-16 flex flex-col px-8 gap-16 mb-11 dark:bg-black">
        <div className="md:flex bg-gray-200 dark:bg-green-900 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-black md:border-none ">
          <div className="flex-1 grid place-content-center">
            <img src="/Ecosell.png" className="h-36 md:h-72 rounded-3xl my-3" />
          </div>
          <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-2">
            <h1 className="text-green-800 font-bold text-3xl dark:text-white dark:md:text-[#7cd136]">
              <span className="md:block">🍁</span>EcoStore
            </h1>
            <h3 className="text-black md:text-xl font-semibold dark:text-gray-100">
              Reduce, Reuse, Rehome: Material Exchange Store
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
              Platform to connect users for exchanging unwanted materials Reduce
              waste by giving pre-loved items a new purpose Users post item
              details and connect with interested parties.We fosters a
              community-driven approach to waste reduction. Users can list
              unwanted items, providing details and descriptions.
            </p>
            <Link to="/EcoSell">
              <button className="bg-green-500 font-semibold text-sm md:text-base p-1 md:p-2 md:px-6 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700">
                Check
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ////////////////////Faqs///////////////// */}
      <Faqs />
    </div>
  );
}

export default Home;
