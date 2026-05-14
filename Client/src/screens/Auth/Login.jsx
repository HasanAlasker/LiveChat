import React from "react";
import FormikInput from "../../components/form/FormikInput";
import AppForm from "../../components/form/AppForm";
import * as Yup from "yup";
import { Form, validateYupSchema } from "formik";
import Screen from "../../components/Screen";
import { login } from "../../api/user";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .lowercase()
    .trim(),

  password: Yup.string().required("Password is required").trim(),
});

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const handelSubmit = async (values) => {
    console.log(values);
    try {
      const res = await login(values);
    } catch (error) {}
  };

  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        <Form>
          <h2 className="main center">We missed you!</h2>
          <FormikInput
            name={"email"}
            placeholder={"Enter your email"}
            icon={"mail"}
            label={"Email"}
          />
          <FormikInput
            name={"password"}
            placeholder={"Enter your password"}
            icon={"lock"}
            type={"password"}
            label={"Password"}
          />
          <button type="submit" className="priBtn">
            Login
          </button>
          <hr />
          <span className="center">
            Don't have an account?{" "}
            <a className="priLink" href="/register">
              Create one
            </a>
          </span>
        </Form>
      </AppForm>
    </Screen>
  );
}
