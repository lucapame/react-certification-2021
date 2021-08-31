const storage = {
  get(key) {
    try {
      const rawValue = sessionStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    sessionStorage.removeItem(key);
  },
};

export { storage };
