import React, { createContext } from "react";
import { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

export const Context = createContext();

function ContextApi({ children }) {
  let [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  let [isSellWindowOpen, SetIsSellWindowOpen] = useState(false);
  let [selectedStockUid, setSelectedStockUid] = useState("");

  const handleOpenBuywindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
  };

  const handleOpenSellwindow = (uid) => {
    SetIsSellWindowOpen(true);
    setSelectedStockUid(uid);
  };

  const handleCloseSellwindow = () => {
    SetIsSellWindowOpen(false);
    setSelectedStockUid("");
  };

  return (
    <Context.Provider
      value={{
        isBuyWindowOpen,
        setIsBuyWindowOpen,
        selectedStockUid,
        setSelectedStockUid,
        handleOpenBuywindow,
        handleCloseBuyWindow,
        isSellWindowOpen,
        SetIsSellWindowOpen,
        handleOpenSellwindow,
        handleCloseSellwindow,
      }}
    >
      {children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          handleCloseBuyWindow={handleCloseBuyWindow}
          uid={selectedStockUid}
        />
      )}
      {isSellWindowOpen && (
        <SellActionWindow
          handleCloseSellwindow={handleCloseSellwindow}
          uid={selectedStockUid}
        />
      )}
    </Context.Provider>
  );
}

export default ContextApi;
