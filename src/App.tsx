import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { Layout } from './pages/Layout';
import { ChampionPage, championLoader } from './pages/ChampionPage';
import { championsLoader, ChampionsPage } from './pages/ChampionsPage';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
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
