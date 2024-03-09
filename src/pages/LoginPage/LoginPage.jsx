import React from "react";
import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Features/authSlice";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate("/");
    toast.success("Login Successfully", {
      autoClose: 1000,
      hideProgressBar: true,
    });
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="login_sec">
        <div className="login_bg">
          <div className="container">
            <div className="login_heading">
              <h1>Welcome User</h1>
            </div>
            <div className="login_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  className="email_inp"
                  placeholder="Email"
                  type="email"
                />

                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password field is required",
                    },
                  })}
                  type="password"
                  className="pass_inp"
                  placeholder="Password"
                  autoComplete="on"
                />

                <input type="submit" className="form_sub_btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
