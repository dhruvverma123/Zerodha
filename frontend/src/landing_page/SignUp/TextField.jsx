import { ErrorMessage, useField } from "formik";
import "./TextField.css";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="pb-3">
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
