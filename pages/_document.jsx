import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link rel="icon" href="/android-chrome-maskable-512x512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&amp;display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#fff" />
          <meta
            name="description"
            content="Healthtage, discover incredible tips on your daily health.We've made your effort of searching for health information seamless. How to, treatments, cure, signs and symptoms, prevention."
          />
          <meta
            name="keywords"
            content="healthtage, nutrition, food, spirituality, parenting, pregnancy, heart health, men's health, sexual health, women's health, mental health, healthy living, skincare, sleep, human biology, eye health, weight loss, fitness, yoga, health, wellness, recipes, meditation, mindfulness, love, Sah Titus Samuel.
      "
          />
          {/* <Script
            async
            onError={(e) => {
              console.error("Ads Script failed to load", e);
            }}
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GO_AD_KEY}`}
            crossOrigin="anonymous"
          ></Script> */}
        </Head>
        <body>
          <Main />

          <NextScript />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <Script
           id={process.env.GO_AD_KEY}
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
            }} */}
          {/* /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
