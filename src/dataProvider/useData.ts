import { useContext } from "react";
import { DataContext } from "./DataProvider";

const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("useDataProvider requires a DataProvider");
  return context;
};

export { useData };
