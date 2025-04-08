import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: JSON.parse(localStorage.getItem("favItems")) || [],
};

const saveToLocalStorage = (favItems) => {
  localStorage.setItem("favItems", JSON.stringify(favItems));
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingItem = state.favItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.favItems = state.favItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favItems.push(action.payload);
      }
      saveToLocalStorage(state.favItems);
    },
    removeFromFavorite: (state, action) => {
      state.favItems = state.favItems.filter(
        (item) => item.id !== action.payload
      );
      saveToLocalStorage(state.favItems);
    },
  },
});

export const { toggleFavorite, removeFromFavorite } = favSlice.actions;
export default favSlice.reducer;
