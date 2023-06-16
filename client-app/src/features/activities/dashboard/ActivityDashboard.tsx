import React, { useEffect } from "react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";
import "react-calendar/dist/Calendar.css";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size === 0) loadActivities();
  }, [loadActivities]);
  if (activityStore.loadingInitial) return <LoadingComponent />;

  return (
    <div className="md:grid md:grid-cols-6">
      <div className="md:col-span-2 mx-auto">
        <ActivityFilters />
      </div>
      <div className="md:col-span-4">
        <ActivityList />
      </div>
    </div>
  );
});
