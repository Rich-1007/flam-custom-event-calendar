import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EventListModal = ({ setShowEventListModal }) => {
  const events = useSelector((state) => state.AllEventsReducer.events);

//   const dispatch = useDispatch();
  console.log(events);

   
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold mb-4">All Events</h2>
          <h2 onClick={() => setShowEventListModal(false)} className="text-lg hover:cursor-pointer">
            X
          </h2>
        </div>

        <div>
          {events.length > 0 ? (
            <>
              {events.map((event, index) => (
                <div key={index} className="border-b py-2 flex flex-row justify-between">
                 <div className="flex flex-col"> <div className="flex gap-2 items-center mb-2 flex-row justify-start">
                    <div
                      className="h-6 w-6 rounded-full "
                      style={{ background: `${event.EventColor || "red"}` }}
                    ></div>
                    <h3 className="text-lg font-semibold">
                      {event.event_title || "Not Added"}
                    </h3>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm text-gray-600">
                      {event.event_description || "Not Added"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Date: {event.event_date || "Not Added"}
                    </p>
                  </div></div>

                  
                </div>
              ))}
            </>
          ) : (
            "No events found"
          )}
        </div>
      </div>
    </div>
  );
};

export default EventListModal;
