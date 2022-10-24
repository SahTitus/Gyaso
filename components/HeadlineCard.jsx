import React from "react";
import styles from "../styles/HeadlineCard.module.css";
import { Avatar, IconButton } from "@mui/material";
import Pic from "./Pic.jpg";
import { StarOutline } from "@mui/icons-material";
import { BoxArrowUp } from "react-bootstrap-icons";
import Image from "next/image";

const HeadlineCard = ({ image }) => {
  return (
    <div className={styles.headlineCard}>
      <div className={styles.image__wrapper}>
        <div className={styles.category}>
          <span>Technology</span>
        </div>
        <Image className={styles.image} height={700} width={600} src={image} alt="Hi" />
        <div className={styles.cardInfo}>
          <h4 className={styles.title}>
            Technology Is cdc cc7c c7c c t ccscgscp s8c sc[8syc8sc c8ys
            csichs8cs csc gs8cgs8cs
          </h4>
          <div className={styles.bottom}>
            <div className={styles.source}>
              <Avatar className={styles.avatar} />
              <p>Hookwal</p>
            </div>
            <div className={styles.bottomRight}>
              <IconButton className={styles.bottomRightIcon__wrapper}>
                {" "}
                <StarOutline className={styles.bottomRightIcon} />
              </IconButton>
              <IconButton className={styles.bottomRightIcon__wrapper}>
                <BoxArrowUp
                  className={`${styles.bottomRightIcon} ${styles.shareIcon}`}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCard;
