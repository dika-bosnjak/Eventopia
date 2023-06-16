import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  rows: number;
}

export default function TextArea(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        className={
          "peer-focus:font-medium  text-sm duration-300 transform-translate-y-6 scale-75  origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " +
          (meta.touched && meta.error ? "text-red-600" : "text-gray-500")
        }
      >
        {props.label}
      </label>

      <textarea
        {...field}
        {...props}
        className={
          "block p-2.5 w-full text-sm text-gray-900 border-0 border-b-2 focus:ring-blue-500 focus:border-blue-500 appearance-none   focus:outline-none focus:ring-0 " +
          (meta.touched && meta.error ? "border-red-400" : "border-gray-300")
        }
      />

      {meta.touched && meta.error ? (
        <p className="mt-2 text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {meta.error}
        </p>
      ) : null}
    </div>
  );
}
