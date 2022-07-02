import "../styles/globals.scss";
import {useRouter, Router} from "next/router";
import { useState, useRef, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  const pageView = (url, title) => {
    window && window.dataLayer && window.dataLayer.push({
        'event': 'virtualPageview',
        'virtualPageURL': url,
        'virtualPageTitle': title,
    });
}
useEffect(() => {
    pageView(router.pathname, document.title);
    const handleRouteChange = (url) => {
        pageView(url, document.title);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
    };
}, []);
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
