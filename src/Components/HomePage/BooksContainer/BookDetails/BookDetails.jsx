import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../../../Context/BookContextP";

const BookDetails = () => {
  const { id } = useParams();

  const allBooks = useLoaderData();

  const expectedBook = allBooks.find((book) => book.bookId === Number(id));

  const { handleReadBtn } = useContext(BookContext);

  return (
    <section className="container mx-auto px-5">
      <div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="p-7 sm:py-18 xl:p-18.5 bg-[#131313]/5 rounded-2xl flex justify-center items-center">
            <figure>
              <img
                className="xl:h-162.5"
                src={expectedBook.image}
                alt={`${expectedBook.bookName} Book png`}
              />
            </figure>
          </div>

          <div className="space-y-6 lg:max-w-137">
            <div>
              <h3 className="mb-4 text-[40px] text-[#131313] font-bold playfair-font">
                {expectedBook.bookName}
              </h3>
              <span className="inline-block text-[#131313]/80 text-xl font-medium">
                By: {expectedBook.author}
              </span>
            </div>

            <div className="py-4 border-y border-[#131313]/15">
              <span className="text-[#131313]/80 text-xl font-medium">
                {expectedBook.category}
              </span>
            </div>

            <p>
              <span className="text-[#131313] font-bold">Review : </span>
              <span className="text-[#131313]/70">{expectedBook.review}</span>
            </p>

            <div className="pb-6 border-b border-[#131313]/15 flex gap-4 items-center">
              <span className="text-[#131313] font-bold">Tag</span>

              <div className="flex gap-3 items-center">
                {expectedBook.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="py-1 px-4 bg-[#23BE0A]/5 rounded-full text-[#23BE0A] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-16 items-center">
              <div className="flex flex-col gap-y-3 text-[#131313]/70">
                <span>Number of Pages:</span>
                <span>Publisher:</span>
                <span>Year of Publishing:</span>
                <span>Rating:</span>
              </div>

              <div className="flex flex-col gap-y-3 text-[#131313] font-semibold">
                <span>{expectedBook.totalPages}</span>
                <span>{expectedBook.publisher}</span>
                <span>{expectedBook.yearOfPublishing}</span>
                <span>{expectedBook.rating}</span>
              </div>
            </div>

            <div className="mt-2 space-x-4">
              <button
                onClick={() => handleReadBtn(expectedBook)}
                className="btn shadow-none h-12 px-7 border border-[#131313]/30 rounded-lg text-[#131313] text-lg font-bold"
              >
                Read
              </button>
              <button className="btn border-none shadow-none h-12 px-7 bg-[#50B1C9]  rounded-lg text-base-100 text-lg font-semibold">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
