import { Formik, Form } from "formik";
import { funSchema } from "../utils/adventure";
import Api from "./Api";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

// adventure form_id 639110ea75aa5200085738f2

function PlayForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  return (
    <section className="page__wrapper">
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
          <TextInput name="name">Name: </TextInput>
          <TextInput name="address">Address:</TextInput>
          <TextInput name="url">Website URL:</TextInput>
          <TextAreaInput name="description">Description</TextAreaInput>
          <TextInput name="price">Cost?</TextInput>
          <button type="submit" className="submit__button">
            Submit
          </button>
        </Form>
      </Formik>
      <Api
        formId="639110ea75aa5200085738f2"
        name="Adventure name:"
        money="Cost:"
      />
    </section>
  );
}

export default PlayForm;
