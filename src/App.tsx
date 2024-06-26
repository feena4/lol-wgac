import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './pages/Layout';
import { ChampionPage, championLoader } from './pages/ChampionPage';
import { championsLoader, ChampionsPage } from './pages/ChampionsPage';
import { ErrorPage } from './pages/ErrorPage';

export const routesConfig = [
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
];

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
