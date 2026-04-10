import { useState } from "react";
import { Context } from "../ContextApi";
import { useContext, useEffect } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../SignUp/TextField.jsx";

export default function Login() {
  let { setLogin } = useContext(Context);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLogin(false);
  }, []);

  const validate = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validate}
      onSubmit={(value) => {
        setLoader(true);
        axios
          .post(
            `${import.meta.env.VITE_BACKEND_URL}/login`,
            {
              email: value.email,
              password: value.password,
            },
            { withCredentials: true },
          )
          .then((res) => {
            setLoader(false);
            if (res.data.response == "Incorrect email or password") {
              toast.error(res.data.response);
            } else {
              toast.success(res.data.response);
              setTimeout(() => {
                window.location.href = import.meta.env.VITE_DASHBOARD_URL;
              }, 2300);
            }
          });
      }}
    >
      <Form
        className="container"
        style={{ width: "50%", padding: "130px 100px 50px 100px" }}
      >
        <div className="border p-5">
          <h4 className="pb-2 text-grey-100 text-center">Login with Zerodha</h4>
          <TextField label="Email" name="email" id="email" type="email" />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
          />
          <button className="btn btn-primary" type="submit">
            {!loader ? "Login" : <PulseLoader color="white" size={8} />}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
