import "../styles/globals.scss";
import Router from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return loading ? (
    <div className={`container__spinner`}>
      <div className={`lds-ring`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
