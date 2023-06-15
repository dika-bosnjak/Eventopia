import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../../api/agent";
import { v4 as uuid } from "uuid";

export default class ActivityStore {
    activityRegistry = new Map<string, Activity>();
    selectedActivity: Activity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get activitiesByDates() {
        return Array.from(this.activityRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    get groupedActivities() {
        return Object.entries(
            this.activitiesByDates.reduce((activities, activity) => {
                const date = activity.date;
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;

            }, {} as { [key: string]: Activity[] })
        )
    }

    loadActivities = async () => {
        try {
            const activitiesList = await agent.Activities.list();
            activitiesList.forEach((activity) => {
                activity.date = activity.date.split("T")[0];
                this.activityRegistry.set(activity.id, activity);
            });

        } catch (error) {
            console.log(error);
        } finally {
            this.setLoadingInitial(false);

        }
    }

    loadActivity = async (id: string) => {
        this.setLoadingInitial(true);
        try {
            this.selectedActivity = await agent.Activities.details(id);
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoadingInitial(false);
        }
    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                this.activityRegistry.delete(id);
                this.selectedActivity = undefined;
            });
        } catch (error) {
            console.log(error);
        } finally {
            this.loading = false;
        }
    }

    createActivity = async (activity: Activity) => {
        this.loading = true;
        activity.id = uuid();
        try {
            await agent.Activities.create(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
            });
        } catch (error) {
            console.log(error);
        } finally {
            this.loading = false;
        }
    }

    editActivity = async (activity: Activity) => {
        this.loading = true;
        try {
            await agent.Activities.update(activity);
            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
            })
        } catch (error) {
            console.log(error);
        } finally {
            this.loading = false;
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectActivity = (id: string) => {
        this.selectedActivity = this.activityRegistry.get(id);
    }

    cancelSelectedActivity = () => {
        this.selectedActivity = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode = true;
    }

    closeForm = () => {
        this.selectedActivity = undefined;
        this.editMode = false;
    }

}

