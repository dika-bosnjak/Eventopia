import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container mx-auto mt-14 max-w-screen-xl p-10">
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default App;
