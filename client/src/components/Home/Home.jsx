import React from "react";
import { Link } from "react-router-dom";
import Quiz from "../../Pages/Quiz";
import Faqs from "../../Pages/Faqs";

function Home() {
  return (
    <div className=" dark:bg-black bg-white">
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

      {/* ////////////////////Faqs///////////////// */}
      <Faqs />
    </div>
  );
}

export default Home;
