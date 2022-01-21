import Head from "next/head";
import { HomePage } from "components/templates";

export default function Home() {
  return (
    <>
      {/* <link
        rel="preload"
        as="font"
        href="/static/fonts/Avenir.woff2"
        type="font/woff2"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/YesevaOne/yesevaoneregular.woff2"
        type="font/woff2"
      /> */}
      <Head>
        <title>Mariana Koudela</title>
        <meta name="Mariana Koudela" content="Mariana Koudela" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      </Head>
      <HomePage />
    </>
  );
}
