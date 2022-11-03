import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchByCategory } from "../lib/articles";
import { getArticlesSSR } from "../redux/articles";
import styles from "../styles/Category.module.css";

const Category = ({ cate, index, dataSSR, setCategory }) => {
  const [selected, setSelected] = useState(0)
  const dispatch = useDispatch();
const isSelected= selected === index

const handleClick = (u) => { 
  setSelected(u)
  if (cate.category_id && cate.cate !=='all')  dispatch(fetchByCategory(cate.category_id));
  if (cate.cate ==='all')  dispatch(getArticlesSSR(dataSSR));
  setCategory(cate)
}


useEffect(() => {
if (index !== 0) setSelected(selected)
// eslint-disable-next-line react-hooks/exhaustive-deps
} ,[selected])

  return (
    <div onClick={handleClick} className={`${styles.cateBtn} ${selected === index ? styles.select : styles.cateBtn}`}>
        <Image
          className={styles.icon}
          alt={cate.title}
          src={
            cate?.icon
          }

          height={28}
          width={28}
        />
      <p>{cate?.cate}</p>
    </div>
  );
};

export default Category;
