import React, { use } from "react";
import BookCard from "./BookCard/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BooksContainer = () => {
  const booksData = use(booksPromise);

  return (
    <section className="mb-30 container mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-9 text-[#131313] text-[40px] font-bold playfair-font text-center">
            Books
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksData.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksContainer;
