import { Formik, Form } from "formik";
import { restaurantSchema } from "../../utils/food";
import Api from "../Api";
import { useState } from "react";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

// restaurant form_id 638ff9b427bdc9000845d676
// site id b93b5d62-fdd1-4c48-ba6a-b6d26cfecc1
function FoodForm({ encode }) {
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
        <Form className="best-form" name="restaurants" data-netlify="true">
          <input type="hidden" name="restaurants" value="restaurant" />
          <TextInput name="name">Restaurant name: </TextInput>
          <TextInput name="address">Address:</TextInput>
          <TextInput name="url">Website URL:</TextInput>
          <TextAreaInput name="description">
            Restaurant description
          </TextAreaInput>
          <TextInput name="price">Price range</TextInput>
          <TextInput name="attire">Attire</TextInput>
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
        formId="638ff9b427bdc9000845d676"
        name="Restaurant name:"
        money="Price range:"
        optional="Attire:"
        click={clickCount}
      />
    </section>
  );
}

export default FoodForm;
