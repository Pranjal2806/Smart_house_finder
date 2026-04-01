import { createContext, useState } from "react";

export const SaveContext = createContext();

function SaveProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);

  const addToSaved = (property) => {
    if (!savedProperties.find((item) => item.id === property.id)) {
      setSavedProperties([...savedProperties, property]);
    }
  };

  return (
    <SaveContext.Provider value={{ savedProperties, addToSaved }}>
      {children}
    </SaveContext.Provider>
  );
}

export default SaveProvider;