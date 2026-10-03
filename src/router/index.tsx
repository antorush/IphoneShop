import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Cotact/ContactUs";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  // Редирект со старого пути
  { path: "/old-path", element: <Navigate to="/about" replace /> },
]);
