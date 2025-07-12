import React, { useState } from "react";
import { format, addDays } from "date-fns";
import EventModal from "./EventModal";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];


const Calendar = () => {


  const [showModal,setShowModal] = useState(false);
  const HandleShowModal = () => {
    setShowModal(true)
  
  }
  return (
    <>
      <div className="shadow px-12 py-3 mx-12 bg-gray-200 rounded-t-xl border-b border-gray-400 grid grid-cols-7">
        {WEEK_DAYS.map((item) => (
          <div
            key={item}
            className="text-gray-700 text-center font-semibold text-xs py-2 md:text-sm "
          >
            <span className="md:inline hidden">{item}</span>
            <span className="md:hidden inline">{item[0]}</span>
          </div>
        ))}
      </div>
      <div className="shadow px-12 py-3 mx-12 mb-8  bg-gray-200 rounded-b-xl grid grid-cols-7 text-center gap-5">
        {numbers.map((item) => (
          <div onClick={() => HandleShowModal()} className="bg-[#c0c0c0] rounded h-20 flex justify-end px-3 py-1 text-xl">{item}</div>
        ))}
      </div>

      {showModal && (
        <EventModal 
        setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default Calendar;
