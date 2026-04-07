import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import BookContextP from "./Context/BookContextP.jsx";
import TabBtnContextP from "./Context/TabBtnContextP.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextP>
      <TabBtnContextP>
        <RouterProvider router={router} />
        <ToastContainer />
      </TabBtnContextP>
    </BookContextP>
  </StrictMode>,
);
