import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";

export default observer(function ServerError() {
  const { commonStore } = useStore();
  return (
    <>
      <h1>Server error</h1>
      <h5 className="text-red-500">{commonStore.error?.message}</h5>
      {commonStore.error?.details && (
        <>
          <h4>Stack trace</h4>
          <code className="mt-1">{commonStore.error.details}</code>
        </>
      )}
    </>
  );
});
