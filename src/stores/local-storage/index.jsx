export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

export const remove = (key) => localStorage.removeItem(key);
