import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import LoadingSpinners from "./../Components/LoadingSpinners";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const RootLayouts = () => {
  const { state } = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      mirror: true,
      offset: 100,
      delay: 50,
      anchorPlacement: "top-center",
      debounceDelay: 30,
      throttleDelay: 50,
      startEvent: "DOMContentLoaded",
      disableMutationObserver: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-Poppins">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="flex-1 pt-20 max-w-screen-2xl mx-auto">
        <div className="">
          <div className=" my-10">
            {state === "loading" ? <LoadingSpinners /> : <Outlet></Outlet>}
          </div>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
};

export default RootLayouts;
