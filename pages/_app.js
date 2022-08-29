import "../styles/globals.scss";
import {useRouter, Router} from "next/router";
import { useState, useRef, useEffect } from "react";
import CookieConsent, { Cookies, getCookieConsentValue  } from "react-cookie-consent";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();
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
useEffect(() => {
  const GOOGLE_ANALYTICS = 'UA-233482687-1';
  const handleRouteChangeGA = (url) => {
      window.gtag("config", GOOGLE_ANALYTICS, {
          page_path: url,
      });
  };
  console.log(getCookieConsentValue());

  router.events.on("routeChangeComplete", handleRouteChangeGA);
  return () => {
      router.events.off("routeChangeComplete", handleRouteChangeGA);
  };
}, [router.events]);
  return loading ? (
    <>
    <div className={`container__spinner`}>
      <div className={`lds-ring`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
