import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextApi({ children }) {
  let [upperIcon, setUpperIcon] = useState(null);
  let [login, setLogin] = useState(false);

  let options = {
    upperIcon,
    setUpperIcon,
    login,
    setLogin,
  };

  return <Context.Provider value={options}>{children}</Context.Provider>;
}

export default ContextApi;
