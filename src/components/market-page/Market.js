import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../market-grid/Table";
import Modal from "../modal/Modal";

const Market = () => {
  const isLoggedIn = useSelector((v) => v.login.loggedIn);
  const marketData = useSelector(
    (v) => v.market.market.marketSummaryResponse?.result
  );
  const selectedMarket = useSelector(
    (selectedMarket) => selectedMarket.market.selectedMarket
  );
  const navigate = useNavigate();

  const marketConfig = [
    {
      title: "exchange",
    },
    {
      title: "market",
    },
    {
      title: "symbol",
    },
    {
      title: "tradeable",
    },
    {
      title: "triggerable",
    },
  ];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      {marketData ? (
        <Table marketConfig={marketConfig} marketData={marketData} />
      ) : (
        " loading"
      )}
      <Modal marketConfig={marketConfig} selectedMarket={selectedMarket} />
    </>
  );
};

export default Market;
