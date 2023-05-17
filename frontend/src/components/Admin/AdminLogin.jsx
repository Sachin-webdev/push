import React, { Fragment, useEffect, useState } from "react";
import "./AdminLogin.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/adminAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";
const AdminLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  // useSelctor
  const { error, isLogin} = useSelector((state) => state.adminLogin);

  // useEffect
  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (isLogin) {
  //     alert.success("Logged in Successfully");
  //     navigate("/admin/dashboard");
  //   }
  // }, [alert, dispatch, error, navigate, isLogin]);

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmitHandler =async  (e) => {
    e.preventDefault();
    try{

      // dispatch(login(email, password));
      const res = await axios.post("/api/v1/admin/login", {
        email, password
      })
      localStorage.setItem("token", res.data.token);
      alert.success("loggedIn");
      navigate('/admin/dashboard')
    }catch(err){
      alert.error(err.message)
    }
  };
  return (
    <Fragment>
      <section className="adminLoginContainer"></section>

      <section className="container adminLoginFormContainer">
        <Typography variant="h2" className="loginHeader">
          Admin Login
        </Typography>
        <div className="container adminformContainer">
          <form
            onSubmit={loginSubmitHandler}
            className="container adminLoginForm"
          >
            <div className="adminForm__data">
              <label htmlFor="email">Email:</label>
              <div>
                <PersonIcon className="loginIcons" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="loginForm__items"
                />
              </div>
            </div>
            <div className="adminForm__data">
              <label htmlFor="password">Password:</label>
              <div>
                <LockIcon className="loginIcons" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="loginForm__items"
                />
              </div>
            </div>

            <Button
              variant="contained"
              className="loginSubmitBtn"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default AdminLogin;
