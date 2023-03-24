import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";

const Search = () => {
  return (
    <div className="">
      <form className=" mt-4 ml-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-primary-box text-xs text-primary-text rounded-lg block sm:w-60 md:w-96 pl-4 p-2.5 py-3"
            placeholder="Search"
            required=""
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <BsSearch className="] text-primary-text" />
          </button>
        </div>
      </form>
      <div className="absolute right-20 top-6 flex gap-6">
      <BsBell className="text-primary-text mt-2"/>
      <img src="/photo.png" alt="" width={35}/>
      </div>
    </div>
  );
};

export default Search;
