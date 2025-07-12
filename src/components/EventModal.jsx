import React from "react";

const EventModal = ({ setShowModal }) => {
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
              // onClick={onClose}
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
                //   value={title}
                //   onChange={(e) => setTitle(e.target.value)}
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
                //   value={description}
                //   onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                //   rows={3}
                placeholder="Add description"
              ></textarea>
            </div>

            <div className="flex justify-between pt-4 border-t">
              {true ? (
                <button
                  type="button"
                  // onClick={handleDelete}
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
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {true ? "Update" : "Save"}
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
