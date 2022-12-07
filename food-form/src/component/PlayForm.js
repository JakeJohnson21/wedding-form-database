import { Formik, Form, Field, ErrorMessage } from "formik";
import { funSchema } from "../utils/adventure";

function PlayForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        url: "",
        description: "",
        cost: "",
      }}
      validationSchema={funSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "adventures", ...values }),
        })
          .then(() => {
            alert("success");
            setSubmitting(false);
            resetForm();
          })
          .catch(() => {
            alert("Error");
            setSubmitting(false);
          });
      }}
    >
      <Form className="form" name="adventures" data-netlify="true">
        <input type="hidden" name="adventures" value="adventure" />
        <label className="form__label">
          Explore Name:
          <Field name="name" className="form__input" type="text" />
          <ErrorMessage name="name" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Explore Address:
          <Field name="address" className="form__input" type="text" />
          <ErrorMessage
            name="address"
            className="form__error"
            component="span"
          />
        </label>
        <label className="form__label">
          Website:
          <Field
            name="url"
            placeholder="http://"
            className="form__input"
            type="text"
          />
          <ErrorMessage name="url" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Description:
          <Field
            id="textarea"
            name="description"
            as="textarea"
            className="form__input"
            type="text"
          />
          <ErrorMessage
            name="description"
            className="form__error"
            component="span"
          />
        </label>
        <label className="form__label">
          Cost:
          <Field name="cost" className="form__input" type="text" />
          <ErrorMessage name="cost" className="form__error" component="span" />
        </label>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default PlayForm;
