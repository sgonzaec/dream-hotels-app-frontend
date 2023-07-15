import React from "react";
import { useForm } from "react-hook-form";
import "./Login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="cart">
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contentInput">
            <input {...register("user", { required: true })} />
            {errors.user && <span>Este campo es obligatorio</span>}
          </div>
          <div className="contentInput">
            <input {...register("password", { required: true })} />
            {errors.password && <span>Este campo es obligatorio</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
