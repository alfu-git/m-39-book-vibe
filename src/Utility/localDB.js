const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const addToLocalStorage = (key, book) => {
  const data = getDataFromLocalStorage(key);
  const isExist = data.find((b) => b.bookId === book.bookId);

  if (!isExist) {
    data.push(book);
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export {getDataFromLocalStorage, addToLocalStorage};