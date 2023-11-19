import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
