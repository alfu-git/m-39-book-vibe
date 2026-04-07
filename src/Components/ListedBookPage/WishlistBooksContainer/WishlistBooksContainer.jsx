import React, { useContext } from "react";
import { BookContext } from "../../../Context/BookContextP";
import ListCard from "../ListCard/ListCard";

const WishlistBooksContainer = () => {
  const { wishlistBooks } = useContext(BookContext);

  if (wishlistBooks.length === 0) {
    return (
      <section className="container mx-auto px-5">
        <div>
          <div className="mb-10 py-20 bg-[#131313]/5 rounded-2xl">
            <h6 className="text-3xl text-zinc-400 font-bold text-center">
              No Wishlist Books Available
            </h6>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-30 container mx-auto px-5">
      <div>
        <div className="space-y-6">
          {wishlistBooks.map((book) => (
            <ListCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistBooksContainer;
