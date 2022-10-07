import { ArrowBack, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/SearchPage.module.css";

const SearchPage = () => {
  return (
    <div styles={styles.searchPage}>
      <div className={styles.topBar}>
        <IconButton>
          <Search className={styles.searchIcon} />
        </IconButton>
        <form className={styles.search}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search for here..."
            />
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
