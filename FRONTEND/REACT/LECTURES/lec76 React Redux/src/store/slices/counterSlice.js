import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
