import { useField } from "formik";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

export default function DateInput(props: Partial<ReactDatePickerProps>) {
  const [field, meta, helpers] = useField(props.name!);
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        className={
          "peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 " +
          (meta.touched && meta.error ? "text-red-600" : "text-gray-500")
        }
      >
        Date
      </label>

      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helpers.setValue(value)}
        className={
          "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0 focus:border-blue-500 peer " +
          (meta.touched && meta.error ? "border-red-400" : "border-gray-300")
        }
        popperClassName="calendar-popout"
        popperPlacement="top-end"
        isClearable={true}
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
