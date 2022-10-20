import { ContactMail, ContactMailOutlined, Help, HelpOutline, InfoOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import { CircleFill } from "react-bootstrap-icons";
import styles from "../styles/Drawer.module.css";

const Drawer = ({handleClose}) => {
  return (
    <div onClick={handleClose} className={styles.drawer}>
      <div className={styles.top}>
        <Avatar src={' https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000'} className={styles.avatar} />
        <h4>Sah Titus</h4>
        <p>sah@gmail.com</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.list}>
            <InfoOutlined className={styles.listIcon}/>
          <p>About us</p>
        </div>
        <div className={styles.list}>
            <ContactMailOutlined className={styles.listIcon}/>
          <p>Contact</p>
        </div>
        <div className={styles.list}>
            <HelpOutline className={styles.listIcon}/>
          <p>Help & feedback</p>
        </div>
      </div>
      <div className={styles.logOut}>
            
          <Button className={styles.logOut_btn}>Log Out</Button>
        </div>
      <div className={styles.bottom}>
            
          <p>Privacy policy</p> <CircleFill className={styles.bullet}/> <p>Terms of Service</p>
        </div>
    </div>
  );
};

export default Drawer;
