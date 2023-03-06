import * as yup from "yup";

export const rsvpSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  attending: yup.string().required(),
  picked: yup.string(),
  notes: yup.string(),
});
