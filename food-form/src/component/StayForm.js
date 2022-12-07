import { Formik, Form, Field, ErrorMessage } from "formik";
import { hotelSchema } from "../utils/stay";

function StayForm() {
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
        price: "",
        distance: "",
      }}
      validationSchema={hotelSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "hotels", ...values }),
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
      <Form className="form" name="hotels" data-netlify="true">
        <input type="hidden" name="hotels" value="hotel" />
        <label className="form__label">
          Hotel Name:
          <Field name="name" className="form__input" type="text" />
          <ErrorMessage name="name" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Hotel address
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
          Price range
          <Field name="price" className="form__input" type="text" />
          <ErrorMessage name="price" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Distance from venue:
          <Field name="distance" className="form__input" type="text" />
          <ErrorMessage
            name="distance"
            className="form__error"
            component="span"
          />
        </label>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default StayForm;
