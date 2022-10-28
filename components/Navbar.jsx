import {
  AccountCircleOutlined,
  ArrowBack,
  FilterAltOutlined,
  Search,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
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

const options = ["articles", "aopics"];

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSearchType, setSelectedSearchType] =
    React.useState("articles");
  const openFilter = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const selectFilter = (event, index) => {
    setSelectedSearchType(index);
    setAnchorEl(null);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={`${styles.navbar} ${
        pathname === "/auth" && styles.hide__navbar
      }`}
    >
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
          <h5>Healthtage</h5>
        )}
      </div>

      <div className={styles.searchArticles}>
        <form
          onSubmit={handleSearch}
          className={`${styles.search} ${styles.lg__search}`}
        >
          <div className={styles.searchContainer}>
            <IconButton
            
              onClick={handleClickListItem}
              className={styles.searchIcon__wrapper}
            >
              <FilterAltOutlined className={styles.searchIcon} />
            </IconButton>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={openFilter}
              onClose={handleCloseFilter}
            >
              <MenuItem
                key={5}
                onClick={(event) => selectFilter(event, "articles")}
              >
                Articles
              </MenuItem>
              <MenuItem
                key={1}
                onClick={(event) => selectFilter(event, "topics")}
              >
                Topics
              </MenuItem>
            </Menu>
            <input
              className={styles.searchInput}
              onChange={handleChange}
              type="text"
              placeholder={`Search ${
                selectedSearchType == "articles" ? "articles" : "topics"
              } here...`}
            />
            <IconButton
              onClick={handleSearch}
              className={styles.searchIcon__wrapper}
            >
              <Search className={styles.searchIcon} />
            </IconButton>
          </div>
        </form>
      </div>

      <div className={styles.navbar__right}>
        {!show ? (
          <>
            <IconButton onClick={handleOpen} className={styles.navbar__right}>
              <ShoppingCartOutlined className={styles.avatar} />
            </IconButton>
            <IconButton onClick={handleOpen} className={styles.navbar__right}>
              <AccountCircleOutlined className={styles.avatar} />
            </IconButton>
          </>
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
        id="drawer"
        className={styles.drawer}
        sx={{
          "& .MuiDialog-paper": {
            width: "90%",
            height: 435,
            borderRadius: 1.5,
          },
        }}
        // sx={{
        //   "& .MuiDialog-container": {
        //     justifyContent: "flex-end",
        //     alignItems: "flex-start"
        //   }
        // }}
        PaperProps={{
          sx: {
            m: 0,
            top: -30,
            right: 0,
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <Drawer handleClose={handleClose} />
      </Dialog>
    </div>
  );
};

export default Navbar;
