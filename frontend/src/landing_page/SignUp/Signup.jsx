import { useState } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

export default function Signup() {
  const [loader, setLoader] = useState(false);

  const validate = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validate}
      onSubmit={(value) => {
        setLoader(true);
        axios
          .post(
            `${import.meta.env.VITE_BACKEND_URL}/signup`,
            {
              name: value.name,
              email: value.email,
              password: value.password,
            },
            {
              withCredentials: true,
            },
          )
          .then((res) => {
            value = { name: "", email: "", password: "" };
            setLoader(false);
            toast.success(res.data.data.message);
            setTimeout(() => {
              window.location.href = "http://localhost:5174";
            }, 2300);
          })
          .catch((rej) => {
            setLoader(false);
          });
      }}
    >
      <Form
        className="container"
        style={{ width: "50%", padding: "130px 100px 50px 100px" }}
      >
        <div className="border p-5">
          <h4 className="pb-2 text-grey-100 text-center">
            Signup with Zerodha
          </h4>
          <TextField label="Name" name="name" type="text" id="name" />
          <TextField label="Email" name="email" type="email" id="email" />
          <TextField
            label="Password"
            name="password"
            type="password"
            id="password"
          />
          <div style={{ display: "flex" }}>
            <button type="submit" className="btn btn-primary">
              {!loader ? "Signup" : <PulseLoader color="white" size={8} />}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
