import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import EcoScore from "./components/EcoScore/EcoScore.jsx";
import RecycleItemFinder from "./components/RecycleItemFinder/RecycleItemFinder.jsx";
import Team from "./Pages/Team.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="EcoScore" element={<EcoScore />} />
      <Route path="ItemFinder" element={<RecycleItemFinder />} />
      <Route path="team" element={<Team />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
