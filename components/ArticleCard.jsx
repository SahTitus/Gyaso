import { MoreHoriz, Star, StarOutline } from "@mui/icons-material";
import { Bookmark, BoxArrowUp } from "react-bootstrap-icons";
import React from "react";
import styles from "../styles/ArticleCard.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";

const ArticleCard = ({article}) => {
  return (
    <div className={styles.articleCard__container}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <Image
          layout="fill"
            className={styles.image}
            src={article.image}
            alt={article.title}
            placeholder="blur"
            blurDataURL={article.image}
          />
        </div>
        <div className={styles.card__info}>
          {/*CAN REPLACE WITH CREATOR OR AUTHOR NAME AVATAR MIF START POSTING */}
          <p className={styles.category}>{article.sub_category}</p>
          <div className={styles.card__text}>
            <p className={styles.title}>
            {article.title}
            </p>
          </div>
          <div className={styles.card__infoBottom}>
            <div className={styles.source}>
              <Image
                className={styles.source__image}
                src={article.source_img}
                alt={article.source}
                width={30}
                height={25}
              />
              <p>{article.source}</p>
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
