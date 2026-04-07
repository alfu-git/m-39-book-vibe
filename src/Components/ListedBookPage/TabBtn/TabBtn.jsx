import { useContext } from "react";
import "./TabBtn.css";
import { TabBtnContext } from "../../../Context/TabBtnContextP";

const TabBtn = () => {
  const { tabBtnText, handleTabBtn } = useContext(TabBtnContext);

  return (
    <section className="mb-8 container mx-auto px-5">
      <div>
        <div className="flex items-end">
          <div className="flex">
            <button
              onClick={() => handleTabBtn("read")}
              className={`
                  w-35
                  ${tabBtnText === "read" ? "btn tab-active" : "tab-inactive"}
                `}
            >
              Read Books
            </button>

            <button
              onClick={() => handleTabBtn("wishlist")}
              className={`
                  w-50
                  ${tabBtnText === "wishlist" ? "btn tab-active" : "tab-inactive"}
                `}
            >
              Wishlist Books
            </button>
          </div>

          <div className="border-b border-[#131313]/30 h-px w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TabBtn;
