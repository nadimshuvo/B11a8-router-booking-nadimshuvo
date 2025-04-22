import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../components/RootLayout/RootLayout";
import MyBookings from "../pages/My-Bookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";
import Lawyer from "../pages/Lawyer/Lawyer";

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
        loader: async({params})=> {
          const res = await fetch('lawyers.json');
          const data = await res.json();
          const lawyer = data.find(lawyer => lawyer.id === parseInt(params.id))
          return lawyer
        },
        element: <Lawyer />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
