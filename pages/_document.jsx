import Document, { Head, Html, Main, NextScript } from 'next/document';

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
                {/* <link rel="icon" href="/Reward.png" />
                  <link rel="icon" href="/favicon.ico" />
           <link rel="manifest" href="/manifest.json" /> */}

           <link rel="icon" href="/android-chrome-maskable-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
         <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body >
          <Main />
        
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;