import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import { rsvpSchema } from "../../utils/rsvpSchema";

function Rsvp({ encode }) {
  return (
    <section className="rsvp__wrapper">
      <h2 className="page__title">RSVP</h2>
      <p className="rsvp__caption">
        Each guest will need their own submission.
      </p>
      <Formik
        initialValues={{ name: "", attending: "", picked: "", notes: "" }}
        validationSchema={rsvpSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rsvp", ...values }),
          })
            .then(() => {
              alert("Thank you for responding.");
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
          <div className="rsvp__radio-group attending">
            <h2 className="radio-group__heading">Will you be attending?</h2>
            <div className="attending__wrapper">
              <label className="radio-option">
                <Field
                  type="radio"
                  name="attending"
                  value="yes"
                  required
                  id="rsvpyes"
                  className="radio-field"
                />
                <p className="radio__text">Yes</p>
              </label>
              <label className="radio-option">
                <Field
                  type="radio"
                  name="attending"
                  value="no"
                  required
                  id="rsvpno"
                  className="radio-field"
                />
                <p className="radio__text">No</p>
              </label>
            </div>
          </div>
          <div className="rsvp__radio-group entree">
            <h2 className="radio-group__heading">Select your entree</h2>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                value="I. Fish"
                required
                className="radio-field"
              />
              <p className="radio__roman">I</p>
              <p className="radio__text">
                Seared Wisconsin Walleye (Fish) Fillets
              </p>
            </label>

            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                required
                value="II. Steak"
                className="radio-field"
              />
              <p className="radio__roman">II.</p>
              <p className="radio__text">
                Filet Mignon with Red Onion Confit & Chicken En'croute
              </p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                required
                value="III. Vegetarian"
                className="radio-field"
              />
              <p className="radio__roman">III.</p>
              <p className="radio__text">Vegetarian: Vegetarian En’croute</p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                required
                value="IV. Vegan"
                className="radio-field"
              />
              <p className="radio__roman">IV.</p>
              <p className="radio__text">
                Vegan: Two Grilled Portobello Mushrooms w/ Potato & Vegetable
              </p>
            </label>
            <label className="radio-option">
              <Field
                type="radio"
                name="picked"
                required
                value="V. Childrens"
                className="radio-field"
              />
              <p className="radio__roman">V.</p>
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
