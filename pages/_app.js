import "../styles/globals.scss";
import Router from "next/router";
import { useState, useRef } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
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
