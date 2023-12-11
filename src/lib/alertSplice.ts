import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert SLICE",
  initialState: {
    toast: false,
    name: [] as string[],
    like: 0,
  },
  reducers: {
    update: (state, action) => {
      state.toast = action.payload.toast;
      state.name.push(action.payload.name);
    },
  },
});

export const { update } = alertSlice.actions;
export default alertSlice.reducer;
