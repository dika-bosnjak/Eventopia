import ReactDOM from "react-dom/client";

import "react-toastify/dist/ReactToastify.min.css";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./app/layout/styles.css";
import { StoreContext, store } from "./app/stores/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
