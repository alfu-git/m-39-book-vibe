import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextP = ({ children }) => {
  const [readBooksList, setReadBooksList] = useState([]);

  const handleReadBtn = (book) => {

    const isBookExists = readBooksList.find((b) => b.bookId === book.bookId);

    if (isBookExists) {
      alert(`${book.bookName} is already in read list`);
    } else {
      setReadBooksList([...readBooksList, book]);
    }
    console.log(readBooksList);
  };

  return (
    <BookContext.Provider value={{ handleReadBtn }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextP;
