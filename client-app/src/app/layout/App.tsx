import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <div className="container mx-auto mt-14 max-w-screen-xl p-10">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
