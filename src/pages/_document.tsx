import Document, { Head, Html, Main, NextScript } from "next/document";
import { Fragment } from "react";

const Favicons: React.FC = () => {
  return (
    <Fragment>
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link
        href="/favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        color="#884D9F"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
    </Fragment>
  );
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
