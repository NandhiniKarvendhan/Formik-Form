import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
      console.log("form: ", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.userName) errors.userName = "Field required";
      if (!/\S+@\S+\.\S+/.test(values.userName)) {
        errors.userName = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";

      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input
          name="userName"
          id="emailField"
          type="text"
          placeholder="example@mail.com"
          onChange={formik.handleChange}
          values="formik.values.userName"
        />
        {formik.errors.userName ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.userName}
          </div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          id="pswField"
          type="text"
          onChange={formik.handleChange}
          values="formik.values.password"
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <br />
        <button
          id="submitBtn"
          type="submit"
          // onChange={formik.handleChange}
          // values={formik.errors}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
