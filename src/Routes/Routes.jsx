import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ListedBookPage from "../Pages/ListedBookPage/ListedBookPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ReadPage from "../Pages/ReadPage/ReadPage";
import BookDetails from "../Components/HomePage/BooksContainer/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/listed-books",
        element: <ListedBookPage />,
      },
      {
        path: "/read-pages",
        element: <ReadPage />
      },
      {
        path: "/book-details/:id",
        loader: () => fetch('/booksData.json'),
        element: <BookDetails />
      }
    ],
    errorElement: <ErrorPage />
  },
]);
