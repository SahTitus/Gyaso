import { MoreHoriz, StarOutline } from "@mui/icons-material";
import React from "react";
import { BoxArrowUp, CircleFill } from "react-bootstrap-icons";
import styles from "../styles/Mincard.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";

const Mincard = ({ article }) => {
  return (
    <div className={styles.mincard}>
      <div className={styles.main}>
        <Image
          className={styles.image}
          alt={article?.title}
          src={
            article?.image ||
            " https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000"
          }
          placeholder="blur"
          blurDataURL={
            article?.image ||
            " https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000"
          }
          height={100}
          width={100}
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
            <p className={styles.title}>{article?.title}</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <Image
            className={styles.avatar}
            src={article?.source_img}
            alt="Hi"
            height={20}
            width={20}
          />
          <p style={{ marginLeft: "10px" }}>{article?.source}</p>
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
  );
};

export default Mincard;
