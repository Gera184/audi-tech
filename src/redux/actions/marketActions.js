import { marketActions } from "../reducers/marketReducer";
import axios from "axios";
import { endPointes, marketBaseUrl, API_KEY } from "../../api";

function fetchData(endpoint, callback) {
  axios
    .get(marketBaseUrl + endpoint, {
      headers: {
        accept: "application/json",
        "X-API-Key": API_KEY,
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      return error;
    });
}

export const setMarketData = (dispatch) => {
  fetchData(endPointes.currentMarketState, (data) => {
    dispatch(marketActions.setMarketData(data));
  });
};

export const selectedMarket = (selectedMarket) => {
  return (dispatch) => {
    dispatch(marketActions.selectedMarket(selectedMarket));
  };
};
