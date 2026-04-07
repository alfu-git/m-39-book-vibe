import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import { BookContext } from "../../../Context/BookContextP";
import { TabBtnContext } from "../../../Context/TabBtnContextP";

const SortBy = () => {
  const { handleSortBtn } = useContext(BookContext);
  const { tabBtnText } = useContext(TabBtnContext);

  return (
    <section className="mb-14 container mx-auto px-5">
      <div>
        <div className="flex justify-center items-center">
          <div className="dropdown dropdown-bottom dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="m-1 btn bg-[#23BE0A] text-base-100 text-lg font-semibold"
            >
              Sort By <ChevronDown />
            </div>
            
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSortBtn("rating", tabBtnText)}>
                <a className="text-[#131313]/80">Rating</a>
              </li>

              <li onClick={() => handleSortBtn("pages", tabBtnText)}>
                <a className="text-[#131313]/80">Numbers of pages</a>
              </li>

              <li onClick={() => handleSortBtn("year", tabBtnText)}>
                <a className="text-[#131313]/80">Publisher year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortBy;
