import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userAction";



const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
  export const authSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {},
  
        extraReducers: {
            // register user
            [registerUser.pending]: (state) => {
              state.loading = true
              state.error = null
            },
            [registerUser.fulfilled]: (state, { payload }) => {
              state.loading = false
              state.success = true // registration successful
            },
            [registerUser.rejected]: (state, { payload }) => {
              state.loading = false
              state.error = payload
            },
          },
        })

// export const {addTask, deleteTask} = authSlice.actions;

export default authSlice.reducer;