import React, { useEffect, useState } from "react";
import { format, addDays } from "date-fns";
import EventModal from "./EventModal";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";

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
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.showModalReducer.isShow);

  const events = useSelector((state) => state.AllEventsReducer.events);
  if (events.length > 1) {
    console.log(events);
  }

  const [dayForEvent, setDayForEvent] = useState("");

  const HandleShowModal = (item) => {
    // setShowModal(true)
    dispatch({ type: "SHOW_MODAL" });
    setDayForEvent(item);
  };

  // const events = useSelector((state) => state.AllEventsReducer.events);
  
  //   const dispatch = useDispatch();


  useEffect(() => {
    // dispatch({ type: "FETCH_EVENTS" });
    console.log(events);
  }, []);

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
          <>
            <div
              onClick={() => HandleShowModal(item)}
              className="bg-[#c0c0c0] rounded h-20 flex justify-end px-3 py-1 text-xl hover:cursor-pointer"
            >
              <div className=" h-full w-full flex flex-col justify-between">
                <div className=" flex justify-end">{item}</div>
                <div className="">
                  <EventCard day={item}/>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {openModal && <EventModal dayForEvent={dayForEvent} />}
    </>
  );
};

export default Calendar;
