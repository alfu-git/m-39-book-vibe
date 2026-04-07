import React, { createContext, useState } from "react";

export const TabBtnContext = createContext();

const TabBtnContextP = ({ children }) => {
  const [tabBtnText, setTabBtnText] = useState("read");

  const handleTabBtn = (text) => {
    setTabBtnText(text);
  };

  return <TabBtnContext.Provider value={{tabBtnText, handleTabBtn}}>{children}</TabBtnContext.Provider>;
};

export default TabBtnContextP;
