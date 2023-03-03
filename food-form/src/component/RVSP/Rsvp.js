import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import RadioOption from "./RadioOption";
import { rsvpSchema } from "../../utils/rsvpSchema";

function Rsvp({ encode }) {
  return (
    <section className="rsvp__wrapper">
      <h2 className="page__title">RSVP</h2>
      <p className="rsvp__caption">
        Each guest will need their own submission.
      </p>
      <Formik
        initialValues={{ name: "", picked: "", notes: "" }}
        validationSchema={rsvpSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rsvp", ...values }),
          })
            .then(() => {
              alert("Success. Thank you!");
              setSubmitting(false);
              resetForm();
            })
            .catch(() => {
              alert("Error rsvp unsuccessful. Please try again.");
              setSubmitting(false);
            });
        }}
      >
        <Form className="rsvp-form" name="rsvp" data-netlify="true">
          <input type="hidden" name="rsvp" value="rsvp" />
          <TextInput name="name">Full name:</TextInput>
          <div className="rsvp__radio-group">
            <h2 className="radio-group__heading">Select your entree</h2>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="one"
                className="radio-field"
              />
              <p className="radio__roman">i.</p>
              <p className="radio__text">
                Seared Wisconsin Walleye (Fish) Fillets
              </p>
            </label>

            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="two"
                className="radio-field"
              />
              <p className="radio__roman">ii.</p>
              <p className="radio__text">
                Filet Mignon with Red Onion Confit & Chicken En'croute
              </p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="three"
                className="radio-field"
              />
              <p className="radio__roman">iii.</p>
              <p className="radio__text">Vegetarian: Vegetarian En’croute</p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="four"
                className="radio-field"
              />
              <p className="radio__roman">iv.</p>
              <p className="radio__text">
                Vegan: Two Grilled Portobello Mushrooms w/ Potato & Vegetable
              </p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="five"
                className="radio-field"
              />
              <p className="radio__roman">v.</p>
              <p className="radio__text">
                Children’s Entrée: Breaded Chicken Tenders w/ Dipping Sauce
              </p>
            </label>
            <ErrorMessage
              name="picked"
              className="rsvp-form__error"
              component="span"
            />
          </div>

          <TextAreaInput name="notes">
            Dietary Restrictions or any other notes you'd like us to know.
          </TextAreaInput>
          <button type="submit" className="rsvp__submit-button">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
}

export default Rsvp;
