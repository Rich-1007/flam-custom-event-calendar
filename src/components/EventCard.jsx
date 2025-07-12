import React from 'react';
import { useSelector } from 'react-redux';

const EventCard = ({day}) => {
  const events = useSelector((state) => state.AllEventsReducer.events);

  const filteredEvents = events.filter(event => event.dayForEvent === day);
  
//   console.log(filteredEvents[0]?.event_title);
  
  
  
  return (
    <div className=" ">
      
        <div  className="">
          <p className="text-xs">{filteredEvents[0]?.event_title}</p>
        </div>
      
    </div>
  );
};

export default EventCard;
