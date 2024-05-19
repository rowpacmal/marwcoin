import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { GetBlock } from './pages/GetBlock';
import { ListBlocks } from './pages/ListBlocks';
import { Transactions } from './pages/Transactions';
import { NotFound } from './pages/NotFound';

// You can add new routes in the children array to render pages.

// For more on how to use React-Router-DOM:
// https://reactrouter.com/en/main/start/tutorial

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/getBlock',
        element: <GetBlock />,
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/listBlocks',
        element: <ListBlocks />,
      },
    ],
  },
]);
