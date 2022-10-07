import React from "react";
import { Footer, Topic } from "../../components";
import styles from "../../styles/Explore.module.css";

const explore = () => {
  return (
    <div >
      <Topic topic='Cancer' more={false} source='Nhs' />
      <Topic topic='Malaria' more={true} source='Nhs'/>
      <Topic topic='Ulcer' more={false} source='Nhs'/>
      <Topic topic='Cancer' more={false} source='MedicalNewsToday'/>
      <Topic topic='Diabetes' more={true} source='Mayor'/>
      
      <Footer />
    </div>
  );
};

export default explore;
