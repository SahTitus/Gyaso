import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Mincard } from "../components";
import AuthAlert from "../components/AuthAlert";
import Footer from "../components/Footer";
import { fetchSavedArticles } from "../lib/articles";
import { useStateContex } from "../store/StateProvider";
import styles from "../styles/Favorites.module.css";
// import storage from "local-storage-fallback";

const Favorites = ({ isWidget }) => {
  const dispatch = useDispatch();

  const { setSignInAlert } = useStateContex();

  const [name, setName] = useState('');

  const { favoriteArticles } = useSelector((state) => state.articles);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userProfile"));
    setName(user?.result?.name);
    dispatch(fetchSavedArticles(user?.result?._id));
  }, [dispatch]);

  return (
    <div className={styles.favorites}>
      {favoriteArticles.length > 0 ? (
        favoriteArticles?.map((article, i) => (
          <Mincard
            isFavorite
            key={article._id + i}
            article={article}
            isWidget={isWidget}
          />
        ))
      ) : (
        <div className={styles.noFavorites}>
          <p>Hi {name?.split(" ")[0]},</p>
          <h3>You have no favorite stories yet</h3>
        </div>
      )}
      <AuthAlert />
      <Footer />
    </div>
  );
};

export default Favorites;
