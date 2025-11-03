import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signInUser, setLoading, signInWithGoogle } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign-In Success",
          text: "Welcome back! You’ve signed in successfully.",
          showConfirmButton: true,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
        reset();
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Sign-In Failed",
          text: "Invalid credentials. Please check your email and password.",
          showConfirmButton: true,
          timer: 1500,
        });
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(async (result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful!",
          text: "Login successful. Let's get started!",
          showConfirmButton: true,
          timer: 1500,
        });

        const userData = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo: result?.user?.photoURL,
        };

        const userRes = await axios.post(
          "https://app-orbit-server-gamma.vercel.app/userInfo",
          userData
        );

        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="px-2">
        <div class="mt-7 w-full max-w-[600px] md:w-[600px] mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don’t have an account?
              <Link
                to={"/signup"}
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={handleGoogleSignUp}
              type="button"
              className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   dark:text-black "
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
              Or
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email address
                  </label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className={`py-2.5 sm:py-3 px-4 block w-full border rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-gray-200 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      className={`py-2.5 sm:py-3 px-4 block w-full border rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 border-gray-200 ${
                        errors.password ? "border-red-500" : ""
                      } pr-10`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
                          message:
                            "Password must include at least one lowercase letter, one uppercase letter, and one special character",
                        },
                      })}
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setShow(!show)}
                      aria-label={show ? "Hide password" : "Show password"}
                    >
                      {show ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </span>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
