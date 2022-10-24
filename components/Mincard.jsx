import { MoreHoriz, StarOutline } from "@mui/icons-material";
import React from "react";
import { BoxArrowUp, CircleFill } from "react-bootstrap-icons";
import styles from "../styles/Mincard.module.css";
import { IconButton } from "@mui/material";

const Mincard = ({article}) => {
  return (
    <div className={styles.mincard}>
      <div className={styles.main}>
        <img
          className={styles.image}
          src={article?.image}
          alt={article?.title}
        />
        <div className={styles.mainInfo}>
          <div className={styles.topbar}>
            <p className={styles.topLeft}>
              <span>{article?.category}</span>
              {/* <CircleFill className={styles.bullet} />
              <span>12h</span> */}
            </p>
            <IconButton>
              <MoreHoriz className={styles.moreHoriz} />
            </IconButton>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>
        {article?.title}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <img
            className={styles.avatar}
            src={article?.source_img}
            alt="Hi"
          />
          <p>{article?.source}</p>
        </div>
        <div className={styles.bottomRight}>
          <IconButton  className={styles.bottomRightIcon__wrapper}>
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
  );
};

export default Mincard;
