import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    mylist: [],
    id: 1
  }
export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        addTask: (state, action)=>{
          const myTask ={
            id: state.id,
            title: action.payload.title,
            task: action.payload.task
          }
          state.mylist = [...state.mylist, myTask]
          state.id++
        },

        deleteTask: (state, action)=>{
          return {...state, mylist : state.mylist.filter((elem)=>{return (action.payload.id !== elem.id)})} ;
      }
        },
        
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;