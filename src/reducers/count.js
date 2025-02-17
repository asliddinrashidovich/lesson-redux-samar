import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: 'count',
  initialState: {count: 0},
  reducers: {
    piluseState: state => {
      state.count += 1
    },
    minuseState: state => {
      state.count -= 1
    },
    restState: state => {
      state.count = 0
    },
  }
})

export const {piluseState, minuseState, restState} = countSlice.actions
export default countSlice.reducer