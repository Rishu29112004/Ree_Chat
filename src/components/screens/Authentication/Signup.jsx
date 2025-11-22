// src/components/screens/Authentication/Signup.jsx
import React, { useEffect, useState } from "react";
import Button from "../../custom/Button";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "./Validation/SignupSchema";

const Signup = ({ onLoginClick }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = (data) => {
    toast.success("Signup successful!")
    reset()
  }


  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="w-[320px] p-4 mt-2 font-mono border-2 border-gray-300 rounded-md bg-white"
    >
      <div className="flex items-center justify-center mb-4">
        <p className="text-2xl font-semibold">Sign Up</p>
      </div>

      {/* Username */}
      <div className="flex flex-col gap-1 mb-2">
        <label>Username</label>
        <input
          {...register("username")}
          placeholder="Enter username"
          type="text"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.username?.message}</p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 mb-2">
        <label>Email</label>
        <input
          {...register("email")}
          placeholder="Enter email"
          type="email"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 mb-3">
        <label>Password</label>
        <input
          {...register("password")}
          placeholder="Set password"
          type="password"
          className="border rounded-md border-gray-300 px-2 py-1"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      {/* Submit button */}
      <div className="mb-3">
        <Button type="submit" buttonName="Sign Up" className="w-full" />
      </div>

      {/* Switch to login */}
      <div className="text-center text-sm">
        <p>
          Already have an account?{" "}
          <span
            onClick={() => onLoginClick && onLoginClick()}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
