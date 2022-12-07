import { Formik, Form, Field, ErrorMessage } from "formik";
import { restaurantSchema } from "../../utils/food";

function FoodForm() {
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
        attire: "",
      }}
      validationSchema={restaurantSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "restaurants", ...values }),
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
      <Form className="form" name="restaurants" data-netlify="true">
        <input type="hidden" name="restaurants" value="restaurant" />
        <label className="form__label">
          Restaurant Name:
          <Field name="name" className="form__input" type="text" />
          <ErrorMessage name="name" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Restaurant address
          <Field name="address" className="form__input" type="text" />
          <ErrorMessage
            name="address"
            className="form__error"
            component="span"
          />
        </label>

        <label className="form__label">
          Restaurant website:
          <Field
            name="url"
            className="form__input"
            placeholder="http://"
            type="text"
          />
          <ErrorMessage name="url" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Restaurant description:
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
          Attire:
          <Field name="attire" className="form__input" type="text" />
          <ErrorMessage
            name="attire"
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

export default FoodForm;
