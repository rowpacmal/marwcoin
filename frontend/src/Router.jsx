import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

// You can add new routes in the children array to render pages.

// For more on how to use React-Router-DOM:
// https://reactrouter.com/en/main/start/tutorial

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);
