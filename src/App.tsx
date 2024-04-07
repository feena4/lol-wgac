import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Layout } from './pages/Layout';
import { ChampionPage, championLoader } from './pages/ChampionPage';
import { championsLoader, ChampionsPage } from './pages/ChampionsPage';
import { ErrorPage } from './pages/ErrorPage';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: championsLoader,
        Component: ChampionsPage,
      },
      {
        path: "champions/:id",
        loader: championLoader,
        Component: ChampionPage,
      }
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
