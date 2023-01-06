/* eslint-disable react/no-unknown-property */
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../components";
import Footer from "../components/Footer";
import {
  fetchArticles,
  fetchArticlesSSR,
  fetchMoreArticles,
  fetchMoreByCategory,
} from "../lib/articles";
import styles from "../styles/Home.module.css";
import { categories } from "../constants/categories.js";
import PullToRefresh from "react-simple-pull-to-refresh";
import { useStateContex } from "../store/StateProvider";
import { NextSeo } from "next-seo";
import Script from "next/script";
import dynamic from "next/dynamic";
import { connectToDb } from "../utils/mongodb";
import { getArticlesSSR } from "../redux/articles";
// import HumbleScraper from "../components/HumbleScraper";
const ArticleCard = dynamic(() => import('../components/ArticleCard'))
const  Mincard = dynamic(() => import('../components/Mincard'))

function Home({articlesSSR}) {
  const dispatch = useDispatch();
  const { articles, totalCount, isLoading } = useSelector(
    (state) => state.articles
  );
  const [boolToRefresh, setBoolToRefresh] = useState(false);

  const { stateCategory, setCategory, setGetSSRData } = useStateContex();
  const getMorePost = async () => {
    if (stateCategory.cate !== "all") {
      dispatch(fetchMoreByCategory(stateCategory.category_id));
    } else {
      dispatch(fetchMoreArticles());
    }
  };

  const finish =
    totalCount < articles?.length || totalCount === articles?.length;
  console.log(articles);
  useEffect(() => {
    if (articlesSSR.length > 0) dispatch(getArticlesSSR(articlesSSR));

    dispatch(fetchArticles());
    setGetSSRData(articlesSSR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (boolToRefresh) dispatch(fetchArticlesSSR());
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
      <NextSeo
        title="Healthtage: health and medical tips"
        description="Healthtage, discover incredible tips on your daily health.We've made your effort of searching for health information seamless. How to, treatments, cure, signs and symptoms, prevention. "
        canonical="https://www.healthtage.com"
        openGraph={{
          url: "https://www.healthtage.com",
          title: "Healthtage: health and medical tips",
          description:
            "Healthtage, discover incredible tips on your daily health.We've made your effort of searching for health information seamless. How to, treatments, cure, signs and symptoms, prevention.",
          // images: [
          //   {
          //     url: "/gyaso.png",
          //     width: 1224,
          //     height: 724,
          //     alt: "Healthtage",
          //     type: "image/jpeg",
          //   },
          // ],
          site_name: "Healthtage",
          twitter: {
            handle: "@Healthtage",
            site: "@Healthtage",
            cardType: "summary_large_image",
          },
        }}
      />
      <div className={styles.headlines__container}>
        <div className={styles.home__categories}>
          {categories.map((category, i) => (
            <Category
              dataSSR={articles}
              setCategory={setCategory}
              key={i}
              cate={category}
              isSelect={stateCategory.category_id === category.category_id}
            />
          ))}
        </div>

        {/* <HumbleScraper /> */}
        {/* {category.cate === "all" && (
          <>
            <div className={styles.headlines}>
             
              <HeadlineCard image="https://newsghana.com.gh/wp-content/uploads/2021/04/zjwoqz4kiaq-696x392.jpg" />
            </div>
            <div className={styles.seeMore}>
  
              <Button className={styles.seeMoreBtn}>See More</Button>
            </div>
          </>
        )} */}
      </div>

      <div
        className={`${styles.articles} ${
          stateCategory?.cate?.length &&
          stateCategory?.cate !== "all" &&
          styles.pushup
        }`}
      >
        {isLoading ? (
          <Box className={styles.loadingState}>
            <CircularProgress
              className={styles.progress}
              role="progressbar"
              id="combo"
              aria-label="loading data"
            />
          </Box>
        ) : (
          <InfiniteScroll
            className={`${styles.articles__wrapper}`}
            dataLength={articles.length}
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
            hasMore={!finish}
            endMessage={
              <div className={styles.endMessage}>
                <p>Results has ended.</p>
              </div>
            }
          >
            <PullToRefresh
              className="pull_to_refresh"
              onRefresh={refreshHandler}
            >
              {articles?.map(
                (article, i) =>
                  article?.link &&
                  article.title &&
                  (article?.mini_card ? (
                    <div key={article._id + i}>
                      {/* {i % 8 === 0 && (
                        <div
                          className={styles.ads}
                          key={"ad1" + article._id + i}
                        >
                          <ins
                            className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-format="fluid"
                            data-full-width-responsive="true"
                            data-ad-layout-key="-6m+bz+1h-8+dv"
                            data-ad-client={process.env.GO_AD_KEY}
                            data-ad-slot="3517212256"
                          ></ins>
                          <Script id={process.env.GO_AD_KEY}>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                          </Script>
                        </div>
                      )} */}
                      <Mincard
                        key={article._id + i + article.title}
                        article={article}
                      />
                    </div>
                  ) : (
                    <div key={article._id + i}>
                      {i % 4 === 0 && (
                        <div
                          className={styles.ads}
                          key={i + "ads34" + article._id}
                        >
                          <ins
                            className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-format="fluid"
                            data-full-width-responsive="true"
                            data-ad-layout-key="-6m+bz+1h-8+dv"
                            data-ad-client={`${process.env.GO_AD_KEY}`}
                            data-ad-slot="3517212256"
                            // strategy="afterInteractive"
                          ></ins>
                          <Script id={process.env.GO_AD_KEY}>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                          </Script>
                        </div>
                      )}
                      <ArticleCard key={article._id + i} article={article} />
                    </div>
                  ))
              )}
            </PullToRefresh>
          </InfiniteScroll>
        )}
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
