import { configureStore } from "@reduxjs/toolkit";
import serviceEditListReducer from "./reducers/serviceEditList";
import serviceListReducer from "./reducers/serviceList";

const store = configureStore({
  reducer: {
        serviceList: serviceListReducer,
        serviceEditList: serviceEditListReducer,
  }
})

export default store;