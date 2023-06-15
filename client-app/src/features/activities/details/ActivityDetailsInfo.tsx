import { useStore } from "../../../app/stores/store";
import { BsInfoLg, BsCalendar4 } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function ActivityDetailsInfo() {
  const { activityStore } = useStore();
  const { selectedActivity: activity } = activityStore;
  return (
    <div className="md:mr-4 mt-4">
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow my-2">
        <div className="grid grid-cols-11">
          <div className="col-span-1 flex items-center align-middle text-blue-500">
            <BsInfoLg size={30} />
          </div>
          <div className="col-span-10 ml-4 text-justify  md:ml-0">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {activity?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  my-2">
        <div className="grid grid-cols-11">
          <div className="col-span-1 flex items-center align-middle text-blue-500">
            <BsCalendar4 size={30} />
          </div>
          <div className="col-span-10  ml-4  md:ml-0">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {activity?.date.split("T")[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  my-2">
        <div className="grid grid-cols-11">
          <div className="col-span-1 flex items-center align-middle text-blue-500 outline-blue-500">
            <ImLocation size={30} />
          </div>
          <div className="col-span-10  ml-4 md:ml-0">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {activity?.city} {activity?.venue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
