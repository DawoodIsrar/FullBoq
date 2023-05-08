import * as Yup from "yup"

export const loginInSchema=Yup.object({
  email:Yup.string().email().required("Please Enter Email"),
});