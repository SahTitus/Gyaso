import { Search, ShoppingBasket, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styles from "../../styles/ShopNav.module.css";

const ShopNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <IconButton>
          {" "}
          <Menu />
        </IconButton>
        <h3>Shop</h3>
      </div>
      <div className={styles.right}>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <ShoppingBasket />
        </IconButton>
      </div>
    </div>
  );
};

export default ShopNavbar;
