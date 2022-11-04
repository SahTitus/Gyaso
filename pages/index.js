import { Box, Button, CircularProgress } from "@mui/material";
// import Head from "next/head";
// import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Mincard, ArticleCard, Category } from "../components";
import Footer from "../components/Footer";
import {
  fetchArticles,
  fetchArticlesSSR,
  fetchMoreArticles,
  fetchMoreByCategory,
} from "../lib/articles";
import { getArticlesSSR, loading } from "../redux/articles";
import styles from "../styles/Home.module.css";
import { connectToDb } from "../utils/mongodb";
import { categories } from "../constants/categories.js";
import PullToRefresh from "react-simple-pull-to-refresh";
// import HumbleScraper from "./HumbleScraper";
import { useStateContex } from "../store/StateProvider";

function Home({ articlesSSR }) {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);

  const [hasMore, setHasMore] = useState(true);
  const [boolToRefresh, setBoolToRefresh] = useState(false);

  const { category, setCategory, setGetSSRData } = useStateContex();
  const getMorePost = async () => {
    if (category.cate !== "all") {
      dispatch(fetchMoreByCategory(category.category_id));
    } else {
      dispatch(fetchMoreArticles());
    }
  };

  useEffect(() => {
    if (articlesSSR.length > 0) dispatch(getArticlesSSR(articlesSSR));

    dispatch(fetchArticles());
    setGetSSRData(articlesSSR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchArticlesSSR());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boolToRefresh]);

  const refreshHandler = async () => {
    const currentValue = boolToRefresh;
    setBoolToRefresh(!currentValue);

    setTimeout(() => {
      setBoolToRefresh(false);
    }, 10000);
  };

  return (
    <div className={styles.home}>

        <div  className={styles.headlines__container}>
          <div className={styles.home__categories}>
            {categories.map((category, i) => (
              <Category
                dataSSR={articlesSSR}
                setCategory={setCategory}
                key={i}
                cate={category}
              />
            ))}
          </div>
          {/* {category.cate === "all" && (
          <>
            <div className={styles.headlines}>
              <HumbleScraper />
              <HeadlineCard image="https://newsghana.com.gh/wp-content/uploads/2021/04/zjwoqz4kiaq-696x392.jpg" />
              <HeadlineCard image="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" />
              <HeadlineCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREn_4u__5oaROubmkAfBLtSgXyUz_M3WSOfG5P4-o5kA&s" />
            </div>
            <div className={styles.seeMore}>
  
              <Button className={styles.seeMoreBtn}>See More</Button>
            </div>
          </>
        )} */}
        </div>

        {/* <div styles={styles.headlines__container}>
        <div className={styles.headlines__containerTop}>
          <h3>Headlines</h3>
          <h4>See More</h4>
        </div>
        <div className={styles.headlines}>
          <h1>Show random 10 topics on refresh </h1>
        </div>
      </div> */}

        {/* <div styles={styles.headlines__container}> */}
       
        <div
          className={`${styles.articles} ${
            category?.cate?.length && category?.cate !== "all" && styles.pushup
          }`}
        >
          <InfiniteScroll
            className={`${styles.articles__wrapper}`}
            dataLength={articles.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={
              <Box className={styles.loadingState}>
                <CircularProgress className={styles.progress} />
              </Box>
            }
            endMessage={<h4>Nothing more to show</h4>}
          >
             <PullToRefresh   className='pull_to_refresh' onRefresh={refreshHandler}>
            {articles.map(
              (article, i) =>
                article?.link &&
                article.title &&
                (article?.mini_card ? (
                  <Mincard key={article._id + i} article={article} />
                ) : (
                  <ArticleCard key={article._id + i} article={article} />
                ))
            )}
            </PullToRefresh>
          </InfiniteScroll>
        </div>
     

        <Footer />

    </div>
  );
}

export const getServerSideProps = async () => {
  const { db } = await connectToDb();
  const data = await db
    .collection("articles")
    .aggregate([{ $sample: { size: 5 } }])
    .toArray();

  const articlesSSR = JSON.parse(JSON.stringify(data));

  return {
    props: { articlesSSR },
  };
};

export default Home;
