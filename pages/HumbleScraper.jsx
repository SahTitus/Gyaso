import React, { useEffect, useState } from "react";
import { scrape } from "../lib/scrapeApi";
import * as topics from "../constants/topics/topics.js";

const initialState = {
  mbg: false,
  nhs: false,
  mnt: false,
  mbg_pageNum: 1,
  isMbg_latest: false,
  isMbg_page: false,
  healthline: false,
  isCategories: false,
  isTopics: false,
  terms: [],
  action: false,
};
const HumbleScraper = () => {
  const [scrapeParams, setScrapeParams] = useState(initialState);
  const [errMsg, setErrmsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleMntCate = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isCategories: true,
      terms: topics.mnt_cate_keys,
      action: true,
    });
  };
  const handleMntTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isTopics: true,
      terms: topics.mnt_topics_keys,
      action: true,
    });
  };
  const reset = () => {
    setScrapeParams(initialState);
    console.log(scrapeParams);
  };

  const handleNhs = () => {
    setScrapeParams({ ...scrapeParams, nhs: true, action: true });
  };

  const handleMbgLatest = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_latest: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleMbgPages = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_page: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleHealthlineTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isTopics: true,
      terms: topics.healthline_topics_keys,
      action: true,
    });
  };

  const handleHealthlineCates = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isCategories: true,
      terms: topics.healthline_cate_keys,
      action: true,
    });
  };

  // isTopics, isCategories [healthline, medical news]

  const handleScrape = async () => {
    try {
   const {data} = await scrape(scrapeParams);
   console.log(data)
   setSuccessMsg(data)
    } catch (error) {
      setErrmsg(error);
    }

    // setScrapeParams({ ...scrapeParams, action: false });
  };

  useEffect(() => {
    if (scrapeParams.action) {
      handleScrape();

      console.log(scrapeParams);
    }
    setScrapeParams(initialState);
  }, [scrapeParams.action]);

  return (
    <div className="scrape-btn-container">
      <h3>{errMsg.message}</h3>
      <h3>{successMsg.msg}</h3>
      
      
      {/* <button onClick={handleNhs}>NHS</button> */}
      <button onClick={handleMbgPages}>Mbg Pages</button>
      <button onClick={handleMbgLatest}>Mbg Latest</button>
      {/* <button onClick={handleMntTopics}>MNT Topics</button> */}
      <button onClick={handleMntCate}>MNT Categories</button>
      {/* <button onClick={handleHealthlineTopics}>Healthline Topics</button> */}
      <button onClick={handleHealthlineCates}>Healthline Categories</button>
      <button className="scrape-reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default HumbleScraper;
