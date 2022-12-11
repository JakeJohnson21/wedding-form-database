import { Field, ErrorMessage } from "formik";

function TextAreaInput({ children, name }) {
  return (
    <label className="form__label">
      {children}
      <Field
        id="textarea"
        name={name}
        as="textarea"
        className="form__input"
        type="text"
      />
      <ErrorMessage name={name} className="form__error" component="span" />
    </label>
  );
}

export default TextAreaInput;
