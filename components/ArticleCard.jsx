import { MoreHoriz, Star, StarOutline } from "@mui/icons-material";
import { Bookmark, BoxArrowUp } from "react-bootstrap-icons";
import React from "react";
import styles from "../styles/ArticleCard.module.css";
import { IconButton } from "@mui/material";

const ArticleCard = () => {
  return (
    <div className={styles.articleCard__container}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
            className={styles.image}
            src="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg"
            alt="Hi"
          />
        </div>
        <div className={styles.card__info}>
          {/*CAN REPLACE WITH CREATOR OR AUTHOR NAME AVATAR MIF START POSTING */}
          <p className={styles.category}>Technology</p>
          <div className={styles.card__text}>
            <p className={styles.title}>
              Im the title here Im the title here Im the ti v v v Im the title
              here Im the title here Im the title here Im the title heretle here
              Im the title here Im the title here here Im the title here Im the
              title here Im the title heretle here Im the title here Im the
              title here
            </p>
          </div>
          <div className={styles.card__infoBottom}>
            <div className={styles.source}>
              <img
                className={styles.source__image}
                src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/1iWBEgb7LzSkPNe2hZKOtv/81f36ef53123647708229b518f99480b/AB004ZM_SHOE_ANGLE_GLOBAL_MENS_TREE_RUNNER_DREAMY_GREEN__CREAM_HUSH.png"
                alt="Hi"
              />
              <p>Hookwal</p>
            </div>
            <div className={styles.bottom__right}>
          <IconButton className={styles.bottom__iconsWrapper}>
            <StarOutline className={styles.bottom__icons} />
          </IconButton>
          <IconButton className={styles.bottom__iconsWrapper}>
            <BoxArrowUp className={styles.bottom__icons} />
          </IconButton>
        </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {/* <IconButton className={styles.bottom__iconsWrapper}>
          <MoreHoriz className={styles.bottom__icons} />
        </IconButton> */}
    
      </div>
    </div>
  );
};

export default ArticleCard;
