import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import SingleLine from "./components/SingleLine";
const SignUp = () => {
  return (
    <div class="flex items-center justify-center my-32 text-center">
      <div className="">
        <h2 className="font-semibold text-lg mb-2">Getting Started</h2>
        <span className="text-primary text-sm">
          Create an account to continue
        </span>
        <div className="flex justify-center gap-10 mt-4">
          <div className="btn">
            <FcGoogle />
            <span>Sign Up with Google</span>
          </div>
          <div className="btn">
            <FaApple className="text-primary-icon" />
            <span>Sign Up with Apple ID</span>
          </div>
        </div>
          <SingleLine/>
        <div className="">
          <input type="text" placeholder="Your Email" />
        </div>
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="text" placeholder="Create Password" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
