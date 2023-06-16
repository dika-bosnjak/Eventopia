import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import HomeComponent from "../home/HomeComponent";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeComponent /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id/edit", element: <ActivityForm key={"edit"} /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "create_activity", element: <ActivityForm /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
