import { Field, ErrorMessage } from "formik";

function TextInput({ children, name }) {
  return (
    <label className="rsvp-form__label">
      {children}
      <Field name={name} className="rsvp-form__input" type="text" />
      <ErrorMessage name={name} className="rsvp-form__error" component="span" />
    </label>
  );
}
export default TextInput;
