import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EventModal = ({ dayForEvent }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [selectColor, setSelectColor] = useState("");

  const events = useSelector((state) => state.AllEventsReducer.events);
  const filteredEvents = events.filter(
    (event) => event.dayForEvent === dayForEvent
  );

  useEffect(() => {
    if (filteredEvents.length > 0) {
      console.log(filteredEvents[0].event_title);
      setTitle(filteredEvents[0].event_title);
      setSelectColor(filteredEvents[0].EventColor);

    }

    // if (filteredEvents.length > 0) {
    //     setTitle(filteredEvents[0].event_title);
    //     setDescription(filteredEvents[0].event_description);
    // } else {
    //     setTitle("");
    //     setDescription("");
    // }
  }, [events]);

  const HandleCloseModal = () => {
    dispatch({ type: "HIDE_MODAL" });
  };

  const HandleEvent = (e) => {
    e.preventDefault();

    const updatedEvent = {
      dayForEvent,
      event_title: title,
      event_date: "2025-07-08", 
      event_description: description,
      EventColor:selectColor,
    };

    if (filteredEvents.length > 0) {
      dispatch({ type: "UPDATE_EVENT", payload: updatedEvent });
    } else {
      dispatch({ type: "ADD_EVENT", payload: updatedEvent });
    }

    dispatch({ type: "HIDE_MODAL" });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch({
      type: "REMOVE_EVENT",
      payload: filteredEvents[0].dayForEvent,
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 "
        //   onClick={onClose}
      >
        <div className="bg-white flex flex-col rounded-lg w-96">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {false ? "Edit Event" : "New Event"}
            </h2>
            <button
              className="text-gray-800 hover:text-gray-700"
              onClick={HandleCloseModal}
            >
              X
            </button>
          </div>

          <form
            // onSubmit={handleSubmit}
            className="p-4"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add title"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                {/* <Calendar className="h-4 w-4 mr-1" /> */}
                Start Date & Time
              </label>
              <input
                type="datetime-local"
                // value={formatDateForInput(startDate)}
                // onChange={(e) => handleDateTimeChange('start', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                {/* <AlignLeft className="h-4 w-4 mr-1" /> */}
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                //   rows={3}
                placeholder="Add description"
              ></textarea>
            </div>

            <div>
              <label className="">Event Color</label>
              <div className="flex space-x-2 py-2">
                <div className="flex space-x-2">
                  <div
                    onClick={() => setSelectColor("#A28B55")}
                    className={`h-8 w-8 rounded-full border-2 hover:cursor-pointer bg-[#A28B55] ${
                      selectColor === "#A28B55" ? "border-gray-600" : ""
                    }`}
                  ></div>

                  <div
                    onClick={() => setSelectColor("#6B8A7A")}
                    className={`h-8 w-8 rounded-full border-2 hover:cursor-pointer bg-[#6B8A7A] ${
                      selectColor === "#6B8A7A" ? "border-gray-600" : ""
                    }`}
                  ></div>

                  <div
                    onClick={() => setSelectColor("#124076")}
                    className={`h-8 w-8 rounded-full border-2 hover:cursor-pointer bg-[#124076] ${
                      selectColor === "#124076" ? "border-gray-600" : ""
                    }`}
                  ></div>

                  <div
                    onClick={() => setSelectColor("#C68484")}
                    className={`h-8 w-8 rounded-full border-2 hover:cursor-pointer bg-[#C68484] ${
                      selectColor === "#C68484" ? "border-gray-600" : ""
                    }`}
                  ></div>

                  <div
                    onClick={() => setSelectColor("#96B6C5")}
                    className={`h-8 w-8 rounded-full border-2 hover:cursor-pointer bg-[#96B6C5] ${
                      selectColor === "#96B6C5" ? "border-gray-600" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t">
              {filteredEvents.length > 0 ? (
                <button
                  type="button"
                  onClick={(e) => handleDelete(e)}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors flex items-center"
                >
                  {/* <Trash className="h-4 w-4 mr-1" /> */}
                  Delete
                </button>
              ) : (
                <div></div>
              )}
              <div className="space-x-2">
                <button
                  type="button"
                  // onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => HandleEvent(e)}
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {filteredEvents.length > 0 ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventModal;
