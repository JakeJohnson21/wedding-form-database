import * as yup from "yup";

export const rsvpSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  attending: yup.string().required(),
  picked: yup.string().when("attending", {
    is: (value) => value === "yes",
    then: yup.string().required(),
  }),
  notes: yup.string(),
});
