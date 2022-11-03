import {
  ContactMailOutlined,
  HelpOutline,
  InfoOutlined,
} from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import { CircleFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth";
import styles from "../styles/Drawer.module.css";
import Ava from "../assets/Ava.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Drawer = ({ handleClose }) => {
  const dispatch = useDispatch();
  const router= useRouter();
  const user = JSON.parse(localStorage.getItem("userProfile"));

  const logOut = () => {
    dispatch(logout());
    window.location.reload(true);
  };

  return (
    <div onClick={handleClose} className={styles.drawer}>
      <div className={styles.top}>
        {user?.result?._id ? (
          <Avatar
            src={
              " https://img.freepik.com/free-psd/3d-stethoscope-icon_23-2149257784.jpg?w=2000"
            }
            className={styles.avatar}
          />
        ) : (
          <Image
           height={60}
           width={60}
            className={styles.image}
            src={Ava}
            alt={'Profile'}
            placeholder="blur"
            blurDataURL={Ava}
          />
        )}
        <h4>{user?.result?.name}</h4>
        <p>{user?.result?.email}</p>
      </div>
      <div className={styles.menu}>
        <div className={styles.list}>
          <InfoOutlined className={styles.listIcon} />
          <p>About us</p>
        </div>
        <div className={styles.list}>
          <ContactMailOutlined className={styles.listIcon} />
          <p>Contact</p>
        </div>
        <div className={styles.list}>
          <HelpOutline className={styles.listIcon} />
          <p>Help & feedback</p>
        </div>
      </div>
      <div className={styles.logOut}>
        {user?.result?._id ? (
          <Button onClick={logOut} className={styles.logOut_btn}>
            Log Out
          </Button>
        ) : (
          <Button onClick={()=>router.push('/auth')} className={styles.signin__btn}>
            Sign in
          </Button>
        )}
      </div>
      <div className={styles.bottom}>
        <p>Privacy policy</p> <CircleFill className={styles.bullet} />{" "}
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Drawer;
