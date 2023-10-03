import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error
} from "./views";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true, // content thats loded on the index / parent rout 
          element: <Landing />,
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {

            }
          ]
        },
      ]
    },
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
