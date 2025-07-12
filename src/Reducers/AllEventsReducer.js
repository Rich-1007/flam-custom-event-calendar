const initialState = {
  events: [
    { EventColor:"", dayForEvent: "", event_title: "", event_date: "", event_description: "" },
  ],
};

function AllEventsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case "UPDATE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.dayForEvent === action.payload.dayForEvent
            ? { ...event, ...action.payload }
            : event
        ),
      };

    case "REMOVE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.dayForEvent !== action.payload),
      };

    

    default:
      return state;
  }
}

export default AllEventsReducer;
