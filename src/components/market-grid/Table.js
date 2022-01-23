import React, { useState, useEffect } from "react";
import { selectedMarket } from "../../redux/actions/marketActions";
import { useDispatch } from "react-redux";

const Table = ({ marketConfig, marketData }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filteredQuery = marketData.filter((market) => {
    const query = search.toLowerCase();
    return (
      market.exchange.toLowerCase().indexOf(query) >= 0 ||
      market.market.toLowerCase().indexOf(query) >= 0 ||
      market.symbol.toLowerCase().indexOf(query) >= 0
    );
  });

  const selectedMarketHandler = (market) => {
    dispatch(selectedMarket(market));
  };
  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped table-dark text-center">
        <tr>
          <td>
            <input
              className="text-center"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </td>
        </tr>

        <thead>
          <tr>
            {marketConfig.map(({ title }) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredQuery?.map(
            ({ exchange, market, symbol, tradeable, triggerable }, index) => (
              <tr
                key={index}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  selectedMarketHandler(marketData[index]);
                }}
              >
                <td> {exchange}</td>
                <td> {market}</td>
                <td> {symbol}</td>
                <td> {tradeable ? "yes" : "no"}</td>
                <td> {triggerable ? "yes" : "no"}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
