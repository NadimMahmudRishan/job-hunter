import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import ApplyJobs from './Components/ApplyJobs/ApplyJobs';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/appliedJobs",
        loader: () => fetch("/public/featuredJobs.json"),
        element: <ApplyJobs></ApplyJobs>,
      },
      {
        path: "/statistics",
        loader: () => fetch("/public/jobCategories.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        loader: () => fetch("/public/featuredJobs.json"),
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
