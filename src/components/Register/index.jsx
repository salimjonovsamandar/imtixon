import React from "react";
import { useRef } from "react";
import axios from "axios";
import Logo from '../Login/Logo.svg'
import male from "../Login/male.png";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passWordRef = useRef();
    const passRef = useRef();


    function validateName(name) {
        if (name.trim() === "") {
            alert("Login kiritilishi shart")
            nameRef.current.focus();
            return false;
        } else {
            return true;
        }
    }

    function validatePassword(password) {
        if (password.trim() === "") {
            alert("Parol bo'sh bo'lishi mumkin emas")
            passWordRef.current.focus();
            return false;
        } else {
            return true;
        }
    }
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    function validatePassword() {
        if (passWordRef.current.value != passRef.current.value) {
            alert("Parol bir xil bo'lishi kerak")
            passWordRef.current.focus();
            return false;
        } else {
            return true;
        }
    }

    function hendleSubmit() {
        if (
            validateName(nameRef.current.value) &&
            validatePassword(passWordRef.current.value) &&
            validateEmail(emailRef.current.value)
        ) {
            let data = {
                username: `${nameRef.current.value}`,
                email: `${emailRef.current.value}`,
                password: `${passWordRef.current.value}`
            }
            axios
                .post("https://auth-rg69.onrender.com/api/auth/signup", data)
                .then((response) => {
                    console.log(response.data);
                    window.location.href = "/login"
                })
                .catch((error) => {
                    console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
                    nameRef.current.value = ""
                    passWordRef.current.value = ""
                });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <img className={styles.logo} src={Logo} alt="" />
                <h1 className={styles.Title}>Assalom alaykum!</h1>


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
                    <label className={styles.label}>Email</label>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Emailingizni kiriting"
                        required=""
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

                <div className={styles.name}>
                    <label className={styles.label}>Parol qayta kiriting</label>
                    <input
                        ref={passRef}
                        type="password"
                        required=""
                        placeholder="Qayta parolingizni kiriting"
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
