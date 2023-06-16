import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/Activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import DateInput from "../../../app/common/form/DateInput";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    closeForm,
    createActivity,
    editActivity,
    loadActivity,
    loadingInitial,
    selectedActivity,
  } = activityStore;
  const { id } = useParams();

  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: null,
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required."),
    description: Yup.string().required("The activity description is required."),
    category: Yup.string().required("The activity category is required."),
    date: Yup.string().required("The activity date is required.").nullable(),
    city: Yup.string().required("The activity city is required."),
    venue: Yup.string().required("The activity venue is required."),
  });

  useEffect(() => {
    if (id) loadActivity(id).then(() => setActivity(selectedActivity!));
  }, [id, loadActivity, selectedActivity]);

  function handleFormSubmit(activity: Activity) {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };

      createActivity(newActivity).then(() =>
        navigate(`/activities/${newActivity.id}`)
      );
    } else {
      editActivity(activity).then(() => navigate(`/activities/${activity.id}`));
    }
  }

  if (loadingInitial) return <LoadingComponent />;
  console.log(categoryOptions);

  return (
    <>
      <div className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row  my-2 p-10 relative ">
        <Formik
          enableReinitialize
          initialValues={activity}
          validationSchema={validationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <TextInput name={"title"} label={"Title"} />

              <TextArea name={"description"} label={"Description"} rows={4} />

              <SelectInput
                name={"category"}
                label={"Category"}
                options={categoryOptions}
              />

              <DateInput
                name="date"
                showTimeSelect
                timeCaption="time"
                dateFormat="d MMMM, yyyy h:mm aa"
              />

              <TextInput name={"city"} label={"City"} />

              <TextInput name={"venue"} label={"Venue"} />

              <div className="flex justify-end">
                <button
                  className="text-black bg-white hover:bg-gray-200 border border-gray-300 focus:outline-none focus:ring-4 -200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  cursor-pointer"
                  onClick={() => closeForm()}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-500 hover:bg-blue-600 border border-gray-300 focus:outline-none focus:ring-4 -200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  cursor-pointer disabled:bg-gray-700 disabled:cursor-not-allowed
                  "
                  type="submit"
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
});
