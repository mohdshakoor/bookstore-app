import React from "react";
import Login from "../components/Login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          id="my_modal_3"
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
        >
          <div className="relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="text-center">
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              {/* Heading */}
              <h3 className="font-bold text-2xl mb-6">Signup</h3>

              {/* Username feild */}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border bg-white rounded-md outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400"
                  {...register("name", { required: true })}
                />
                 {errors.name && <p className="text-red-500 text-sm">this feild is required</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  className="w-full  px-4 py-2 border bg-white rounded-md outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400"
                  {...register("email", { required: true })}
                />
                 {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border bg-white rounded-md outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400"
                  {...register("password", { required: true })}
                />
                 {errors.password && <p className="text-red-500 text-sm">password is required</p>}
              </div>

              {/* Login Button */}
              <div className="mt-6">
                <button className="w-full bg-pink-400 text-white font-semibold rounded-md px-4 py-2 hover:bg-pink-500 transition duration-200">
                  Signup
                </button>
                <p>
                  Have Account?{""}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()} 
                  >
                    Login
                  </button>{""}
                  <Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
