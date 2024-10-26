import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import ApplyJobs from './Components/ApplyJobs/ApplyJobs';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/applyJobs",
        element: <ApplyJobs></ApplyJobs>,
      },
      {
        path: "/statistics",
        loader: () => fetch('/public/jobCategories.json'),
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
