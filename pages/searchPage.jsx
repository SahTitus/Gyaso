import { ArrowBack, Search } from "@mui/icons-material";
import { Box, CircularProgress, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../components";
import Footer from "../components/Footer";
import { searchArticles, searchMoreArticles } from "../lib/articles";
import styles from "../styles/SearchPage.module.css";
import SearchAvatar from "../assets/SearchAvatar.jpg";
import { useStateContex } from "../store/StateProvider";
import { useRouter } from "next/router";
import PullToRefresh from "react-simple-pull-to-refresh";

const SearchPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [boolToRefresh, setBoolToRefresh] = useState(false);
  const { queriedArticles, isLoading } = useSelector((state) => state.articles);
  const { searchTermLg } = useStateContex();
  const getMoreArticles = async () => {
    dispatch(searchMoreArticles(searchTerm, queriedArticles.length));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchArticles(searchTerm));
    }
  };

  useEffect(() => {
    if (searchTermLg.trim()) {
      setSearchTerm(searchTermLg);
      dispatch(searchArticles(searchTermLg));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boolToRefresh]);

  const refreshHandler = async () => {
    const currentValue = boolToRefresh;
    setBoolToRefresh(!currentValue);

    setTimeout(() => {
      setBoolToRefresh(false);
    }, 8000);
  };

  

  return (
    <div className={styles.searchPage}>
      <div className={styles.topBar}>
        <IconButton
          onClick={handleSearch}
          className={styles.searchIcon__hideLg}
          type="button" aria-label="search"
        >
          <Search />
        </IconButton>
        <IconButton
          onClick={handleSearch}
          className={styles.searchIcon__showLg}
          type="button" aria-label="go back"
        >
          <ArrowBack onClick={() => router.back()} />
        </IconButton>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search for articles..."
              value={searchTerm}
            />
          </div>
          <IconButton
            className={styles.searchIcon__showLg}
            onClick={handleSearch}
            type="button" aria-label="search"
          >
            <Search className={styles.searchIcon} />
          </IconButton>
        </form>
      </div>

      {!queriedArticles.length > 0 && (
        <div className={styles.searchIcon__wrapper}>
          <div className={styles.card__image}>
            <Image
              className={styles.image}
              src={SearchAvatar}
              alt="Search Icon"
              placeholder="blur"
              height={300}
              width={300}
              blurDataURL={SearchAvatar}
            />
          </div>
          {!isLoading && queriedArticles.length === 0 && searchTerm && (
            <h3>No results found</h3>
          )}
        </div>
      )}

      {queriedArticles.length > 0 && (
        <div className={`${styles.searchedArticles}`}>
          <InfiniteScroll
            className={`${styles.articles__wrapper}`}
            dataLength={queriedArticles.length}
            next={getMoreArticles}
            hasMore={hasMore}
            loader={
              <Box className={styles.loadingState}>
                <CircularProgress className={styles.progress} role="progressbar" id="combo" aria-label="loading data" />
              </Box>
            }
            endMessage={<h4>Nothing more to show</h4>}
          >
              <PullToRefresh onRefresh={refreshHandler}>
            {queriedArticles.map((article, i) => (
              <ArticleCard key={article._id + i} article={article} />
            ))}
            </PullToRefresh>
          </InfiniteScroll>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SearchPage;
