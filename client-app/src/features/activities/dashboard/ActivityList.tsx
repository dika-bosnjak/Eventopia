import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/Activity";
import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;
  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <div>
          <h1 className="ml-2 text-blue-500 font-bold text-center mt-4">
            {" "}
            {group}
          </h1>
          {activities.map((activity) => (
            <ActivityListItem activity={activity} key={activity.id} />
          ))}
        </div>
      ))}
    </>
  );
});
