import { Formik, Form, Field, ErrorMessage } from "formik";
import { funSchema } from "../utils/adventure";

function PlayForm({ onAddSubmit }) {
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
      validationSchema={funSchema}
      onSubmit={(values) => {
        onAddSubmit(values);
      }}
    >
      <Form className="form">
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
          Hotel website: starting with http://
          <Field name="url" className="form__input" type="text" />
          <ErrorMessage name="url" className="form__error" component="span" />
        </label>
        <label className="form__label">
          Hotel description:
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
          Distance to the venue:
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

export default PlayForm;
