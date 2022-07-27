import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const axiosInstance  = axios.create({
  baseURL: 'http://localhost:5000/'
})
export const getUsers = createAsyncThunk(
  'userSlice/getUsers',
  async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users/1').
      then(res => res.json());
  }
);
// slice name / function name
export const getAPI = createAsyncThunk("userSlice/getAPI", async (data) => {
  return await axiosInstance.post('register', {username: 'username2', email: data.email, password: data.password}).then(
    (res) => res
  )
});

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
  export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {},
  
        extraReducers: {
            // register user
            [getUsers.pending]: (state) => {
              state.loading = true
              state.error = null
            },
            [getUsers.fulfilled]: (state, action) => {
              state.loading = false
              state.success = true // registration successful
              state.userInfo = action.payload
            },
            [getUsers.rejected]: (state, action) => {
              state.loading = false
              state.error = action.payload
            },


            [getAPI.pending]: (state) => {
              state.loading = true
              state.error = null
              console.log(state.loading);
            },
            [getAPI.fulfilled]: (state, action) => {
              state.loading = false
              state.success = true // registration successful
              state.userInfo = action.payload
              console.log(action.payload);
            },
            [getAPI.rejected]: (state, action) => {
              state.loading = false
              state.error = action.payload
            },
          },
        })


export default userSlice.reducer;