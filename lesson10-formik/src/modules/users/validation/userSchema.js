import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required().max(30).min(3).label("Name"),
  phone: yup.string().required().max(30).min(5).label("Phone"),
});
