import { MoreHoriz, Star, StarOutline } from "@mui/icons-material";
import React, { useState } from "react";
import { BoxArrowUp, CircleFill } from "react-bootstrap-icons";
import styles from "../styles/Mincard.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { deleteFromFavorites, saveArticles } from "../lib/articles";
import { useDispatch } from "react-redux";

const Mincard = ({ article, isWidget, isFavorite }) => {
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
      dispatch(deleteFromFavorites(article._id));
    } else {
      setFavoriteArray([...favoriteArray, userId]);
    }
  };

  const Saved = () => (
    <IconButton onClick={handleSave} className={styles.bottom__iconsWrapper}>
      {isSaved ? (
        <Star className={`${styles.bottom__icons} ${styles.saved}`} />
      ) : (
        <StarOutline className={styles.bottom__icons} />
      )}
    </IconButton>
  );

  return (
    <div className={styles.mincard}>
      <div className={styles.main}>
        {isWidget ? (
          <Image
            className={`${styles.image} `}
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
            height={50}
            width={60}
          />
        ) : (
          <Image
            className={`${styles.image} `}
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
            height={90}
            width={110}
          />
        )}
        <div className={styles.mainInfo}>
          <div className={styles.topbar}>
            <p className={styles.topLeft}>
              <span>{article?.category}</span>
              {/* <CircleFill className={styles.bullet} />
              <span>12h</span> */}
            </p>
            {!isWidget && (
              <IconButton>
                <MoreHoriz className={styles.moreHoriz} />
              </IconButton>
            )}
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
          {isFavorite ? (
            <Star
              onClick={handleSave}
              className={`${styles.bottomRightIcon} ${
                isFavorite && styles.saved
              }`}
            />
          ) : (
            <Saved />
          )}
          <IconButton
            onClick={handleSharing}
            className={styles.bottomRightIcon__wrapper}
          >
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
