import { Children, createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState('recruiter');
  
   const toggleMode = () =>
    setMode((prev) => (prev === "recruiter" ? "developer" : "recruiter"));

  return (
    <ModeContext.Provider value={{mode, toggleMode}}>
        {children}
    </ModeContext.Provider>
  )
};

export const useMode = () => useContext(ModeContext);

