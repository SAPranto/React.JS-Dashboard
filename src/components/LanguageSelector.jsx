import React from "react";

const LanguageSelector = () => {
  return (
    <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-gray-400 bg-primary-box hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-xs px-3 py-2.5 text-center flex"
        type="button"
      >
        English (UK)
        <svg
          className="w-4 h-4 ml-6"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default LanguageSelector;
