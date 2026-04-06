import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book-details/${book.bookId}`} className="p-6 border border-[#131313]/15 rounded-2xl shadow">
      <div className="py-8 bg-[#F3F3F3] rounded-2xl flex justify-center items-center">
        <img
          className="w-30 h-40"
          src={book.image}
          alt={`${book.bookName} png`}
        />
      </div>

      <div className="mt-6">
        <div className="mb-4 flex gap-3 items-center">
          {book.tags.map((tag, index) => (
            <span key={index} className="py-1 px-4 bg-[#23BE0A]/5 rounded-full text-[#23BE0A] font-medium">{tag}</span>
          ))}
        </div>

        <div className="pb-5 mb-5 space-y-3 border-b border-dashed border-[#131313]/15">
          <h3 className="text-[#131313] text-2xl font-bold playfair-font line-clamp-1">{book.bookName}</h3>

          <span className="text-[#131313]/80 font-medium">
            <small>By: {book.author}</small>
          </span>
        </div>

        <div className="text-[#131313]/80 font-medium flex justify-between items-center">
          <span>{book.category}</span>

          <span className="flex gap-2 items-center">
            <span>{book.rating}</span>
            <span><Star size={20} /></span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
