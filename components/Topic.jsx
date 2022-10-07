import { ChevronRightOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Topic.module.css";

const Topic = ({topic, more, source}) => {
    const router = useRouter()

  return (
    <div onClick={()=> router.push(`/explore/moretopics`)} className={styles.topic}>
        {/* https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000 */}
      <Avatar src='https://media.istockphoto.com/vectors/first-aid-kit-ambulance-emergency-box-medical-help-suitcase-concept-vector-id1372326054?k=20&m=1372326054&s=612x612&w=0&h=Z1GLpkCGvjZFe9oHwLxfj9ehH_jUDUaAaG7l9-dktwE=' className={styles.avatar} />
      <div className={styles.info}>
        <p>{topic}</p>
        <span>{source}</span>
      </div>

      <div className={styles.right}>
        {more ? <p>Read</p> : <ChevronRightOutlined />}
      </div>
    </div>
  );
};

export default Topic;
