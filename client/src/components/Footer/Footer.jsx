import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="" className="flex">
              <img src="/logo.png" className="h-8 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                EcoVatika
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="flex flex-col gap-10">
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="https://github.com/VrandaaGarg/EcoVatika"
                      className="hover:underline "
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://discord.com/users/vivekgarg"
                      className="hover:underline"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Team
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link to="/team" className="hover:underline">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Pages
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/EcoScore" className="hover:underline">
                    EcoScore
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/ItemFinder" className="hover:underline">
                    Recycle Item SearchBar
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/EcoSell" className="hover:underline">
                    EcoStore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="" className="hover:underline">
              EcoVatika™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              to="https://github.com/VrandaaGarg/EcoVatika"
              className="text-gray-500 hover:text-gray-300 dark:hover:text-white ms-5"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns=""
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              to="mailto:ecovatika@gmail.com"
              className="text-gray-500 hover:text-gray-300 dark:hover:text-white ms-5 flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              <span className="sr-only">Mail</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
