import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const GTM_ID = 'GTM-NG37GL7';
        const GOOGLE_ANALYTICS = 'G-P391KWW5HX';
        return (
            <Html>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');`,
                        }}
                    />

                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`} />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}

                              
                                //this defaults to denying
                                gtag('consent', 'default', {
                                    'analytics_storage': 'denied'
                                });
                        
                                gtag('js', new Date());
                        
                                //este función es la que nos devuelve el valor de la cookie de preferencias
                                function getCookie() {
                                    const value = "; " + document.cookie;
                                    const parts = value.split("; CookieConsent=");
                                    if (parts.length === 2) return parts.pop().split(';').shift();
                                }
                        
                                //únicamente si el valor es true, se cargan los scripts de Google Analytics.
                                if(getCookie() === "true"){
                                    gtag('consent', 'update', {
                                        'analytics_storage': 'granted'
                                    });
                                }

                                gtag('config', '${GOOGLE_ANALYTICS}', {
                                    page_path: window.location.pathname,
                                });
                                `,
                    }} />
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;