import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import RootLayout from "../components/RootLayout/RootLayout";
import MyBookings from "../pages/My-Bookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
        {
            index:true,
            path: "/",
            element: <Home/>
        },
        {
          path: "my-bookings",
          element: <MyBookings />
        },
        {
          path: "blogs",
          element: <Blogs />
        }
    ]
  },
]);

export default router;
