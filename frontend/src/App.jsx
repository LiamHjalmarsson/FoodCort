import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error, Users, AllItems, Item
} from "./views";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true, 
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
          path: "items",
          element: <AllItems />,
          children: [
            {
              path: "/items/item/:itemId",
              element: <Item />
            }
          ]
        },
        {
          path: "users",
          element: <Users />,
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
