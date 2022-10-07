import React from "react";
import styles from "../styles/Category.module.css";

const Category = ({ cate }) => {
  return (
    <div className={styles.cateBtn}>
      <p>{cate}</p>
    </div>
  );
};

export default Category;
