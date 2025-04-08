import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = (key, fallback) => {
  try {
    const storedData = localStorage.getItem(key);
    if (storedData === null || storedData === "undefined") {
      return fallback;
    }
    return JSON.parse(storedData);
  } catch (error) {
    console.error(`Failed to parse ${key} from localStorage:`, error);
    return fallback;
  }
};

const initialState = {
  addresses: loadFromLocalStorage("addresses", []),
  selectedAddress: loadFromLocalStorage("selectedAddress", null),
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    newAddress: (state, action) => {
      const {
        name,
        phone,
        pincode,
        address,
        city,
        stateName,
        country,
        landmark,
      } = action.payload;

      const newAddress = {
        name,
        phone,
        pincode,
        address,
        city,
        stateName,
        country,
        landmark,
      };

      state.addresses.push(newAddress);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    },

    deleteAddress: (state, action) => {
      const index = action.payload;
      state.addresses.splice(index, 1);
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    },

    editAddress: (state, action) => {
      const { index, updatedAddress } = action.payload;
      state.addresses[index] = updatedAddress;
      localStorage.setItem("addresses", JSON.stringify(state.addresses));
    },

    selectAddress: (state, action) => {
      state.selectedAddress = state.addresses[action.payload] || null;
      localStorage.setItem(
        "selectedAddress",
        JSON.stringify(state.selectedAddress)
      );
    },
  },
});

export const { newAddress, deleteAddress, editAddress, selectAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
