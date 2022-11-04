import "../styles/globals.css";
import React from "react";
import { Layout } from "../components";
import { Provider } from "react-redux";
import store from "../store/store";
import { StateProvider } from "../store/StateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </Provider>
  );
}

export default MyApp;
