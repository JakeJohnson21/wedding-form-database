import { Formik, Form } from "formik";
import { hotelSchema } from "../utils/stay";
import Api from "./Api";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

// hotel form_id 639110e975aa5200085738f1

function StayForm({ encode }) {
  return (
    <section className="page__wrapper">
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
          <TextInput name="name">Hotel name: </TextInput>
          <TextInput name="address">Address:</TextInput>
          <TextInput name="url">Website URL:</TextInput>
          <TextAreaInput name="description">Hotel description</TextAreaInput>
          <TextInput name="price">Price range</TextInput>
          <TextInput name="distance">Distance from venue</TextInput>
          <button type="submit" className="submit__button">
            Submit
          </button>
        </Form>
      </Formik>
      <Api
        formId="639110e975aa5200085738f1"
        name="Hotel name:"
        money="Price range:"
        optional="Distance from venue"
      />
    </section>
  );
}

export default StayForm;
