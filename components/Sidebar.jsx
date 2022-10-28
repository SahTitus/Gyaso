import React, { useState } from "react";
import Category from "./Category";
import styles from "../styles/Sidebar.module.css";
import { categories } from "../constants/categories.js";
import { useStateContex } from "../store/StateProvider";

const Sidebar = () => {
  const [hover, setHover] = useState(false);
  const { category, setCategory, getSSRData } = useStateContex();

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={`${styles.sidebar} ${styles.sidebarHover}`}
    >
      {categories.map((category, i) => (
        <Category
            dataSSR={getSSRData}
          setCategory={setCategory}
          key={i}
          cate={category}
        />
      ))}
    </div>
  );
};

export default Sidebar;
