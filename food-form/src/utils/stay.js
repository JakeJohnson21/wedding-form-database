import * as yup from "yup";

export const hotelSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  url: yup.string().url().required(),
  description: yup.string(),
  distance: yup.string().required(),
  price: yup.string(),
});
