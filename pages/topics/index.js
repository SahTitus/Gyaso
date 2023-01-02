import React from "react";
import { Footer, Topic } from "../../components";
import styles from "../../styles/Explore.module.css";
import { Box, Button, CircularProgress } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopics,
  fetchMoreTopics,
  searchMoreTopics,
} from "../../lib/topics";
import { getTopicsSSR, loading } from "../../redux/topics";
// import { connectToDb } from "../../utils/mongodb";
import { useStateContex } from "../../store/StateProvider";
import SearchAvatar from "../../assets/SearchAvatar.jpg";

const Explore = ({ topicsSSR }) => {
  const dispatch = useDispatch();
  const { queriedTopics, isLoading, topics, totalCount } = useSelector(
    (state) => state.topics
  );
  const { searchTerm } = useStateContex();

  const getMorePost = async () => {
    if (queriedTopics.length > 0 && searchTerm.length > 0) {
      dispatch(searchMoreTopics(searchTerm, queriedTopics.length));
    } else {
      dispatch(fetchMoreTopics(topics.length));
    }
  };

  const finish = totalCount <= queriedTopics?.length;

  useEffect(() => {
    if (topicsSSR?.length > 0) dispatch(getTopicsSSR(topicsSSR));
    dispatch(fetchTopics(topicsSSR?.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.topics}>
      {!isLoading && queriedTopics.length === 0 && !!searchTerm.length ? (
        <div className={styles.searchIcon__wrapper}>
          <div className={styles.card__image}>
            <Image
              className={styles.image}
              src={SearchAvatar}
              alt=""
              placeholder="blur"
              height={300}
              width={300}
              blurDataURL={SearchAvatar}
            />
          </div>

          <h3>No results found</h3>
        </div>
      ) : !!searchTerm.length && queriedTopics.length > 0 ? (
        <InfiniteScroll
          className={`${styles.topics__wrapper}`}
          dataLength={queriedTopics.length}
          next={getMorePost}
          hasMore={!finish}
          loader={
            <Box className={styles.loadingState}>
              <CircularProgress
                className={styles.progress}
                role="progressbar"
                id="combo"
                aria-label="loading data"
              />
            </Box>
          }
          endMessage={
            <div className={styles.endMessage}>
              <p>Results has ended.</p>
            </div>
          }
        >
          {queriedTopics.map((topic, i) => (
            <Topic
              key={topic._id + i}
              link={topic.link}
              topic={topic.title}
              source={topic.source}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          className={`${styles.topics__wrapper}`}
          dataLength={topics.length}
          next={getMorePost}
          loader={
            <Box className={styles.loadingState}>
              <CircularProgress
                className={styles.progress}
                role="progressbar"
                id="combo"
                aria-label="loading data"
              />
            </Box>
          }
          hasMore="true"
        >
          {topics.map((topic, i) => (
            <Topic
              key={topic._id + i}
              link={topic.link}
              topic={topic.title}
              source={topic.source}
            />
          ))}
        </InfiniteScroll>
      )}
      {queriedTopics.length > 0 ||
        (topics.length > 0 && (
          <div className={styles.fetchMore__lg}>
            <Button
              onClick={getMorePost}
              className={styles.fetchMore__btn}
              type="button"
              aria-label="see more"
            >
              See more
            </Button>
          </div>
        ))}
      <Footer />
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const { db } = await connectToDb();
//   const data = await db
//     .collection("topics")
//     .find()
//     .sort({ title: 1 })
//     .limit(20)
//     .toArray();

//   const topicsSSR = JSON.parse(JSON.stringify(data));

//   return {
//     props: { topicsSSR },
//   };
// };

export default Explore;
