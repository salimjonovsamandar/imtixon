import React from "react";
import { useRef } from "react";
import axios from "axios";
import Logo from '../Login/Logo.svg'
import male from "../Login/male.png";
import styles from "./index.module.css";

const validatemail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function Login() {
    const nameRef = useRef();

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
            validatePassword(passWordRef.current.value)
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
                })
                .catch((error) => {
                    console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
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
                        name="text"
                        className={styles.input}
                    />
                </div>


                <button onClick={hendleSubmit} className={styles.button}>
                    Kirish
                </button>
                <h6 className={styles.head}>Copyright © 2024 Vim kompaniyasi</h6>
            </div>

            <div className="img">
                <img className={styles.img} src={male} width={600} height={400} />
            </div>
        </div>
    );
}

export default Login;
