import React, { useState } from "react";
import Explore from "../pages/topics";
import Favorites from "../pages/favorites";

import styles from "../styles/Widget.module.css";

export const Widget = ({ showWidgets }) => {
  
  return (
    <div className={styles.widget}>
      <h4>{showWidgets ? 'Topics': 'Favorites'}</h4>
      {showWidgets ? <Explore /> : <Favorites isWidget={true} />}
    </div>
  );
};
