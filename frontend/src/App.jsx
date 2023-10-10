import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import {
  HomeLayout, Landing, Error, Users, UserPlaces, NewPlace, User
} from "./views";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      // errorElement: <Error />,
      children: [
        {
          index: true, 
          element: <Landing />,
        },
        {
          path: "users",
          children: [
            {
              index: true, 
              element: <Users />,
            },
            {
              path: ":userid",
              element: <User />,
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
