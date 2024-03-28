import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "@store/reducers/projectSlice";
import educationReducer from "@store/reducers/educationSlice";
import jobReducer from "@store/reducers/jobSlice";

const store = configureStore({
  reducer: {
    project: projectReducer,
    education: educationReducer,
    job: jobReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export type { RootState, AppDispatch };
