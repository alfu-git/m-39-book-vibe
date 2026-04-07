import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextP = ({ children }) => {
  const [readBooksList, setReadBooksList] = useState([]);

  const handleReadBtn = (book) => {
    const isBookExists = readBooksList.find((b) => b.bookId === book.bookId);

    if (isBookExists) {
      toast.warning(
        <p>
          <span className="mr-1 text-zinc-500 font-bold">
            {book.bookName}
          </span>
          <span>is already in read list</span>
        </p>,
      );
    } else {
      setReadBooksList([...readBooksList, book]);

      toast.success(
        <p>
          <span className="mr-1 text-green-500 font-bold">
            {book.bookName}
          </span>
          <span>added to read list</span>
        </p>,
      );
    }
  };

  return (
    <BookContext.Provider value={{ handleReadBtn, readBooksList }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextP;
