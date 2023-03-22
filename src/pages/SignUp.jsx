import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
import { RiUserSmileFill } from "react-icons/ri";
import SingleLine from "./components/SingleLine";
import PasswordBar from "./components/PasswordBar";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/authSlice";
import Heading from "./components/Heading";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const registerHandle = () => {
    console.table(name, email, password);
    dispatch(signUpUser({ name, email, password }));
  };

  return (
    <div className="flex items-center justify-center mt-20 text-center">
      <div className="">
        <Heading
          title="Getting Started"
          subtitle="Create an account to continue"
        />
        <div className="flex justify-center gap-6 mt-4">
          <div className="btn">
            <FcGoogle className="text-base" />
            <span>Sign Up with Google</span>
          </div>
          <div className="btn">
            <FaApple className="text-primary-icon text-xl -mt-[4px]" />
            <span>Sign Up with Apple ID</span>
          </div>
        </div>
        <SingleLine />
        <div className="">
          <FiAtSign className="icon" />
          <input
            type="text"
            placeholder="Your Email"
            className="field"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="">
          <RiUserSmileFill className="icon" />
          <input
            type="text"
            placeholder="Your Name"
            className="field"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div>
          <GiPadlock className="icon" />
          <input
            type="password"
            placeholder="Create Password"
            className="field"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <BsEyeFill className="text-gray-300 relative left-[20rem] top-[-2.5rem]"/>
        </div>
        <PasswordBar />
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-primary bg-primary border-primary rounded focus:ring-blue-500 ml-1"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-xs text-primary"
          >
            I agree to the Terms & Conditions
          </label>
        </div>
        <button
          className="bg-secondary text-white text-xs w-[22rem] h-[2.5rem] rounded-lg"
          onClick={registerHandle}
        >
          Sign Up
        </button>
        <div className="text-xs mt-4 text-primary">
          Already Have an account?{" "}
          <span className="text-blue-600 font-semibold">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
