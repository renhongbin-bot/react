// import{ createStore } from 'redux'
import { createSlice, configureStore } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "abc",
  initialState: {
    isShow: true,
  },
  reducers: {
    show: (state, action) => {
      state.isShow = action.payload;
      console.log(state.isShow)
    },
    hide: (state, action) => {
        state.isShow = action.payload
        console.log(state.isShow)
        
    }
  },
});

const store = configureStore({
  reducer: slice.reducer,
});
console.log(store)

export const { show, hide } = slice.actions
export default store;
