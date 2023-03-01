import { Field, ErrorMessage } from "formik";

function TextAreaInput({ children, name }) {
  return (
    <label className="rsvp-form__label">
      {children}
      <Field
        id="rsvptextarea"
        name={name}
        as="textarea"
        className="rsvp-form__input rsvp__text-area"
        type="text"
      />
      <ErrorMessage name={name} className="rsvp-form__error" component="span" />
    </label>
  );
}

export default TextAreaInput;
