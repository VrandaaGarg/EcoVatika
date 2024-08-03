import React from "react";
import { Link } from "react-router-dom";
import Quiz from "../../Pages/Quiz";

function Home() {
  return (
    <div className=" ">
      {/* ///////////////Landing page///////////////////// */}
      <div className="h-lvh relative">
        <div className="w-full h-[85vh] grid place-content-center relative mb-5 py-10">
          <img
            src="/bg.jpg"
            alt="Background"
            className="object-cover w-[80vw] h-[75vh] rounded-3xl"
          />
          <div className="">
            <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-6xl font-bold">
              EcoVatika
            </h1>
          </div>
        </div>
      </div>

      {/* ///////////////////About us///////////////////////// */}
      <div className="h-[90vh] justify-center text-center grid placeholder-shown: place-content-center">
        <div className="w-[50vw] text-left flex flex-col place-content-center gap-2 md:gap-12">
          <div className="grid place-content-center gap-2">
            <h1 className="text-sm md:text-5xl font-bold text-[#191A23] text-center">
              About Us
            </h1>
            <div className="h-[3px] w-28 md:h-[6px] md:w-64 bg-[#78b829] rounded-md"></div>
          </div>
          <div className="text-[10px] md:text-2xl text-[#8A868C] flex flex-col gap-3">
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
        </div>
      </div>

      {/* /////////////////Features/////////////////////////// */}
      <div className="px-16 flex flex-col gap-16 mb-11">
        <div className="flex ">
          <div className="flex-1 grid place-content-center">
            <img src="/EcoScore.png" className="h-72 rounded-3xl" />
          </div>
          <div className="flex-1 grid place-content-center px-16 gap-2">
            <h1 className="text-green-800 font-bold text-3xl">
              <span className="block">🍂</span>EcoScore
            </h1>
            <h3 className="text-black text-xl font-semibold">
              Easy-to-use calculator estimates your carbon footprint
            </h3>
            <p className="text-gray-600">
              It offers a straightforward way to understand your impact on the
              environment. By entering details about your travel habits, energy
              consumption, and waste generation, you can gain valuable insight.
              This awareness empowers you to make informed choices and reduce
              your carbon footprint.
            </p>
            <Link to="/EcoScore">
              <button className="bg-green-500 font-semibold px-3 p-2 border-black border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700">
                Calculate
              </button>
            </Link>
          </div>
        </div>

        <div className="flex ">
          <div className="flex-1 grid place-content-center px-28 gap-2">
            <h1 className="text-green-800 font-bold text-3xl">
              <span className="block">🍃</span>Recycle item SearchBar
            </h1>
            <h3 className="text-black text-xl font-semibold">
              Recycle Right: Make Every Item Count
            </h3>
            <p className="text-gray-600">
              Recycle Item Search Bar simplifies recycling. Simply enter the
              item's name, and the platform will provide comprehensive
              information on its material composition, recyclability, and proper
              disposal methods. Additionally, you'll find local recycling
              guidelines to ensure responsible waste management.
            </p>
            <Link to="/ItemFinder">
              <button className="bg-green-500 font-semibold px-8 p-2 border-black border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-green-700">
                Find
              </button>
            </Link>
          </div>
          <div className="flex-1 grid place-content-center">
            <img src="/recycle_item.png" className="h-72" />
          </div>
        </div>
      </div>

      {/* ///////////////////////////Quiz////////////////////////// */}

      <Quiz />
    </div>
  );
}

export default Home;
