import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchByCategory } from "../lib/articles";
import { getArticlesSSR } from "../redux/articles";
import styles from "../styles/Category.module.css";

const Category = ({ cate, dataSSR, isSelect, setCategory }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cate.category_id && cate.cate !== "all")
      dispatch(fetchByCategory(cate.category_id));
    if (cate.cate === "all") dispatch(getArticlesSSR(dataSSR));
    setCategory(cate);
  };

  return (
    <div
      onClick={() => handleClick(cate)}
      className={`${styles.cateBtn} ${
        isSelect ? styles.select : styles.cateBtn
      }`}
    >
      <Image
        className={styles.icon}
        alt={cate.cate}
        src={cate?.icon}
        height={28}
        width={28}
      />
      <p>{cate?.cate}</p>
    </div>
  );
};

export default Category;
