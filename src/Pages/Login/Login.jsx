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
    <div className="gradient">
      <div className="cart login">
        <div className="Login">
          <h1>Welcome to Dream Hotel</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contentInput">
              <input placeholder="Tonguiino" {...register("user", { required: true })} />
              {errors.user && <span>Este campo es obligatorio</span>}
            </div>
            <div className="contentInput">
              <input placeholder="Contraseña" type="password" {...register("password", { required: true })} />
              {errors.password && <span>Este campo es obligatorio</span>}
            </div>

            <input id="submit" type="submit" value="Iniciar sesion" />
          </form>
          <div className="options">
            <a href="#">Olvidaste tu contraseña?</a>
            <a href="#">No tienes cuenta?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
