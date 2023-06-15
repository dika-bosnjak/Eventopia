import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import HomeComponent from "../home/HomeComponent";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

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
    ],
  },
];
export const router = createBrowserRouter(routes);
