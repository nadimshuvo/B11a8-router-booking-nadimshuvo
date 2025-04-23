import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../components/RootLayout/RootLayout";
import MyBookings from "../pages/My-Bookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";
import Lawyer from "../pages/Lawyer/Lawyer";
import NotFound from "../pages/404 Not Found/NotFound";
import Header from "../components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "lawyer/:id",
        loader: async ({ params }) => {
          
          const id = params.id;

          if (!/^\d+$/.test(id)) {
            throw new Response("Invalid ID", { status: 404 });
          }

          const res = await fetch("/lawyers.json");
          if (!res.ok) {
            throw new Response("File Not Found", { status: 404 });
          }

          const data = await res.json();
          const lawyer = data.find((lawyer) => lawyer.id === parseInt(id));

          if (!lawyer) {
            throw new Response("Lawyer Not Found", { status: 404 });
          }

          return lawyer;
        },
        element: <Lawyer />,
        errorElement: <NotFound message="Sorry, no lawyer found with this ID !" />,
      },
      {
        path: "bookings",
        element: <MyBookings />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
]);

export default router;
