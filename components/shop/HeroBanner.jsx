import React from "react";
import Link from "next/link";
import styles from "../../styles/HeroBanner.module.css";
import Image from "next/image";

function HeroBanner({ heroBanner }) {
  return (
    <div className={styles.hero_banner_container}>
      <div>
        <div className={styles.text__wrapper}>
          <p className={styles.beats_solo}>{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
        </div>
        <div className={styles.image__wrapper}>
          <Image
            src={heroBanner.images[0]}
            layout="fill"
            alt="hee"
            className={styles.hero_banner_image}
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product} `}>
            <button type="button">Go to shop</button>
          </Link>
          <div className={styles.desc}>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
