import React from "react";
import { MapPin, StickyNote, UserRound } from "lucide-react";
import { Link } from "react-router";

const ListCard = ({ book }) => {
  return (
    <div className="p-6 border border-[#131313]/15 shadow rounded-2xl flex flex-col lg:flex-row gap-6 items-center">
      <div className="py-7 px-12 lg:min-w-65 bg-[#131313]/5 rounded-2xl flex justify-center items-center">
        <figure>
          <img className="lg:h-65 xl:h-55" src={book.image} alt="" />
        </figure>
      </div>

      <div className="flex flex-col gap-y-6 w-full">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-[#131313] playfair-font">
            {book.bookName}
          </h3>
          <h5 className="text-[#131313]/80 font-medium">By : {book.author}</h5>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 xl:items-center">
          <div className="flex gap-4 sm:items-center">
            <span className="text-[#131313] font-bold">Tag</span>

            <div className="flex flex-wrap gap-3 xl:items-center">
              {book.tags.map((tag, index) => (
                <span
                  className="py-2 px-4 bg-[#23BE0A]/5 rounded-[30px] text-[#23BE0A] font-medium"
                  key={index}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-[2.5px] items-center">
            <span>
              <MapPin />
            </span>
            <span className="text-[#131313]/80">
              Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>
        </div>

        <div className="pb-4 w-full flex flex-wrap gap-4 items-center border-b border-[#131313]/15 text-[#131313]/60">
          <span className="flex gap-2 items-center">
            <span>
              <UserRound />
            </span>
            <span>Publisher: {book.publisher}</span>
          </span>

          <span className="flex gap-2 items-center">
            <span>
              <StickyNote />
            </span>
            <span>Total Pages: {book.totalPages}</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <span className="py-2.5 px-5 bg-[#328EFF]/15 rounded-[30px] text-[#328EFF]">
            Category: {book.category}
          </span>

          <span className="py-2.5 px-5 bg-[#FFAC33]/15 rounded-[30px] text-[#FFAC33]">
            Rating: {book.rating}
          </span>

          <Link
            to={`/book-details/${book.bookId}`}
            className="btn h-10.25 bg-[#23BE0A] rounded-[30px] text-base-100 text-lg font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
