import { IosShareOutlined, Star, StarOutline } from "@mui/icons-material";
import React, { useState } from "react";
import styles from "../styles/ArticleCard.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { saveArticles } from "../lib/articles";

const ArticleCard = ({ article }) => {
  const [favoriteArray, setFavoriteArray] = useState(article.saves);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userProfile"));

  const userId = user?.result?._id;

  const url = `${article?.link}`;
  const title = `${article?.title}`;
  const shareDetails = { title, url };

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

  const isSaved = favoriteArray?.find((like) => like === userId);

  const handleSave = async () => {
    dispatch(saveArticles(user?.result?._id, article._id));
    if (isSaved) {
      setFavoriteArray(favoriteArray.filter((id) => id !== userId));
    } else {
      setFavoriteArray([...favoriteArray, userId]);
    }
  };

  const Saved = () => (
    <IconButton
      onClick={handleSave}
      className={styles.bottom__iconsWrapper}
      type="button"
      aria-label="save"
    >
      {isSaved ? (
        <Star className={`${styles.bottom__icons} ${styles.saved}`} />
      ) : (
        <StarOutline className={styles.bottom__icons} />
      )}
    </IconButton>
  );

  return (
    <div className={styles.articleCard__container}>
      <div className={styles.card}>
        <a href={article?.link} target="_self" className={styles.link}>
          {article.image && (
            <div className={styles.card__image}>
              <Image
                layout="fill"
                className={styles.image}
                src={article?.image ||'/hospital.png'}
                alt={article.title}
                placeholder="blur"
                blurDataURL={article.image}
              />
            </div>
          )}
        </a>
        <div className={styles.content__wrapper}>
          <a
            target="_self"
            href={article?.link}
            className={`${styles.link} ${styles.card__info}`}
          >
            {/*CAN REPLACE WITH CREATOR OR AUTHOR NAME AVATAR MIF START POSTING */}
            <p className={styles.category}>{article.category}</p>
            <div className={styles.card__text}>
              <p className={styles.title}>{article.title}</p>
            </div>
          </a>
          <div className={styles.card__info}>
            <div className={styles.card__infoBottom}>
              <a
                href={article?.link}
                target="_self"
                className={`${styles.link} ${styles.source}`}
              >
                {
                  article?.source_img && (
                    <Image
                  className={styles.source__image}
                  src={article?.source_img}
                  alt={article.source}
                  width={35}
                height={30}
                />
                  )
                }
                <p>{article.source}</p>
              </a>
              <div className={styles.bottom__right}>
                <Saved />
                <IconButton
                  onClick={handleSharing}
                  className={styles.bottom__iconsWrapper}
                  type="button"
                  aria-label="share"
                >
                  <IosShareOutlined className={styles.bottom__icons} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>{""}</div>
    </div>
  );
};

export default ArticleCard;
