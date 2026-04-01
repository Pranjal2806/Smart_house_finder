import { createContext, useState } from "react";

export const CompareContext = createContext();

function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (property) => {
    if (compareList.find((item) => item.id === property.id)) {
      return;
    }

    if (compareList.length >= 3) {
      alert("You can compare maximum 3 properties.");
      return;
    }

    setCompareList([...compareList, property]);
  };

  const removeFromCompare = (id) => {
    setCompareList(compareList.filter((item) => item.id !== id));
  };

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export default CompareProvider;