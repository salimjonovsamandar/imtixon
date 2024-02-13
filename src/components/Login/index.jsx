import Logo from "../Login/Logo.svg";
import React from "react";
import male from "../Login/male.png";
import styles from "./index.module.css";
import { useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Login() {
  const nameRef = useRef();
  const passWordRef = useRef();

  function validateName(name) {
    if (name.trim() === "") {
      alert("Login kiritilishi shart");
      nameRef.current.focus();
      return false;
    } else {
      return true;
    }
  }

  function validatePassword(password) {
    if (password.trim() === "") {
      alert("Parol bo'sh bo'lishi mumkin emas");
      passWordRef.current.focus();
      return false;
    } else {
      return true;
    }
  }

  function hendleSubmit() {
    if (
      validateName(nameRef.current.value) &&
      validatePassword(passWordRef.current.value)
    ) {
      let data = {
        username: `${nameRef.current.value}`,
        email: "test@gamil.com",
        password: `${passWordRef.current.value}`,
      };
      axios
        .post("https://auth-rg69.onrender.com/api/auth/signin", data)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.accessToken))
          window.location.href = "/home"
        })
        .catch((error) => {
          alert("Bunday foydalanuvchi topilmadi:", error)
        });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <img className={styles.logo} src={Logo} alt="" />
        <h1 className={styles.Title}>Xush kelibsiz!</h1>
        <p className={styles.desc}>
          Login parolingizni kiritib o'z kabinetingizga kiring.
        </p>

        <div className={styles.name}>
          <label className={styles.label}>Login</label>
          <input
            ref={nameRef}
            type="text"
            required=""
            placeholder="Loginingizni kiriting"
            name="text"
            className={styles.input}
          />
        </div>

        <div className={styles.name}>
          <label className={styles.label}>Parol</label>
          <input
            ref={passWordRef}
            type="password"
            required=""
            placeholder="Parolingizni kiriting"
            name="text"
            className={styles.input}
          />
        </div>

        <button onClick={hendleSubmit} className={styles.button}>
          Kirish
        </button>
        <div className={styles.link}>
          <NavLink className={styles.sign} to="/login">SignIn</NavLink>
          <NavLink className={styles.sign} to="/">SignUp</NavLink>
        </div>

        <h6 className={styles.head}>Copyright © 2024 Vim kompaniyasi</h6>
      </div>

      <div className="img">
        <img className={styles.img} src={male} width={600} height={400} />
      </div>
    </div>
  );
}

export default Login;
