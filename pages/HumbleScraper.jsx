import React, { useEffect, useState } from "react";
import { scrape, scrape1, scrape2 } from "../lib/scrapeApi";
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
  isGaiam: false,
  isOnhealth: false,
  isMountelizabeth: false,
  isHarvard: false,
  isSelf: false,
  isShape: false,
  isSanteplusmag: false,
  humble: false,
  isArtofhealthyliving: false,
  isEatthis: false,
  terms: [],
  scrape_1: false,
  scrape_2: false,
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
      humble: true,
      action: true,
    });
  };
  const handleMntTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isTopics: true,
      humble: true,
      terms: topics.mnt_topics_keys,
      action: true,
    });
  };
  const reset = () => {
    setScrapeParams(initialState);
  };

  const handleNhs = () => {
    setScrapeParams({
      ...scrapeParams,
      mnt: true,
      isTopics: true,
      humble: true,
      terms: topics.mnt_topics_keys,
      action: true,
    });
  };

  const handleMbgLatest = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_latest: true,
      humble: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleMbgPages = () => {
    setScrapeParams({
      ...scrapeParams,
      mbg: true,
      isMbg_page: true,
      humble: true,
      terms: topics.mbg_keys,
      action: true,
    });
  };

  const handleHealthlineTopics = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isTopics: true,
      humble: true,
      terms: topics.healthline_topics_keys,
      action: true,
    });
  };

  const handleHealthlineCates = () => {
    setScrapeParams({
      ...scrapeParams,
      healthline: true,
      isCategories: true,
      humble: true,
      terms: topics.healthline_cate_keys,
      action: true,
    });
  };

  const handleHarvard = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.harvard_cate,
      scrape_1: true,
      isHarvard: true,
      action: true,
    });
  };
  const handleGaiam = () => {
    setScrapeParams({
      ...scrapeParams,
      isGaiam: true,
      scrape_2: true,
      action: true,
    });
  };
  const handleSelf = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.self_cate,
      scrape_2: true,
      isSelf: true,
      action: true,
    });
  };
  const handleShape = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.shape_cate,
      scrape_1: true,
      isShape: true,
      action: true,
    });
  };
  const handleOnHealth = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.onhealth_cate,
      scrape_2: true,
      isOnhealth: true,
      action: true,
    });
  };
  const handleMountelizabeth = () => {
    setScrapeParams({
      ...scrapeParams,
      terms: topics.mountelizabeth_cate,
      scrape_2: true,
      isMountelizabeth: true,
      action: true,
    });
  };

  const handleSanteplusmag = () => {
    setScrapeParams({
      ...scrapeParams,
      isSanteplusmag: true,
      scrape_1: true,
      terms: topics.santeplusmag_cate,
      action: true,
    });
  };

  const handleArtofhealthyliving = () => {
    setScrapeParams({
      ...scrapeParams,
      isArtofhealthyliving: true,
      scrape_1: true,
      terms: topics.artofhealthyliving_cate,
      action: true,
    });
  };
  const handleEatthis = () => {
    setScrapeParams({
      ...scrapeParams,
      scrape_2: true,
      isEatthis: true,
      terms: topics.eatthis_cate,
      action: true,
    });
  };

  // isTopics, isCategories [healthline, medical news]

  const handleScrape = async () => {
    try {
      if (scrapeParams.action && scrapeParams.scrape_1) {
        const { data } = await scrape1(scrapeParams);
      } else if (scrapeParams.action && scrapeParams.scrape_2) {
        const { data } = await scrape2(scrapeParams);
      } else if (scrapeParams.action && scrapeParams.humble) {
        const { data } = await scrape(scrapeParams);
      }

      setSuccessMsg(data);
    } catch (error) {
      setErrmsg(error);
    }

    // setScrapeParams({ ...scrapeParams, action: false });
  };

  useEffect(() => {
    if (scrapeParams.action) {
      handleScrape();

    }
    setScrapeParams(initialState);
  }, [scrapeParams.action]);

  return (
    <div className="scrape-btn-container">
      <h3>{errMsg.message}</h3>
      <h3>{successMsg.msg}</h3>

      <button onClick={handleNhs}>NHS</button>
      <button onClick={handleMbgPages}>Mbg Pages</button>
      <button onClick={handleMbgLatest}>Mbg Latest</button>
      <button onClick={handleMntTopics}>MNT Topics</button>
      <button onClick={handleMntCate}>MNT Categories</button>
      <button onClick={handleHealthlineTopics}>Healthline Topics</button>
      <button onClick={handleHealthlineCates}>Healthline Categories</button>

      <button onClick={handleOnHealth}>Onhealth</button>
      <button onClick={handleGaiam}>Gaiam</button>
      <button onClick={handleSanteplusmag}>Santeplusmag</button>
      <button onClick={handleHarvard}>Harvard</button>
      <button onClick={handleSelf}>Self</button>
      <button onClick={handleShape}>Shape</button>
      <button onClick={handleEatthis}>Eat this</button>
      <button onClick={handleArtofhealthyliving}>Artofhealthyliving</button>
      <button onClick={handleMountelizabeth}>Mountelizabeth</button>
      <button className="scrape-reset-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default HumbleScraper;
