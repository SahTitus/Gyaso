import React from "react";
import { useDispatch } from "react-redux";
import { fetchArticles, fetchByCategory } from "../lib/articles";
import { getArticlesSSR, loading } from "../redux/articles";
import styles from "../styles/Category.module.css";

const Category = ({ cate, dataSSR, isSelect, setCategory }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cate.category_id && cate.cate !== "all")
      dispatch(fetchByCategory(cate.category_id));
    // if (cate.cate === "all") dispatch(fetchArticles());
    if (cate.cate === "all") dispatch(getArticlesSSR(dataSSR));
    setCategory(cate);
    dispatch(loading());

  };

  return (
    <div
      onClick={() => handleClick(cate)}
      className={`${styles.cateBtn} ${
        isSelect ? styles.select : styles.cateBtn
      }`}
    >
      <p>{cate?.cate}</p>
    </div>
  );
};

export default Category;
