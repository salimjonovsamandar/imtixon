import React from 'react'
import male from '../Login/male.png'
import Logo from '../Login/Logo.svg'
import styles from './index.module.css'

function index() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <img className={styles.logo} src={Logo} alt="" />
                <h1 className={styles.Title}>Xush kelibsiz!</h1>
                <p className={styles.desc}>Login parolingizni kiritib o'z kabinetingizga kiring.</p>

                <div className={styles.name}>
                    <label className={styles.label}>Login</label>
                    <input type="text" required="" name="text" className={styles.input} />
                </div>

                <div className={styles.name}>
                    <label className={styles.label}>Parol</label>
                    <input type="password" required="" className={styles.input} />
                </div>

                <button className={styles.button}>Kirish</button>
                <h6 className={styles.head}>Copyright © 2024 Vim kompaniyasi</h6>
            </div>

            <div className="img">
                <img className={styles.img} src={male} width={600} height={400} />
            </div>
        </div>
    )
}

export default index