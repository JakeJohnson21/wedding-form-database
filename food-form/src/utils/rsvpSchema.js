import * as yup from "yup";

export const rsvpSchema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  plate: yup.string().required("Please choose your entree"),
  notes: yup.string(),
});
