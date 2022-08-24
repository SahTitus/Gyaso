import React from "react";
import styles from "../styles/HeadlineCard.module.css";
import { Avatar } from "@mui/material";
import Pic from "./Pic.jpg";

const HeadlineCard = () => {
  return (
    <div className={styles.headlineCard}>
     
      <div className={styles.image__wrapper}>
      <div className={styles.category}>
        <span>Technology</span>
      </div>
        <img
          className={styles.image}
          src="https://newsghana.com.gh/wp-content/uploads/2021/04/zjwoqz4kiaq-696x392.jpg"
          alt="Hi"
        />
         <div className={styles.cardInfo}>
        <h4 className={styles.title}>Technology Is  cdc cc7c c7c c t ccscgscp s8c sc[8syc8sc c8ys csichs8cs csc gs8cgs8cs</h4>
        <div className={styles.source}>
          <Avatar  className={styles.avatar}/>
          <p>Hookwal</p>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default HeadlineCard;
