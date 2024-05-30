import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { BlockExplorer } from './pages/BlockExplorer';
import { Transaction } from './pages/Transaction';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

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
				path: '/transaction',
				element: <Transaction />,
			},
			{
				path: '/explore',
				element: <BlockExplorer />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
