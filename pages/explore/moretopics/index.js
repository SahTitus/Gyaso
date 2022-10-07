import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/MoreTopics.module.css";

const MoreTopics = () => {
  const router = useRouter();
  
  return (
    <div className={styles.moreTopics}>

    </div>
  );
};

export default MoreTopics;
