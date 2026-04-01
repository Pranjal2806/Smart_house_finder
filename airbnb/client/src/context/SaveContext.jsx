import { createContext, useState } from "react";

export const SaveContext = createContext();

function SaveProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState([]);

  // ✅ ADD PROPERTY
  const addToSaved = (property) => {
    setSavedProperties((prev) => {
      if (prev.find((item) => item.id === property.id)) {
        return prev; // already exists
      }
      return [...prev, property];
    });
  };

  // ✅ REMOVE PROPERTY
  const removeFromSaved = (id) => {
    setSavedProperties((prev) =>
      prev.filter((property) => property.id !== id)
    );
  };

  return (
    <SaveContext.Provider
      value={{
        savedProperties,
        addToSaved,
        removeFromSaved, // 🔥 NEW
      }}
    >
      {children}
    </SaveContext.Provider>
  );
}

export default SaveProvider;

