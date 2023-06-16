import Calendar from "react-calendar";
import { FaFilter } from "react-icons/fa";

export default function ActivityFilters() {
  return (
    <>
      <div className=" rounded-md">
        <div className="text-blue-500 border md:mr-10 mt-10 p-3 flex items-center rounded-t-md">
          <FaFilter /> <span className="ml-3 font-bold text-xl"> Filters </span>
        </div>
        <div className="border p-3 nd:mr-10 text-xl border-b-1 hover:bg-gray-200 cursor-pointer">
          <p>All activities</p>
        </div>

        <div className="border p-3 md:mr-10 text-xl  border-b-1 hover:bg-gray-200 cursor-pointer">
          <p>I'm going to</p>
        </div>

        <div className="border p-3 md:mr-10 text-xl  border-b-1 rounded-b-md hover:bg-gray-200 cursor-pointer">
          <p>I'm hosting</p>
        </div>
      </div>
      <div className="mt-5 w-full">
        <Calendar className="md:mr-4 w-full" />
      </div>
    </>
  );
}
