import { MoreHoriz, Star, StarOutline } from "@mui/icons-material";
import { Bookmark, BoxArrowUp } from "react-bootstrap-icons";
import React from "react";
import styles from "../styles/ArticleCard.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";

const ArticleCard = ({ article }) => {
  const url = `${article?.link}`;
  const title = `${article?.title}`;
  const shareDetails = { title, url };

  const liked = true;

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };

  return (
    <div className={styles.articleCard__container}>
      <div className={styles.card}>
        <a href={article.link} target="_self" className={styles.link}>
          <div className={styles.card__image}>
            <Image
              layout="fill"
              className={styles.image}
              src={
                article.image ||
                " https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000"
              }
              alt={article.title}
              placeholder="blur"
              blurDataURL={
                article.image ||
                " https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000"
              }
            />
          </div>
        </a>
        <a
          target="_self"
          href={article.link}
          className={`${styles.link} ${styles.card__info}`}
        >
          {/*CAN REPLACE WITH CREATOR OR AUTHOR NAME AVATAR MIF START POSTING */}
          <p className={styles.category}>{article.sub_category}</p>
          <div className={styles.card__text}>
            <p className={styles.title}>{article.title}</p>
          </div>
        </a>
        <div className={styles.card__info}>
          <div className={styles.card__infoBottom}>
            <a
              href={article.link}
              target="_self"
              className={`${styles.link} ${styles.source}`}
            >
              <Image
                className={styles.source__image}
                src={article.source_img}
                alt={article.source}
                width={20}
                height={20}
              />
              <p>{article.source}</p>
            </a>
            <div className={styles.bottom__right}>
              <IconButton className={styles.bottom__iconsWrapper}>
                {liked ? (
                  <Star className={`${styles.bottom__icons} ${styles.saved}`} />
                ) : (
                  <StarOutline className={styles.bottom__icons} />
                )}
              </IconButton>

              <IconButton
                onClick={handleSharing}
                className={styles.bottom__iconsWrapper}
              >
                <BoxArrowUp className={styles.bottom__icons} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>{""}</div>
    </div>
  );
};

export default ArticleCard;
