import React, { createContext, useSyncExternalStore } from "react";
import { dataStore } from "../lib/DataStore";
import type { Item } from "../lib/type";

export const DataContext = createContext<Item[] | null>(null);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useSyncExternalStore(
    dataStore.subscribe,
    dataStore.getSnapshot
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider };
