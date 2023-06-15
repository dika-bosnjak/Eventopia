import { useStore } from "../../../app/stores/store";

export default function ActivityDetailsHeader() {
  const { activityStore } = useStore();
  const { selectedActivity: activity } = activityStore;
  return (
    <>
      <div className="md:mr-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <figure className="relative transition-all duration-300 cursor-pointer filter">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={`/assets/categories/${activity?.category}.jpg`}
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-4xl text-white bottom-6 font-bold left-4">
            <p>{activity?.title}</p>
            <p className="text-sm mt-4">{activity?.date}</p>
            <p className="text-sm">Hosted by Bob </p>
          </figcaption>
        </figure>

        <div className="p-5 md:grid md:grid-cols-2">
          <div className="md:flex md:justify-start grid grid-cols-1 my-2 md:my-0">
            <div className="cursor-pointer my-4 px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Join event
            </div>

            <div className="cursor-pointer my-4 md:ml-4 px-3 py-2.5 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Cancel attendance
            </div>
          </div>
          <div className="md:flex md:justify-end">
            <div className="cursor-pointer my-4 px-3 py-2.5 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Manage event
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
