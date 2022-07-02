import "../styles/globals.scss";
import {useRouter, Router} from "next/router";
import { useState, useRef, useEffect } from "react";
import CookieConsent from "react-cookie-consent";


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
useEffect(() => {
  const GOOGLE_ANALYTICS = 'G-P391KWW5HX';
  const handleRouteChangeGA = (url) => {
      window.gtag("config", GOOGLE_ANALYTICS, {
          page_path: url,
      });
  };
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
    <Component {...pageProps} />
            <CookieConsent
            location="bottom"
            buttonText="Sí, utilizar cookies."
            onAccept={() => location.reload()}
            cookieName="CookieConsent"
            expires={150}
            enableDeclineButton="true"
            declineButtonText="No, no utilizar cookies"
            >
            Poner aquí el mensaje sobre el uso de cookies
            <a href="#enlace_hacia_politica_de_cookies">Política de Cookies</a>.
        </CookieConsent>
    </>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
