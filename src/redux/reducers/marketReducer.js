import { createSlice } from "@reduxjs/toolkit";

const marketlSlice = createSlice({
  name: "market",
  initialState: {
    market: [],
    selectedMarket: {},
  },
  reducers: {
    setMarketData(state, action) {
      state.market = action.payload;
    },
    selectedMarket(state, action) {
      state.selectedMarket = action.payload;
    },
  },
});

export const marketActions = marketlSlice.actions;

export default marketlSlice.reducer;
