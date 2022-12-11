import { Formik, Form } from "formik";
import { hotelSchema } from "../utils/stay";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

// hotel form_id 639110e975aa5200085738f1

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
  );
}

export default StayForm;
