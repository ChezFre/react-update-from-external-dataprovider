import type { Item } from "./type";

let id = 0;
let items: Item[] = [];
let listeners: (() => void)[] = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const dataStore = {
  addData() {
    items = [...items, { id: id++, text: `Item ${id}` }];
    emitChange();
  },
  removeData() {
    items = [...items.slice(0, items.length - 1)];
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return items;
  },
};

dataStore.addData();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.dataStore = dataStore;
