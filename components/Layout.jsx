import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { Widget } from "./Widget";
import { IconButton } from "@mui/material";
import { AutoAwesomeOutlined, } from "@mui/icons-material";
import { useStateContex } from "../store/StateProvider";
import useMediaQuery from "./MediaQuery";

function Layout({ children }) {
  const { isLarge, isMedium, isSidebar } = useMediaQuery();
  const { setSignInAlert } = useStateContex();
  const shopPath = "/shop" || "/shop/product/[slug]";

  const { pathname } = useRouter();

  const hide = pathname === "/searchPage";

  const [showTopics, setShowTopics] = useState(true);

  const toggleShowWidget = () => {
    const user = JSON.parse(localStorage.getItem("userProfile"));
    if (!user?.result?._id) {
      setSignInAlert(true);
    } else {
      setShowTopics(!showTopics);
    }
  };

  return (
    <div className="layout">
      <Head>
        <title>Healthtage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {!hide && (
        <header className="header">
          {pathname.includes(shopPath) ? (
            //  <ShopNavbar />
            ""
          ) : (
            <Navbar />
          )}
        </header>
      )} */}
      <main
        style={{ display: "flex" }}
        className={`main ${
          (pathname !== "/searchPage" || !pathname.includes(shopPath)) &&
          "main__lgSearch"
        }`}
      >
         { isSidebar && 
         <>
        {(pathname === "/" || !pathname.includes(shopPath)) && (
          <div className="divFlex">
            <Sidebar />{" "}
          </div>
        )}

        </>}

        {children}

        {/* {isLarge && (
          <>
            {pathname === "/" && (
              <div className="divRight">
                <div className="widget__icons">
                  <IconButton
                    onClick={toggleShowWidget}
                    className="icon"
                    type="button"
                  >
                    <AutoAwesomeOutlined className={""} />
                  </IconButton>
                </div>
                <Widget showWidgets={showTopics} />
              </div>
            )}
          </>
        )} */}
      </main>
    </div>
  );
}

export default Layout;
