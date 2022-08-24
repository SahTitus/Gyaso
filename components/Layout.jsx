import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Gyaso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">{children}</main>
      {/* <footer className='footer'>
        <Footer />
      </footer> */}
    </div>
  );
}

export default Layout;
