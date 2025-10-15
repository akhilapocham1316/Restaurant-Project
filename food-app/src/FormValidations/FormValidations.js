import * as yup from "yup";

export const FormValidations = {
  name: (fieldName) =>
    yup
      .string()
      .required(`Please enter your ${fieldName}`)
      .matches(/^[a-zA-Z]/, `Please enter valid  ${fieldName}`)
      .min(3, "Minimum 3 characters required")
      .max(50, "More than 50 characters are not allowed")
      .trim(),

  email: () =>
    yup
      .string()
      .trim()
      .required("Please enter your email address.")
      .email("Invalid email"),

  password: () =>
    yup
      .string()
      .min(5, "Password must be at least 5 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .required("Please enter your password"),

  confirmPassword: () =>
    yup
      .string()
      .required("Please enter your Confirm Password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),

  cardNumber: () =>
    yup
      .string()
      .required("Please enter your Card Number")
      .min(16, "Valid card number required")
      .max(16, "Valid card number required"),
      
  cvv:  () => yup
    .string()
    .required("Please enter your CVV")
    .matches(/^[0-9]{3}$/, "Valid CVV required (3 digits)"),

  expiry:  () => yup
    .string()
    .required("Please enter Expiry Date")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry should be in MM/YY format"),
};
