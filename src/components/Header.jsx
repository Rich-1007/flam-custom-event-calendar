import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center pt-7 pb-2 px-14">
        <span className="text-5xl font-bold">Custom Event Calendar</span>
        <div className="flex text-xl  w-full items-center justify-between py-3 px-10">
          <div className="flex gap-3">
            
            <button className="bg-blue-900 text-white px-3 py-2.5 rounded-md">Previous</button>
            <button className="bg-blue-900 text-white px-3 py-2.5 rounded-md">Next</button>
          </div>
          <div className="flex gap-3 text-3xl">
            <span>May</span>
            <span>2025</span>
          </div>
          <button className="bg-blue-900 text-white px-3 py-2.5 rounded-md">Add Event</button>
        </div>
      </div>
    </>
  );
};

export default Header;
