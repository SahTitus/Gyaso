import Head from "next/head";
import React from "react";
import HeroBanner from "../../components/shop/HeroBanner";
import ProductCard from "../../components/shop/ProductCard";
import Navbar from "../../components/shop/ShopNavbar";
import styles from "../../styles/Shop.module.css";

const heroData = {
  smallText: "Sweet!",
  midText: "Great product",
  largeText1: "Buy now",
  images: [
    "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    "",
  ],
};

const index = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <div className={styles.shop}>
        <HeroBanner heroBanner={heroData} />
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default index;
