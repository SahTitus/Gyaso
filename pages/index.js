import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { HeadlineCard, SearchForm, Mincard, ArticleCard } from "../components";
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
      <div className={styles.search__container}>
        <SearchForm
          searchTerm={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      <div styles={styles.headlines__container}>
        <div className={styles.headlines__containerTop}>
          <h3>Headlines</h3>
          <h4>See More</h4>
        </div>
        <div className={styles.headlines}>
          <HeadlineCard />
          <HeadlineCard />
          <HeadlineCard />
        </div>
      </div>

      <div styles={styles.jusForYou__container}>
        <Mincard />
        <Mincard />
        <Mincard />
      </div>

      <div styles={styles.headlines__container}>
        <div className={styles.headlines__containerTop}>
          <h3>Headlines</h3>
          <h4>See More</h4>
        </div>
        <div className={styles.headlines}>
          <HeadlineCard />
          <HeadlineCard />
          <HeadlineCard />
        </div>
      </div>

      <div styles={styles.headlines__container}>
        <div className={styles.headlines__containerTop}>
          <h3>Headlines</h3>
          <h4>See More</h4>
        </div>
        <div className={styles.articles}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
