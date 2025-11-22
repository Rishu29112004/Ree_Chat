// src/components/screens/Authentication/Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../custom/Button";
import toast from "react-hot-toast";
import {loginSchema} from "./Validation/LoginSchema"

const Login = ({ onSignupClick }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  

  // handle form submit
  const onSubmit = (data) => {
    toast.success("Login successful!");
    console.log("Login Data:", data);
    reset();
  };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[320px] p-4 mt-2 font-mono border-2 border-gray-300 rounded-md bg-white"
    >
      <div className="flex items-center justify-center mb-4">
        <p className="text-2xl font-semibold">Login</p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 mt-2">
        <label>Email</label>
        <input
          {...register("email")}
          type="text"
          placeholder="email"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 mt-2">
        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
      </div>

      {/* Submit button */}
      <div className="mt-3">
        <Button type="submit" buttonName="Submit" />
      </div>

      {/* Switch to Signup */}
      <div className="text-center text-sm mt-3">
        <p>
          Don’t have an account?{" "}
          <span
            onClick={() => onSignupClick && onSignupClick()}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
