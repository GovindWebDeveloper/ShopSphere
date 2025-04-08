import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: JSON.parse(localStorage.getItem("user")) || {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  },
};

const saveToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateUserDetails: (state, action) => {
      const { username, firstName, lastName, gender } = action.payload;
      const existingPassword = state.userData.password;
      state.userData = {
        username,
        firstName,
        lastName,
        gender,
        password: existingPassword,
      };
      saveToLocalStorage(state.userData);
    },
  },
});

export const { updateUserDetails } = userSlice.actions;
export default userSlice.reducer;