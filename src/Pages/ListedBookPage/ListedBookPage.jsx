import React, { useContext } from "react";
import BooksTitle from "../../Components/ListedBookPage/BooksTitle/BooksTitle";
import SortBy from "../../Components/ListedBookPage/SortBy/SortBy";
import TabBtn from "../../Components/ListedBookPage/TabBtn/TabBtn";
import ReadBooksContainer from "../../Components/ListedBookPage/ReadBooksContainer/ReadBooksContainer";
import { TabBtnContext } from "../../Context/TabBtnContextP";
import WishlistBooksContainer from "../../Components/ListedBookPage/WishlistBooksContainer/WishlistBooksContainer";

const ListedBookPage = () => {
  const { tabBtnText } = useContext(TabBtnContext);

  return (
    <div>
      <BooksTitle />
      <SortBy />
      <TabBtn />
      {tabBtnText === "read" && <ReadBooksContainer />}
      {tabBtnText === "wishlist" && <WishlistBooksContainer />}
    </div>
  );
};

export default ListedBookPage;
