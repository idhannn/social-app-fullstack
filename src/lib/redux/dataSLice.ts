import { createSlice } from "@reduxjs/toolkit";

const dataSLice = createSlice({
  name: "Social All State",
  initialState: {
    userData: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload.userData;
    },
  },
});

export const { updateUser } = dataSLice.actions;
export default dataSLice.reducer;
