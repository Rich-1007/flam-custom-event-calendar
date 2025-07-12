import React from "react";
import { useSelector } from "react-redux";

const EventCard = ({ day }) => {
  const events = useSelector((state) => state.AllEventsReducer.events);

  const filteredEvents = events.filter((event) => event.dayForEvent === day);

  
  //   console.log(filteredEvents[0]?.event_title);

  return (
    <div
      className=" py-1 rounded  flex pl-1 "
      style={{ backgroundColor: filteredEvents[0]?.EventColor }}
    >
      {filteredEvents.length > 0 && (
        <div className="flex flex-col items-start">
          <p className="text-xs text-gray-200 font-semibold">10:14 AM</p>
          <p className="text-xs text-gray-100 ">
            {filteredEvents[0]?.event_title}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventCard;
