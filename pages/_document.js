import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="root">
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M25BVF7D"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
              opacity: 0,
              touchAction: "none",
              pointerEvents: "none",
            }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
