import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { Widget } from "./Widget";
import { IconButton } from "@mui/material";
import { AutoAwesomeOutlined, StarOutline } from "@mui/icons-material";
import { useStateContex } from "../store/StateProvider";

function Layout({ children }) {
  

  const { setSignInAlert } = useStateContex();

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
        <title>Gyaso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!hide && (
        <header className="header">
          <Navbar />
        </header>
      )}
      <main
        style={{ display: "flex" }}
        className={`main ${pathname !== "/searchPage" && "main__lgSearch"}`}
      >
        {pathname === "/" && (
          <div className="divFlex">
            <Sidebar />{" "}
          </div>
        )}

        {children}
        {pathname === "/" && (
          <div className="divRight">
            <div className="widget__icons">
              <IconButton onClick={toggleShowWidget} className="icon">
                <AutoAwesomeOutlined className={""} />
              </IconButton>
            </div>
            <Widget showWidgets={showTopics} />
          </div>
        )}
      </main>
    </div>
  );
}

export default Layout;
