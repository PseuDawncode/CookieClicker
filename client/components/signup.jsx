//To create a new account
import React from "react";
import { Link } from "react-router-dom";
const signup = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <form action="">
            <label htmlFor="username" className="block mt-2">
              Username
            </label>
            <input
              required
              autoFocus
              type="text"
              name="username"
              id="username"
              placeholder="Type your email"
              className="block w-full border-b-2 outline-none mt-2"
            />
            <label htmlFor="passsword" className="block mt-4">
              Password
            </label>
            <input
              required
              type="text"
              name="passsword"
              id="passsword"
              className="block w-full border-b-2 outline-none  mt-2"
            />

            <ul className="list-disc text-xs mt-3">
              <li>Should contain atleast 8 characters</li>
              <li>
                Should contain atleast one uppercase,number and special
                character
              </li>
              <li>Should not be your username or email</li>
            </ul>

            <label htmlFor="confirmpasssword" className="block mt-4">
              Confirm Password
            </label>
            <input
              required
              type="text"
              name="confirmpasssword"
              id="confirmpasssword"
              className="block w-full border-b-2 outline-none  mt-2"
            />

            <button
              type="submit"
              className="mt-6 p-2 border-2 w-full rounded-2xl bg-white text-balance hover:text-white hover:bg-black"
            >
              Register
            </button>
            <p className="text-sm mt-3">
              Already have an account? Please{" "}
              <Link className="text-base  hover:border-b-2" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
