import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import LoadingSpinners from "./LoadingSpinners";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import logo from "../assets/AppOrbit logo.png";

const Navbar = () => {
  const { loginUser, signOutUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinners></LoadingSpinners>;
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"home"} className={"hover:bg-indigo-700 hover:text-white"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"products"}
          className={"hover:bg-indigo-700 hover:text-white"}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"about"}
          className={"hover:bg-indigo-700 hover:text-white"}
        >
          About
        </NavLink>
      </li>

      {loginUser && (
        <>
          <li>
            <NavLink
              to={"pricing"}
              className={"hover:bg-indigo-700 hover:text-white"}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"features"}
              className={"hover:bg-indigo-700 hover:text-white"}
            >
              Features
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("login");
      })
      .catch(() => {
        Swal.fire({
          title: "Logout Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });
      });
  };

  return (
   <div className="navbar p-0 fixed top-0 left-0 right-0 z-50 shadow-md bg-white/30 backdrop-blur-md">

      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl p-0 flex items-center gap-2"
          >
            <img
              src={logo}
              alt="AppOrbit Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
            {/* <span className="hidden sm:inline text-base md:text-xl font-semibold">
              AppOrbit
            </span> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 border border-gray-200 rounded-full px-20 shadow-sm">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="dropdown dropdown-end">
            {loginUser && (
              <>
                <div
                  tabIndex={0}
                  role="button"
                  aria-haspopup="true"
                  className="flex items-center cursor-pointer"
                >
                  <button
                    className="flex w-12 h-12 my-anchor-element rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105"
                    data-tooltip-id="my-tooltip"
                    aria-label="User menu"
                  >
                    <img
                      className="object-cover rounded-full"
                      src={
                        loginUser?.photoURL ||
                        "https://img.icons8.com/?size=80&id=108639&format=png"
                      }
                      alt={loginUser?.displayName || "User avatar"}
                    />
                  </button>
                </div>
              </>
            )}

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-xl shadow-2xl w-60 mt-3 p-4 space-y-3 z-50 border border-gray-100"
              role="menu"
              aria-label="User dropdown menu"
            >
              <li className="text-center text-gray-800 font-semibold text-sm border-b pb-2">
                @{loginUser?.displayName || "User"}
              </li>

              <li>
                <NavLink
                  to="dashboard"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
                  role="menuitem"
                >
                  <FaUser size={16} /> Dashboard
                </NavLink>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  role="menuitem"
                  type="button"
                >
                  <FaSignOutAlt size={16} /> Logout
                </button>
              </li>
            </ul>
          </div>

          <div className="">
            {!loginUser && (
              <>
                <div className="space-x-2">
                  <NavLink
                    className={"btn hover:bg-blue-700 hover:text-white"}
                    to={"login"}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={"btn hover:bg-blue-700 hover:text-white"}
                    to={"signup"}
                  >
                    Register
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
