//To create a new account
import React, { useState } from "react";
import { Link } from "react-router-dom";
const signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  // To store username and password in localstorage
  function doRegistration() {
    localStorage.setItem("StoredUsername", username);
    localStorage.setItem("StoredPassword", password);
    setIsRegistered(true);
    console.log("register success");
  }

  // To validate the password and username
  const validatePassword = (passsword, username) => {
    const newErrors = [];
    // Check for minimum length
    if (passsword.length < 8) {
      newErrors.push("Password must be at least 8 characters long.");
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(passsword)) {
      newErrors.push("Password must contain at least one uppercase letter.");
    }

    // Check for at least one number
    if (!/[0-9]/.test(passsword)) {
      newErrors.push("Password must contain at least one number.");
    }

    // Check for at least one special character (you can customize this regex)
    if (!/[^a-zA-Z0-9\s]/.test(passsword)) {
      newErrors.push(
        "Password must contain at least one special character (e.g., !@#$%^&*)."
      );
    }

    // Check if password is not the username (case-insensitive)
    if (passsword.toLowerCase() === username.toLowerCase() && username) {
      newErrors.push("Password cannot be the same as your username.");
    }
    setErrorMessage(newErrors);
    return newErrors.length === 0;
  };

  function handleRegister(event) {
    event.preventDefault();
    setErrorMessage([]);
    if (password !== confirmPassword) {
      setErrorMessage([
        "Password and confirm passwords are not the same, Try again",
      ]);
      setPassword("");
      setConfirmPassword("");
    } else {
      if (validatePassword(password, username)) {
        doRegistration();
      } else {
        setPassword("");
        setConfirmPassword("");
      }
    }
  }
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          {errorMessage.length > 0 && (
            <div className="text-sm text-red-500">
              {errorMessage.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
          <form onSubmit={handleRegister}>
            <label htmlFor="username" className="block mt-2">
              Username
            </label>
            <input
              required
              autoFocus
              type="email"
              name="username"
              id="username"
              placeholder="Type your email"
              className="block w-full border-b-2 outline-none mt-2"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="passsword" className="block mt-4">
              Password
            </label>
            <input
              required
              type="text"
              name="passsword"
              id="passsword"
              className="block w-full border-b-2 outline-none mt-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
