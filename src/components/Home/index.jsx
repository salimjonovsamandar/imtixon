import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.module.css";

export default function Card() {
  const [dates, setDatas] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.href = "/login";
    }
    axios
      .get(import.meta.env.VITE_API + `products/all`)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  function handleDelete(id, name) {
    let isDelete = confirm(`Rosdan ham ${name} ni ochirmoqchimisiz `);
    if (isDelete) {
      fetch(import.meta.env.VITE_API + `products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
            del(id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <>
      <nav className={styles.card_nav}>
        <ul>
          <h1>Asosiy Pages</h1>
        </ul>
      </nav>
      <div className={styles.header}>
        {dates.map((data, index) => {
          return (
            <div className={styles.card} key={index}>
              <h3>{data.name}</h3>
              <p className={styles.description}>{data.description}</p>
              <h1>{data.price}</h1>
              <button
                className={styles.cardbtn}
                onClick={() => {
                  handleDelete(data.id, data.name);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

