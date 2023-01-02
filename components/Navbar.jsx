import {
  AccountCircleOutlined,
  ArrowBack,
  FilterAltOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTopics } from "../lib/topics";
import { loading } from "../redux/topics";
import { useStateContex } from "../store/StateProvider";
import styles from "../styles/Navbar.module.css";

const Drawer = dynamic(() => import("./Drawer"));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  const router = useRouter();
  const show =
    pathname === "/topics" || pathname.includes("/topics/moretopics");

  const { setSearchTerm, setSearchTermLg } = useStateContex();
  const [queryTerm, setQueryTerm] = useState("");
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSearchType, setSelectedSearchType] =
    React.useState("articles");
  const openFilter = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const handleSearchTopics = (e) => {
    e.preventDefault();
    dispatch(searchTopics(queryTerm));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (queryTerm.trim() && selectedSearchType === "topics") {
      dispatch(searchTopics(queryTerm));
    } else {
      router.push("/searchPage");
      setSearchTermLg(queryTerm);
    }
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
            {pathname === "/topics" && <h5>Topics</h5>}
            {pathname.includes("/topics/moretopics") && (
              <>
                <IconButton
                  onClick={() => router.back()}
                  type="button"
                  aria-label="go back"
                >
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
              type="button"
              aria-label="filter"
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
              type="button"
              aria-label="search"
            >
              <Search className={styles.searchIcon} />
            </IconButton>
          </div>
        </form>
      </div>

      <div className={styles.navbar__right}>
        {!show ? (
          <>
            {/* <Link href='/shop'>
          <IconButton className={styles.navbar__right}>
              <ShoppingCartOutlined className={styles.avatar} />
            </IconButton>
          </Link> */}
            <IconButton
              onClick={handleOpen}
              className={styles.navbar__right}
              type="button"
              aria-label="profile"
            >
              <AccountCircleOutlined className={styles.avatar} />
            </IconButton>
          </>
        ) : (
          <>
            {!pathname.includes("/topics/moretopics") && (
              <form
                onSubmit={handleSearchTopics}
                className={`${styles.search} ${styles.topicsSearch}`}
              >
                <div className={styles.searchContainer}>
                  <input
                    className={styles.searchInput}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search topics here..."
                  />
                  <IconButton
                    onClick={handleSearchTopics}
                    className={styles.searchIcon__wrapper}
                    type="button"
                    aria-label="search"
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
