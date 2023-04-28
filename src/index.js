import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';

import Pokemon from './01-pokemon/Pokemon';
import InfiniteScrolling from './02-infinite-scrolling/InfiniteScrolling';
import TodoApp from './03-todo-list/TodoApp';
import CurrencyConversion from './04-currency-conversion/CurrencyConversion';
import FlashcardApp from './05-flashcards/FlashcardApp';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/pokemon",
		element: <Pokemon />,
	},
	{
		path: "/infinite-scrolling",
		element: <InfiniteScrolling />,
	},
	{
		path: "/todo",
		element: <TodoApp />,
	},
	{
		path: "/currency-conversion",
		element: <CurrencyConversion />,
	},
	{
		path: "/flashcards",
		element: <FlashcardApp />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <App /> */}
	</React.StrictMode>
);
