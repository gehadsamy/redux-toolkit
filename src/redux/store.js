import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./tasksSlice";
import userReducer from "./userSlice";
export const store = configureStore({
 reducer:{
        tasks: taskReducer,
        user: userReducer,
    }

})