import { useField } from "formik";
import { ChangeEvent } from "react";

interface Props {
  name: string;
  label: string;
  options: { value: string; text: string }[];
}

export default function SelectInput(props: Props) {
  const [field, meta, helpers] = useField(props.name);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    helpers.setValue(event.target.value);
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        className={
          "mb-2 peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " +
          (meta.touched && meta.error ? "text-red-600" : "text-gray-500")
        }
      >
        {props.label}
      </label>

      <select
        className={
          "block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer" +
          (meta.touched && meta.error ? "border-red-400" : "border-gray-300")
        }
        value={field.value || ""}
        onChange={handleChange}
        onBlur={() => helpers.setTouched(true)}
      >
        <option disabled={true} value="">
          -- Choose an option --
        </option>
        {props.options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {meta.touched && meta.error ? (
        <p className="mt-2 text-sm text-red-600">
          <span className="font-medium">Oops! </span>
          {meta.error}
        </p>
      ) : null}
    </div>
  );
}
