import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function About() {
  return (
    <div className="pt-20 dark:bg-black px-9 md:px-20 pb-16 md:pb-24">
      <Zoom>
        <h1 className=" text-green-700 dark:text-[#7cd136] text-3xl md:text-5xl text-center font-bold md:mb-8">
          About Us
        </h1>
      </Zoom>
      <div className="md:flex ">
        <Fade>
          <div className="text-center md:text-left grid place-content-center gap-4 mt-8 md:w-[65vw]">
            <h2 className="text-green-700 dark:text-[#64a032] text-xl md:text-3xl font-semibold">
              Welcome to EcoVatika !!
            </h2>
            <p className="text-gray-500 dark:text-gray-400  text-base md:text-2xl">
              At EcoVatika, we are dedicated to fostering a sustainable and
              eco-friendly lifestyle. Our mission is to empower you with the
              knowledge and tools necessary to make environmentally conscious
              decisions and contribute to a greener planet. Discover our unique
              features designed to help you reduce your carbon footprint and
              embrace sustainability.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="mt-5 md:mt-0 md:w-[20vw] grid place-content-center">
            <img src="/image2.png" className="h-44 md:h-64" />
          </div>
        </Fade>
      </div>
      <div className="grid place-content-center gap-4 my-6">
        <Fade>
          <h1 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-2xl md:text-4xl font-semibold">
            Our Story
          </h1>
        </Fade>
        <Fade>
          <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
            EcoVatika was born out of a deep concern for the environment and a
            desire to create a platform that could make a real difference. We
            saw the urgent need for more accessible and actionable information
            on sustainability, recycling, and reducing carbon footprints. With
            the rapid pace of climate change and environmental degradation, we
            felt compelled to take action and provide a solution that empowers
            individuals and communities to live more sustainably.
          </p>
        </Fade>
        <br />
        <br />
        <Fade>
          <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
            Our journey began with a simple idea: to create a space where people
            could easily access information, tools, and resources to make
            eco-friendly choices. We wanted to build a community that supports
            and inspires each other to adopt sustainable practices, reduce
            waste, and protect our planet for future generations. EcoVatika is
            the realization of that vision, a hub where sustainability meets
            practicality, and where every small action contributes to a larger
            impact.
          </p>
        </Fade>
      </div>
      <div className="">
        <Fade>
          <h1 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-3xl md:text-5xl font-bold md:my-6 mt-10">
            Our Features
          </h1>
        </Fade>
        <div className="grid place-content-center">
          <div className="grid place-content-center gap-4 my-6">
            <Fade>
              <h2 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-2xl md:text-4xl font-semibold">
                EcoScore
              </h2>
            </Fade>
            <Fade>
              <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
                EcoScore is our cutting-edge carbon footprint calculator that
                allows you to estimate your carbon equivalents. By inputting
                data such as O3, NO2, particulate matter, solar energy
                consumption, fuel consumption (L), and car travel (km), you can
                determine your environmental impact. EcoScore also provides
                information on the number of trees needed to offset your carbon
                emissions, helping you understand and mitigate your carbon
                footprint.
              </p>
            </Fade>
          </div>
          <Fade>
            <div className="grid place-content-center">
              <img src="/image3.png" className="h-36 md:h-64 " />
            </div>
          </Fade>
        </div>

        <div className="grid place-content-center gap-4 my-6">
          <Fade>
            <h2 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-2xl md:text-4xl font-semibold">
              RecycleItem SearchBar
            </h2>
          </Fade>
          <Fade>
            <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
              Our RecycleItem SearchBar is a comprehensive tool that provides
              detailed information about the recyclability of various items.
              Search for an item to learn about its material composition,
              recyclability, recycling instructions, type of material, local
              recycling guidelines, environmental impact, alternative disposal
              options, and upcycling and reuse ideas. It’s your ultimate guide
              to responsible disposal and recycling, helping you make informed
              choices for a cleaner environment.
            </p>
          </Fade>
        </div>

        <div className="grid place-content-center gap-4 my-6">
          <Fade>
            <h2 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-2xl md:text-4xl font-semibold">
              Sustainable Quiz
            </h2>
          </Fade>
          <Fade>
            <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
              Test your knowledge on sustainability with our engaging
              Sustainable Quiz. Answer 10 questions to see how much you know
              about eco-friendly practices and discover new ways to live a more
              sustainable life. Your results will provide insights and tips to
              further your understanding and commitment to sustainability,
              making learning about the environment both fun and informative.
            </p>
          </Fade>
        </div>

        <div className="grid place-content-center gap-4 my-6">
          <Fade>
            <h2 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-2xl md:text-4xl font-semibold">
              EcoStore
            </h2>
          </Fade>
          <Fade>
            <p className="text-gray-500 text-center md:text-left dark:text-gray-400  text-base md:text-2xl">
              EcoStore is a unique marketplace where you can buy and sell
              pre-loved items that still have potential use. List items that you
              no longer need, providing details to attract potential buyers, or
              browse through listings to find items that can have a second life
              in your home. Transactions are facilitated seamlessly, with buyers
              directed to sellers' WhatsApp for quick and easy communication,
              making it simple to give products a new life and reduce waste.
            </p>
          </Fade>
        </div>
      </div>
      <div className="md:flex my-10 mt-16">
        <div className="grid place-content-center gap-4 my-6 md:w-[60vw]">
          <Fade>
            <h1 className="text-green-700 text-center md:text-left dark:text-[#64a032] text-3xl md:text-4xl font-semibold">
              Join Us in Our Journey
            </h1>
          </Fade>
          <Fade>
            <p className="text-gray-500 text-center md:text-left dark:text-gray-400 text-base md:text-2xl">
              At EcoVatika, we believe that small actions can lead to
              significant changes. By making informed choices and contributing
              to a healthier planet, we can create a sustainable future
              together. Explore our features, learn, share, and take action with
              EcoVatika. Join us on our journey towards a more sustainable
              world, and together, we can make a difference.
            </p>
          </Fade>
        </div>
        <div className="grid place-content-center">
          <Fade>
            <img src="/image4.png" className="h-36 md:h-60" />
          </Fade>
        </div>
      </div>
      <div className="grid  gap-4 py-6 ">
        <div className="h-1 rounded-2xl w-full bg-[#54872a] dark:bg-[#36531f]"></div>
        <Fade>
          <p className="text-gray-500 dark:text-gray-400 text-center md:text-left  text-base md:text-2xl">
            Thank you for visiting EcoVatika. We look forward to supporting you
            in your sustainable living journey.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default About;
