import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextP = ({ children }) => {
  const [readBooksList, setReadBooksList] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const handleReadBtn = (book) => {

    const isExistsInWishlist = wishlistBooks.find(b => b.bookId === book.bookId);

    if (isExistsInWishlist) {
      const updateWishList = wishlistBooks.filter(b => b.bookId !== book.bookId);
      setWishlistBooks(updateWishList);
    }

    const isBookExists = readBooksList.find((b) => b.bookId === book.bookId);

    if (isBookExists) {
      toast.warning(
        <p>
          <span className="mr-1 text-zinc-500 font-bold">{book.bookName}</span>
          <span>is already in read list</span>
        </p>,
      );
    } else {
      setReadBooksList([...readBooksList, book]);

      toast.success(
        <p>
          <span className="mr-1 text-green-500 font-bold">{book.bookName}</span>
          <span>added to read list</span>
        </p>,
      );
    }
  };

  const handleWishlistBtn = (book) => {
    const isExistsInReadList = readBooksList.find(
      (b) => b.bookId === book.bookId,
    );

    if (isExistsInReadList) {
      toast.error(
        <p>
          <span className="mr-1 text-zinc-500 font-bold">{book.bookName}</span>
          <span>is already in read list</span>
        </p>,
      );
      return;
    }

    const isBookExists = wishlistBooks.find((b) => b.bookId === book.bookId);

    if (isBookExists) {
      toast.warning(
        <p>
          <span className="mr-1 text-zinc-500 font-bold">{book.bookName}</span>
          <span>is already in wishlist</span>
        </p>,
      );
    } else {
      setWishlistBooks([...wishlistBooks, book]);

      toast(
        <p>
          <span className="mr-1 text-fuchsia-600 font-bold">
            {book.bookName}
          </span>
          <span>added to wishlist</span>
        </p>,
      );
    }
  };

  const data = {
    handleReadBtn,
    readBooksList,
    handleWishlistBtn,
    wishlistBooks,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextP;
