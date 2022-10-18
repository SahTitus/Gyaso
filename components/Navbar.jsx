import {
  AccountCircleOutlined,
  ArrowBack,
  Search,
} from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogTitle, IconButton, Slide } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTopics } from "../lib/topics";
import { loading } from "../redux/topics";
import { useStateContex } from "../store/StateProvider";
import styles from "../styles/Navbar.module.css";
import Drawer from "./Drawer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const router = useRouter();
  const show =
    pathname === "/explore" || pathname.includes("/explore/moretopics");

  const { setSearchTerm } = useStateContex();
  const [queryTerm, setQueryTerm] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    setQueryTerm(e.target.value);
    setSearchTerm(e.target.value);
    dispatch(loading());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (queryTerm.trim()) {
      dispatch(searchTopics(queryTerm));
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__right}>
        {show ? (
          <>
            {pathname === "/explore" && <h5>Topics</h5>}
            {pathname.includes("/explore/moretopics") && (
              <>
                <IconButton onClick={() => router.back()}>
                  <ArrowBack className={styles.searchIcon} />
                </IconButton>
                <h5>Cancer</h5>
              </>
            )}
          </>
        ) : (
          <h5>Gyaso Read</h5>
        )}
      </div>
      <div className={styles.navbar__right}>
        {!show ? (
          <IconButton onClick={handleOpen} className={styles.navbar__right}>
            <AccountCircleOutlined className={styles.avatar} />
          </IconButton>
        ) : (
          <>
            {!pathname.includes("/explore/moretopics") && (
              <form onSubmit={handleSearch} className={styles.search}>
                <div className={styles.searchContainer}>
                  <input
                    className={styles.searchInput}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search topics here..."
                  />
                  <IconButton
                    onClick={handleSearch}
                    className={styles.searchIcon__wrapper}
                  >
                    <Search className={styles.searchIcon} />
                  </IconButton>
                </div>
              </form>
            )}
          </>
        )}
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        id='drawer'
        maxWidth="lg"
        className={styles.drawer}
        aria-describedby="alert-dialog-slide-description"
      >
       
        <Drawer />  

      
          {/* <Button onClick={handleClose}>Agree</Button> */}

      </Dialog>
    </div>
  );
};

export default Navbar;
