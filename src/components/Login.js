import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleOnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (errorMessage) return;

    if (!isSignInForm) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute " src={BACKGROUND_URL} alt="Background-img" />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : " Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Your Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your Password "
          className="p-4 my-4 w-full bg-gray-700"
          // autocomplete={isSignInForm ? "current-password" : "new-password"}
        />
        <p className="text-red-700 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-700 rounded-lg"
          onClick={handleOnClick}
        >
          {isSignInForm ? "Sign In" : " Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix ? Sign Up Now"
            : " Already Registered ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
