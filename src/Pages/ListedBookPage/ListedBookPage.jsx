import React from 'react';
import BooksTitle from '../../Components/ListedBookPage/BooksTitle/BooksTitle';
import SortBy from '../../Components/ListedBookPage/SortBy/SortBy';
import TabBtn from '../../Components/ListedBookPage/TabBtn/TabBtn';

const ListedBookPage = () => {
  return (
    <div>
      <BooksTitle />
      <SortBy />
      <TabBtn />
    </div>
  );
};

export default ListedBookPage;