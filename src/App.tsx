import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Layout } from './pages/Layout';
import { ChampionPage, ChampionParams, championLoader } from './pages/ChampionPage';
import { ChampionsPage } from './pages/ChampionsPage';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: ChampionsPage,
      },
      {
        path: "champions/:id",
        loader: ({ params }) => {
          const { id } = params as ChampionParams;
          if (id) {
            return championLoader(id)
          }
          return null;
        },
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
