import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  HeadlineCard,
  SearchForm,
  Mincard,
  ArticleCard,
  Category,
} from "../components";
import Footer from "../components/Footer";
// import Auth from "../components/Auth";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const resetForm = () => {
    setQuery("");
  };

  const handleSubmit = () => {};
  return (
    <div className={styles.home}>


      <div styles={styles.headlines__container}>
      <div className={styles.home__categories}>
        <Category cate="All" />
        <Category cate="Technology" />
        <Category cate="Engineering" />
        <Category cate="Digital marketing" />
        <Category cate="Psychology" />
        <Category cate="Health" />
      </div>
        <div className={styles.headlines}>

          <HeadlineCard image="https://newsghana.com.gh/wp-content/uploads/2021/04/zjwoqz4kiaq-696x392.jpg" />
          <HeadlineCard image="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" />
          <HeadlineCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREn_4u__5oaROubmkAfBLtSgXyUz_M3WSOfG5P4-o5kA&s" />
        </div>

        <div className={styles.seeMore}>
          {/* <h3>Headlines</h3> */}
          <Button className={styles.seeMoreBtn}>See More</Button>
        </div>
      </div>

      <div className={styles.justForYou__container}>
        <Mincard />
        <Mincard />
        <Mincard />
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

      <div styles={styles.headlines__container}>
        <div className={styles.articles}>
          {/* <h4>See More</h4> */}
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
