import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import RootLayout from "../components/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
        {
            index:true,
            path: "/",
            element:<Home/>
        }
    ]
  },
]);

export default router;
