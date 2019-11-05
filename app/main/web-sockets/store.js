import { globalStore } from "../../GlobalStore/GlobalStore";
import { storeKeys } from "../../resources/StoreKeys/StoreKeys";

class Store {
  constructor() {
    this.storage = [];
  }

  add(connectionDetails) {
    this.storage.push({
      ...connectionDetails,
    });
  }

  update(id, updatedData) {
    const wsElementIndex = this.storage.findIndex(ws => ws.id === id);

    this.storage[wsElementIndex] = {
      ...this.storage[wsElementIndex],
      ...updatedData,
    };
  }

  find(id) {
    return this.storage.find(ws => ws.id === id);
  }

  all() {
    return [...this.storage];
  }

  remove(id) {
    const wsElementIndex = this.storage.findIndex(ws => ws.id === id);

    this.storage.splice(wsElementIndex, 1);
  }

  sanitized() {
    return this.all().map(
      ({ socket, ...remainingSocketDetails }) => remainingSocketDetails
    );
  }

  clear() {
    // https://stackoverflow.com/a/1232046/9599137
    this.storage.splice(0, this.storage.length);
  }

  load() {
    const localSearches = globalStore.get(storeKeys.WS_CONNECTIONS, []);

    localSearches.forEach(searchDetails => {
      this.add(searchDetails);
    });
  }
}

class SingletonStore {
  constructor() {
    if (!SingletonStore.instance) {
      SingletonStore.instance = new Store();
    }

    return SingletonStore.instance;
  }
}

const singletonStore = new SingletonStore();

export default singletonStore;
