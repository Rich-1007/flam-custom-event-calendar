// import { createStore } from 'redux';

import { combineReducers, createStore } from "redux";
import showModalReducer from "../Reducers/showModalReducer";
import AllEventsReducer from "../Reducers/AllEventsReducer";


const rootReducer = combineReducers({
    showModalReducer:showModalReducer,
    AllEventsReducer:AllEventsReducer

})


const store = createStore(rootReducer);

export default store;