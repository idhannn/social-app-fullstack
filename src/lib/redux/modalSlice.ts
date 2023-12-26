import { createSlice } from "@reduxjs/toolkit";

const modalSLice = createSlice({
  name: "Modal State",
  initialState: {
    showModal: false,
    isUpload: false,
  },
  reducers: {
    update: (state, action) => {
      state.showModal = action.payload.showModal;
    },
    upload: (state, { payload }) => {
      state.isUpload = payload.isUpload;
    },
  },
});

export const { update, upload } = modalSLice.actions;
export default modalSLice.reducer;
