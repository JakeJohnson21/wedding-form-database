import { Formik, Form } from "formik";
import { funSchema } from "../utils/adventure";
import Api from "./Api";
import { useState } from "react";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

// hotel form_id 639110e975aa5200085738f1

function AdventureForm({ encode }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClickCounter = () => {
    let plusOne = clickCount + 1;
    setClickCount(plusOne);
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
        <Form className="best-form" name="play" data-netlify="true">
          <input type="hidden" name="play" value="play" />
          <TextInput name="name">Adventure name: </TextInput>
          <TextInput name="address">Address:</TextInput>
          <TextInput name="url">Website URL:</TextInput>
          <TextAreaInput name="description">
            Adventure description:
          </TextAreaInput>
          <TextInput name="price">Cost:</TextInput>
          <button
            type="submit"
            className="submit__button"
            onClick={handleClickCounter}
          >
            Submit
          </button>
        </Form>
      </Formik>
      <Api
        formId="63b621fa4d6401000901cab2"
        name="Adventure name:"
        money="Cost:"
        click={clickCount}
      />
    </section>
  );
}

export default AdventureForm;
