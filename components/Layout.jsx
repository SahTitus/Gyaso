import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

function Layout({ children }) {
  const { pathname } = useRouter();

  const hide = pathname === '/searchPage' 

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
      <main className="main">{children}</main>
    </div>
  );
}

export default Layout;
