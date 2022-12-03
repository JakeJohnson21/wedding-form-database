import * as yup from "yup";

export const funSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  url: yup.string().url("Must begin with http:// or https://").required(),
  description: yup.string(),
  cost: yup.string().required(),
  distance: yup.string().required(),
});
