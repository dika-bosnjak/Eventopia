import { Activity } from "../../../app/models/Activity";
import { ImLocation } from "react-icons/im";
import { TbCalendarTime } from "react-icons/tb";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

export default observer(function ActivityListItem({ activity }: Props) {
  return (
    <>
      <div className="flex flex-col relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 my-2">
        <p className="absolute top-1 right-2 text-sm font-bold text-gray-400 hover:text-gray-700">
          {activity.category}
        </p>

        <div className="md:grid md:grid-cols-6">
          <div className="md:col-span-2">
            <img
              className="rounded-t-lg w-full h-full object-cover md:rounded-none md:rounded-l-lg"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4f/7d/fc/caption.jpg?w=900&h=900&s=1"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal relative pb-14 md:col-span-4">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-left text-center">
              {activity.title}
            </h5>

            <figcaption className="flex items-center space-x-3 my-2">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt=""
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Hosted by Bonnie</div>
                <p className="text-md text-gray-700 dark:text-gray-400 mt-2 text-sm flex items-center justify-center">
                  <ImLocation size={15} />
                  <span className="ml-1">{activity.city} | </span>
                  <TbCalendarTime size={20} />
                  <span className="ml-1"> {activity.date}</span>
                </p>
              </div>
            </figcaption>

            <p className="my-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              {activity.description.length > 100
                ? activity.description.substring(0, 100) + "..."
                : activity.description}
            </p>
            <Link
              to={`/activities/${activity.id}`}
              className="text-white bg-blue-500 hover:bg-blue-600 border border-gray-300 focus:outline-non focus:ring-4-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2  dark:text-white w-28 md:absolute md:right-5 md:bottom-4 cursor-pointer flex items-center text-center self-center"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
