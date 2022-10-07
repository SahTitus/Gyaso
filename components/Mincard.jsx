import { MoreHoriz, StarOutline } from "@mui/icons-material";
import React from "react";
import { BoxArrowUp, CircleFill } from "react-bootstrap-icons";
import styles from "../styles/Mincard.module.css";
import { IconButton } from "@mui/material";

const Mincard = () => {
  return (
    <div className={styles.mincard}>
      <div className={styles.main}>
        <img
          className={styles.image}
          src="https://mindbodygreen-res.cloudinary.com/images/c_fill,g_auto,w_1120,h_747,q_auto,f_auto,fl_lossy/org/wh1zz9tmgl5u41m3p/dewy-skin.jpg"
          alt="Hi"
        />
        <div className={styles.mainInfo}>
          <div className={styles.topbar}>
            <p className={styles.topLeft}>
              <span>Marketing</span>
              <CircleFill className={styles.bullet} />
              <span>12h</span>
            </p>
            <IconButton>
              <MoreHoriz className={styles.moreHoriz} />
            </IconButton>
          </div>
          <div className={styles.content}>
            <p className={styles.title}>
              Content y ufy 7f7yf7yf 7 c77 77 ojoj jojdy g8o 7t0 0-f68
              8tf07t7ugv juu v v -0vr -rjv0rvv9rhv r-vr0v0uv{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <img
            className={styles.avatar}
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/1iWBEgb7LzSkPNe2hZKOtv/81f36ef53123647708229b518f99480b/AB004ZM_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_DREAMY_GREEN__CREAM_HUSH.png"
            alt="Hi"
          />
          <p>Hookwal</p>
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
