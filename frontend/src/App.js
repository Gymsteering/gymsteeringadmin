
// import './App.css';

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import route from "./route";





function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
