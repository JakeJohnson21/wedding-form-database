import { Field } from "formik";

function RadioOption({ name, romanNumeral, children }) {
  <label className="radio-option">
    <Field
      type="radio"
      name={name}
      value={romanNumeral}
      className="radio-field"
    />
    <p className="radio__roman">{romanNumeral}</p>
    <p className="radio__text">{children}</p>
  </label>;
}

export default RadioOption;
