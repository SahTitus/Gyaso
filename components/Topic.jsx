import { ChevronRightOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Topic.module.css";

const Topic = ({topic, more, source, link}) => {
    const router = useRouter()

  return (
    <div  className={styles.topic}>
       <a
          target="_self"
          href={link}
          className={`${styles.link} ${styles.topic}`}
        >
     
      <Avatar src='https://media.istockphoto.com/vectors/first-aid-kit-ambulance-emergency-box-medical-help-suitcase-concept-vector-id1372326054?k=20&m=1372326054&s=612x612&w=0&h=Z1GLpkCGvjZFe9oHwLxfj9ehH_jUDUaAaG7l9-dktwE=' className={styles.avatar} />
      <div className={styles.info}>
        <p>{topic}</p>
        <span>{source}</span>
      </div>
      </a>
    </div>
  );
};

export default Topic;
