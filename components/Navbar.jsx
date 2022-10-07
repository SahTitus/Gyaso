import {
  AccountCircleOutlined,
  ArrowBack,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const { pathname } = useRouter();
  const router = useRouter();
  const show =
    pathname === "/explore" || pathname.includes("/explore/moretopics");

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
          <IconButton className={styles.navbar__right}>
            <AccountCircleOutlined className={styles.avatar} />
          </IconButton>
        ) : (
          <>
            {!pathname.includes("/explore/moretopics") && (
              <form className={styles.search}>
                <div className={styles.searchContainer}>
                  <input
                    className={styles.searchInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search topics here..."
                  />
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
