import { FavoriteBorder } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { Dot } from "react-bootstrap-icons";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image__wrapper}>
        <FavoriteBorder className={styles.favorite} />
        <Image
          src="https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp"
          layout="fill"
          alt="hee"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
      <p>Fufu machine hhdd </p>
        {/* <Dot className={styles.bullet} /> */}
       
        
        <p>${100.99}</p>
      </div>
    </div>
  );
}; 

export default ProductCard;
