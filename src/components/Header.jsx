import React, { useState } from "react";
import EventListModal from "./EventListModal";

const Header = () => {
  const [ShowEventListModal, setShowEventListModal] = useState("");
  return (
    <>
      <div className="bg-white flex flex-col w-full justify-center items-center pt-2 pb-2 px-14">
        <span className="text-5xl font-bold">Custom Event Calendar</span>
        <div className="flex text-xl space-y-6 w-full items-center justify-between py-3 px-10">
          <div className="flex gap-3">
            
            <button className="bg-blue-900 text-white px-3 py-2.5 rounded-md">Previous</button>
            <button className="bg-blue-900 text-white px-3 py-2.5 rounded-md">Next</button>
          </div>
          <div className="flex gap-3 text-3xl">
            <span>May</span>
            <span>2025</span>
          </div>
          <button onClick={() => setShowEventListModal(true)} className="bg-blue-900 text-white px-3 py-2.5 rounded-md">All Event</button>
        </div>
        {ShowEventListModal && (

          <EventListModal  setShowEventListModal={setShowEventListModal}/>
        )}


      </div>
    </>
  );
};

export default Header;
