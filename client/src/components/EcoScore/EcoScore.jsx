import React, { useState } from "react";
import axios from "axios";
import { Zoom } from "react-awesome-reveal";

const EcoScore = () => {
  const [activeTab, setActiveTab] = useState("AirQuality");
  const [airQualityData, setAirQualityData] = useState({
    o3: "",
    no2: "",
    pm: "",
  });
  const [carbonFootprintData, setCarbonFootprintData] = useState({
    consumption: "",
    result: null,
    error: null,
  });
  const [fuelData, setFuelData] = useState({
    litres: "",
    result: null,
    error: null,
  });
  const [travelData, setTravelData] = useState({
    distance: "",
    type: "PublicTransit",
    type2: "Taxi",
    result: null,
    error: null,
  });
  const [treeData, setTreeData] = useState({
    weight: "",
    result: null,
    error: null,
  });
  const [carTravelData, setCarTravelData] = useState({
    distance: "",
    result: null,
    error: null,
  });

  const handleAirQualitySubmit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/AirQualityHealthIndex";
    const options = {
      method: "GET",
      url: url,
      params: {
        o3: airQualityData.o3,
        no2: airQualityData.no2,
        pm: airQualityData.pm,
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("API Response:", response.data); // Log the entire response

      setAirQualityData((prev) => ({
        ...prev,
        result: response.data.airQualityHealthIndex,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setAirQualityData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleCarbonFootprintSubmit = async (event) => {
    event.preventDefault();
    const url =
      "https://carbonfootprint1.p.rapidapi.com/CleanHydroToCarbonFootprint";
    const options = {
      method: "GET",
      url: url,
      params: {
        energy: "Solar",
        consumption: parseFloat(carbonFootprintData.consumption),
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setCarbonFootprintData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setCarbonFootprintData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleFuelToCO2Submit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/FuelToCO2e";
    const options = {
      method: "GET",
      url: url,
      params: {
        type: "Petrol",
        litres: parseFloat(fuelData.litres),
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setFuelData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setFuelData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleTreeEquivalentSubmit = async (event) => {
    event.preventDefault();
    const url = "https://carbonfootprint1.p.rapidapi.com/TreeEquivalent";
    const options = {
      method: "GET",
      url: url,
      params: {
        weight: parseFloat(treeData.weight),
        unit: "kg",
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setTreeData((prev) => ({
        ...prev,
        result: response.data.numberOfTrees,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setTreeData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  const handleCarTravelSubmit = async (event) => {
    event.preventDefault();
    const url =
      "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel";
    const options = {
      method: "GET",
      url: url,
      params: {
        distance: parseFloat(carTravelData.distance),
        vehicle: "SmallDieselCar",
      },
      headers: {
        "x-rapidapi-key": "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setCarTravelData((prev) => ({
        ...prev,
        result: response.data.carbonEquivalent,
        error: null,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
      setCarTravelData((prev) => ({
        ...prev,
        error: "Error fetching data. Please try again.",
        result: null,
      }));
    }
  };

  return (
    <div className="pt-20 pb-24 dark:bg-black">
      <div className="grid place-content-center gap-3">
        <Zoom triggerOnce>
          <h1 className="text-green-600 text-center font-bold text-xl md:text-4xl mt-5 dark:text-[#7cd136]">
            Carbon Footprint Calculator
          </h1>
        </Zoom>
        <div className="flex justify-center">
          <Zoom triggerOnce>
            <div className="h-2 w-[20vw] md:w-[50vh] bg-green-700 rounded-xl"></div>
          </Zoom>
        </div>
      </div>
      <Zoom triggerOnce>
        <h3 className="text-center font-medium text-gray-500  px-5 text-sm md:text-xl mt-5 mb-9 dark:mb-16 max-w-5xl mx-auto dark:text-gray-300">
          The Carbon Footprint and Air Quality Calculator is a web application
          designed to provide users with insights into their environmental
          impact and air quality health index based on various activities and
          metrics. The application calculates the carbon footprint for different
          modes of transport, fuel consumption, tree equivalents, car travel
          distances, and solar energy consumption. Additionally, it assesses the
          air quality health index based on pollutant levels. The aim is to
          promote sustainability and awareness by offering concrete data on
          carbon emissions and air quality.
        </h3>
      </Zoom>
      <Zoom triggerOnce>
        <div className="flex justify-center ">
          <div className="mx-4 md:w-2/3 p-6 px-4 md:px-8 dark:bg-gray-800 rounded-2xl">
            <div className="flex flex-wrap justify-around mb-4 gap-4">
              <button
                className={`bg-green-600 font-bold text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded ${
                  activeTab === "AirQuality"
                    ? "bg-green-800 dark:bg-[#7cd136] text-white dark:text-black"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("AirQuality")}
              >
                Air Quality
              </button>
              <button
                className={`bg-green-600 font-bold text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded ${
                  activeTab === "CarbonFootprint"
                    ? "bg-green-800 dark:bg-[#7cd136] text-white dark:text-black"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("CarbonFootprint")}
              >
                Carbon Footprint
              </button>
              <button
                className={`bg-green-600 font-bold text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded ${
                  activeTab === "FuelToCO2"
                    ? "bg-green-800 dark:bg-[#7cd136] text-white dark:text-black"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("FuelToCO2")}
              >
                Fuel to CO2
              </button>
              <button
                className={`bg-green-600 font-bold text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded ${
                  activeTab === "TreeEquivalent"
                    ? "bg-green-800 dark:bg-[#7cd136] text-white dark:text-black"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("TreeEquivalent")}
              >
                Tree Equivalent
              </button>
              <button
                className={`bg-green-600 font-bold text-sm md:text-base py-1 md:py-2 px-2 md:px-4 rounded ${
                  activeTab === "CarTravel"
                    ? "bg-green-800 dark:bg-[#7cd136] text-white dark:text-black"
                    : "text-white"
                }`}
                onClick={() => setActiveTab("CarTravel")}
              >
                Car Travel
              </button>
            </div>
            {activeTab === "AirQuality" && (
              <div className="mt-4 p-6 border rounded shadow">
                <form onSubmit={handleAirQualitySubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Ozone (O3):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 10ppm"
                      className="border rounded p-1 md:p-2 w-full"
                      value={airQualityData.o3}
                      onChange={(e) =>
                        setAirQualityData({
                          ...airQualityData,
                          o3: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Nitrogen Dioxide (NO2):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 10ppm"
                      className="border rounded p-1 md:p-2 w-full"
                      value={airQualityData.no2}
                      onChange={(e) =>
                        setAirQualityData({
                          ...airQualityData,
                          no2: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Particulate Matter (PM):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 10ppm"
                      className="border rounded p-1 md:p-2 w-full"
                      value={airQualityData.pm}
                      onChange={(e) =>
                        setAirQualityData({
                          ...airQualityData,
                          pm: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded dark:bg-[#7cd136] dark:text-black"
                    >
                      Calculate
                    </button>
                  </div>
                  {airQualityData.result && (
                    <p className="mt-4 text-green-600 font-bold">
                      Air Quality Health Index: {airQualityData.result}
                    </p>
                  )}
                  {airQualityData.error && (
                    <p className="mt-4 text-red-600">{airQualityData.error}</p>
                  )}
                </form>
              </div>
            )}
            {activeTab === "CarbonFootprint" && (
              <div className="mt-4 p-6 border rounded shadow">
                <form onSubmit={handleCarbonFootprintSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Solar Energy Consumption (kWh):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 500kWh"
                      className="border rounded p-1 md:p-2 w-full"
                      value={carbonFootprintData.consumption}
                      onChange={(e) =>
                        setCarbonFootprintData({
                          ...carbonFootprintData,
                          consumption: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded dark:bg-[#7cd136] dark:text-black"
                    >
                      Calculate
                    </button>
                  </div>
                  {carbonFootprintData.result && (
                    <p className="mt-4 text-green-600 font-bold">
                      Carbon Equivalent: {carbonFootprintData.result}
                    </p>
                  )}
                  {carbonFootprintData.error && (
                    <p className="mt-4 text-red-600">
                      {carbonFootprintData.error}
                    </p>
                  )}
                </form>
              </div>
            )}
            {activeTab === "FuelToCO2" && (
              <div className="mt-4 p-6 border rounded shadow">
                <form onSubmit={handleFuelToCO2Submit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Fuel Consumption (litres):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: Diesel 10L"
                      className="border rounded p-1 md:p-2 w-full"
                      value={fuelData.litres}
                      onChange={(e) =>
                        setFuelData({ ...fuelData, litres: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded dark:bg-[#7cd136] dark:text-black"
                    >
                      Calculate
                    </button>
                  </div>
                  {fuelData.result && (
                    <p className="mt-4 text-green-600 font-bold">
                      Carbon Equivalent: {fuelData.result}
                    </p>
                  )}
                  {fuelData.error && (
                    <p className="mt-4 text-red-600">{fuelData.error}</p>
                  )}
                </form>
              </div>
            )}
            {activeTab === "TreeEquivalent" && (
              <div className="mt-4 p-6 border rounded shadow">
                <form onSubmit={handleTreeEquivalentSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Weight (kg):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 200kg"
                      className="border rounded p-1 md:p-2 w-full"
                      value={treeData.weight}
                      onChange={(e) =>
                        setTreeData({ ...treeData, weight: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded dark:bg-[#7cd136] dark:text-black"
                    >
                      Calculate
                    </button>
                  </div>
                  {treeData.result && (
                    <p className="mt-4 text-green-600 font-bold">
                      Number of Trees: {treeData.result}
                    </p>
                  )}
                  {treeData.error && (
                    <p className="mt-4 text-red-600">{treeData.error}</p>
                  )}
                </form>
              </div>
            )}
            {activeTab === "CarTravel" && (
              <div className="mt-4 p-6 border rounded shadow">
                <form onSubmit={handleCarTravelSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-white text-base md:text-xl mb-2">
                      Distance (km):
                    </label>
                    <input
                      type="text"
                      placeholder="Example: 85km"
                      className="border rounded p-1 md:p-2 w-full"
                      value={carTravelData.distance}
                      onChange={(e) =>
                        setCarTravelData({
                          ...carTravelData,
                          distance: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 dark:bg-[#7cd136] dark:text-black text-white py-2 px-4 rounded"
                    >
                      Calculate
                    </button>
                  </div>
                  {carTravelData.result && (
                    <p className="mt-4 text-green-600 font-bold">
                      Carbon Equivalent: {carTravelData.result}
                    </p>
                  )}
                  {carTravelData.error && (
                    <p className="mt-4 text-red-600">{carTravelData.error}</p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default EcoScore;
