import { Field, ErrorMessage } from "formik";

function TextInput({ children, name }) {
  return (
    <label className="form__label">
      {children}
      <Field name={name} className="form__input" type="text" />
      <ErrorMessage name={name} className="form__error" component="span" />
    </label>
  );
}
export default TextInput;
