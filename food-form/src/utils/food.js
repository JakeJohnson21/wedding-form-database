import * as yup from "yup";

export const restaurantSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  url: yup.string().url().required(),
  description: yup.string(),
  price: yup.string(),
  attire: yup.string().required(),
});
