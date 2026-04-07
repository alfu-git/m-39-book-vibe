import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addToLocalStorage, getDataFromLocalStorage } from "../Utility/localDB";

export const BookContext = createContext();

const BookContextP = ({ children }) => {
  const [readBooksList, setReadBooksList] = useState(() =>
    getDataFromLocalStorage("readList"),
  );
  const [wishlistBooks, setWishlistBooks] = useState(() =>
    getDataFromLocalStorage("wishlist"),
  );
  const [sortType, setSortType] = useState("");

  const handleReadBtn = (book) => {
    addToLocalStorage("readList", book);

    const isExistsInWishlist = wishlistBooks.find(
      (b) => b.bookId === book.bookId,
    );

    if (isExistsInWishlist) {
      const updateWishList = wishlistBooks.filter(
        (b) => b.bookId !== book.bookId,
      );
      setWishlistBooks(updateWishList);
      localStorage.setItem("wishlist", JSON.stringify(updateWishList));
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
      addToLocalStorage("wishlist", book);

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

  const handleSortBtn = (type, tabBtnText) => {
    setSortType(type);

    if (tabBtnText === "read") {
      const sortedReadBooks = [...readBooksList].sort((a, b) => {
        if (type === "rating") {
          return b.rating - a.rating;
        }

        if (type === "pages") {
          return b.totalPages - a.totalPages;
        }

        if (type === "year") {
          return b.yearOfPublishing - a.yearOfPublishing;
        }

        return 0;
      });

      setReadBooksList(sortedReadBooks);
    } else {
      const sortedWishlist = [...wishlistBooks].sort((a, b) => {
        if (type === "rating") {
          return b.rating - a.rating;
        }

        if (type === "pages") {
          return b.totalPages - a.totalPages;
        }

        if (type === "year") {
          return b.yearOfPublishing - a.yearOfPublishing;
        }

        return 0;
      });

      setWishlistBooks(sortedWishlist);
    }
  };

  const data = {
    handleReadBtn,
    readBooksList,
    handleWishlistBtn,
    wishlistBooks,
    sortType,
    handleSortBtn,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextP;
