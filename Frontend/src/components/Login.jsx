import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </button>

            {/* Heading */}
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            {/* Password Field */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="block text-sm font-bold text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-400 text-black rounded-md px-3 py-1 hover:bg-pink-500">
                Login
              </button>
            </div>
          </form>

          {/* Signup link */}
          <p className="mt-4 text-center">
            Not registered?{" "}
            <Link className="underline text-blue-500 cursor-pointer" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
