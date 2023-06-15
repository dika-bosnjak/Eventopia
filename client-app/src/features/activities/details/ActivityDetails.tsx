import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { id } = useParams();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
    deleteActivity,
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
    <>
      <div className="grid md:grid-cols-6">
        <div className="md:col-span-4">
          <ActivityDetailsHeader />
          <ActivityDetailsInfo />
          <ActivityDetailsChat />
        </div>
        <div className="md:col-span-2 mt-4 md:mt-0">
          <ActivityDetailsSidebar />
        </div>
      </div>
    </>
  );
});
