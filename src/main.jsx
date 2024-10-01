import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import MainPage from "./pages/MainPage.jsx";
import GenerationPage from "./pages/GenerationPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const onUpdate = (data) => {
  console.log("Updated data: ", data);
};

const selectedData = [];

const onGenerate = () => {
  console.log("Generate selected books");
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainPage
        onUpdate={onUpdate}
        selectedData={selectedData}
        onGenerate={onGenerate}
      />
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/generate",
    element: <GenerationPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
