import React, { useState } from "react";
import { Dash, Plus } from "react-bootstrap-icons";
import styles from "../styles/Accordion.module.css";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.question} onClick={() => setExpanded(!expanded)}>
      <header  className={styles.haeder}>
        <p className={styles.title}>
         Details
        </p>
        <button className={styles.btn} type="button" aria-label="expand" onClick={() => setExpanded(!expanded)}>
          {expanded ? <Dash /> : <Plus />}
        </button>
      </header>
      {expanded && (
        <p className={styles.answer}>
          {info}Modern web application development is one type of process with a
          combination of different tools and methods that result in building
          flexible, secure, and modular apps. Progressive Web Application (PWA)
          is an example of this type of app development, allowing users to
          download mobile versions of websites on their devices to browse
          offline.
<br/>
          <span>New </span>
        </p>
      )}
    </article>
  );
};

export default Question;
