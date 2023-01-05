import * as yup from "yup";

export const funSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  url: yup.string().url().required(),
  description: yup.string(),
  cost: yup.string(),
});
