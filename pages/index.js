import Head from "next/head";
import { HomePage } from "components/templates";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariana Koudela</title>
        <meta name="Mariana Koudela" content="Mariana Koudela" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      </Head>
      <HomePage />
    </>
  );
}
